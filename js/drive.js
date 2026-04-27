/**
 * SolarPro Portal — Carregamento de dados
 * ========================================
 * ESTRATÉGIA (abril/2026):
 *  • CERTIFICADOS: links diretos para a consulta oficial no registro.inmetro.gov.br
 *                  Cada card aponta para a consulta já pronta do registro específico.
 *                  Dados vêm de js/dataset_certs.js (SOLARPRO_CERTS).
 *                  Fallback: se SOLARPRO_CERTS não estiver disponível ou estiver vazio,
 *                  carrega PDFs da pasta pública do Google Drive (legado).
 *  • INVERSORES e MÓDULOS: links diretos para os datasheets oficiais de cada
 *                          fabricante. Dados em js/dataset.js.
 *
 * Motivo da separação: datasheets e certificados são disponibilizados oficialmente
 * pelos respectivos detentores (fabricantes e Inmetro). Apontar para esses lugares
 * garante que o cliente sempre veja a versão mais atualizada, respeita os direitos
 * autorais e elimina risco de hospedagem.
 *
 * LEGADO — Google Drive (ainda funcional como fallback):
 * 1. No Google Drive (solarproportal@gmail.com), estrutura:
 *      Certificados / <Fabricante> / arquivos.pdf
 * 2. Pasta compartilhada como "Qualquer pessoa com o link pode visualizar"
 * 3. O ID da pasta raiz de Certificados está abaixo.
 */

const DRIVE_CONFIG = {
  API_KEY: 'AIzaSyAIU2q4xcMmcaej6A0ktS3GnZYFAMjEwww',
  FOLDERS: {
    certificados: '113cnBxIjjzRbRPk9ZvmLSEl3xtd1ABrf',
  },
  FIELDS: 'files(id,name,size,modifiedTime,mimeType,description,webViewLink,webContentLink)',
};

const FOLDER_MIME = 'application/vnd.google-apps.folder';

/**
 * Busca filhos (arquivos + subpastas) de uma pasta do Drive.
 */
async function fetchFolderChildren(folderId) {
  if (!DRIVE_CONFIG.API_KEY || DRIVE_CONFIG.API_KEY === 'SUA_API_KEY_AQUI') {
    return null;
  }

  var query = "'" + folderId + "' in parents and trashed=false";
  var url = 'https://www.googleapis.com/drive/v3/files?' +
    'q=' + encodeURIComponent(query) +
    '&fields=' + encodeURIComponent(DRIVE_CONFIG.FIELDS) +
    '&orderBy=name' +
    '&pageSize=1000' +
    '&key=' + DRIVE_CONFIG.API_KEY;

  try {
    var res = await fetch(url);
    if (!res.ok) throw new Error('Drive API error: ' + res.status);
    var data = await res.json();
    return data.files || [];
  } catch (err) {
    console.error('Erro ao buscar pasta ' + folderId + ':', err);
    return null;
  }
}

/**
 * LEGADO: busca árvore de certificados do Drive (só usado se dataset_certs.js
 * não estiver disponível ou estiver vazio).
 */
async function fetchCertsTree(rootFolderId) {
  var children = await fetchFolderChildren(rootFolderId);
  if (!children) return null;

  var subfolders = children.filter(function(f) { return f.mimeType === FOLDER_MIME; });
  var looseFiles = children.filter(function(f) { return f.mimeType !== FOLDER_MIME; });

  var folderResults = await Promise.all(
    subfolders.map(async function(folder) {
      var files = await fetchFolderChildren(folder.id);
      var docs = (files || [])
        .filter(function(f) { return f.mimeType !== FOLDER_MIME; })
        .map(function(f) { return driveFileToDoc(f, 'cert', folder.name); });
      return { brand: folder.name, docs: docs };
    })
  );

  if (looseFiles.length > 0) {
    var looseDocs = looseFiles.map(function(f) { return driveFileToDoc(f, 'cert', 'Outros'); });
    folderResults.push({ brand: 'Outros', docs: looseDocs });
  }

  return folderResults.filter(function(g) { return g.docs.length > 0; });
}

/**
 * LEGADO: converte arquivo do Drive em doc (só para fallback).
 */
function driveFileToDoc(file, category, brand) {
  var name = file.name || '';
  var cleanName = name.replace(/\.pdf$/i, '');

  var modified = new Date(file.modifiedTime);
  var daysDiff = (Date.now() - modified.getTime()) / (1000 * 60 * 60 * 24);
  var isNew = daysDiff <= 30;

  var bytes = parseInt(file.size || 0);
  var size = bytes > 1048576
    ? (bytes / 1048576).toFixed(1) + ' MB'
    : Math.round(bytes / 1024) + ' KB';

  var dateStr = modified.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

  return {
    id: file.id,
    title: cleanName.replace(/_/g, ' '),
    sub: file.description || '',
    brand: brand || 'Outros',
    size: size,
    date: dateStr,
    isNew: isNew,
    category: category,
    source: 'drive',
    url: file.webViewLink || ('https://drive.google.com/file/d/' + file.id + '/view'),
    downloadUrl: file.webContentLink || ('https://drive.google.com/uc?export=download&id=' + file.id),
  };
}

/**
 * Converte uma linha de SOLARPRO_CERTS em doc do portal.
 *
 * Cada entrada pode apontar pra:
 *   - Consulta Inmetro: usa `registro` -> URL gerada por buildInmetroUrl
 *   - Certificado TÜV/fabricante: usa `tuvUrl` direto
 *
 * Se ambos estiverem presentes, `registro` tem precedência.
 */
function certRowToDoc(row) {
  var hasRegistro = !!row.registro;
  var url;
  var certType;

  if (hasRegistro) {
    url = (typeof buildInmetroUrl === 'function')
      ? buildInmetroUrl(row.registro)
      : 'https://registro.inmetro.gov.br/consulta/detalhe.aspx?pag=1&NumeroRegistro=' + encodeURIComponent(row.registro);
    certType = 'inmetro';
  } else if (row.tuvUrl) {
    url = row.tuvUrl;
    certType = 'tuv';
  } else {
    url = '#';
    certType = 'unknown';
  }

  return {
    id: 'cert-' + (row.brand + '-' + row.title + '-' + (row.registro || row.tuvUrl || '')).replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(),
    title: row.title,
    sub: row.sub || '',
    brand: row.brand,
    power: row.power || '',
    year: row.year || '',
    date: row.year || '',
    registro: row.registro || '',
    portaria: row.portaria || '',
    detentor: row.detentor || '',
    certType: certType,
    size: hasRegistro ? 'Consulta Inmetro' : 'Certificado fabricante',
    isNew: false,
    category: 'cert',
    source: 'external',
    url: url,
    downloadUrl: url,
  };
}

/**
 * Converte uma linha de dataset.js (inv/mod) em doc do portal.
 */
function datasetRowToDoc(row, category) {
  return {
    id: category + '-' + (row.brand + '-' + row.title).replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(),
    title: row.title,
    sub: row.sub || '',
    brand: row.brand,
    power: row.power || '',
    year: row.year || '',
    date: row.year || '',
    size: '',
    isNew: false,
    category: category,
    source: 'external',
    url: row.url,
    downloadUrl: row.url,
  };
}

/**
 * Agrupa uma lista plana de docs por fabricante.
 */
function groupDocsByBrand(docs) {
  var map = {};
  docs.forEach(function(d) {
    var b = d.brand || 'Outros';
    if (!map[b]) map[b] = [];
    map[b].push(d);
  });
  return Object.keys(map)
    .sort(function(a, b) { return a.localeCompare(b, 'pt-BR'); })
    .map(function(brand) { return { brand: brand, docs: map[brand] }; });
}

/**
 * Dados de demonstração para certificados (só usado se TUDO mais falhar).
 */
const DEMO_CERTS = [
  { id:'c1', title:'Growatt MIN 5000TL-X (demo)', sub:'Configure dataset_certs.js', brand:'Growatt', size:'Consulta Inmetro', date:'—', isNew:false, category:'cert', source:'external', url:'http://registro.inmetro.gov.br/consulta/', downloadUrl:'http://registro.inmetro.gov.br/consulta/' },
];

/**
 * Carrega todos os dados.
 *
 * Prioridade de fontes:
 *   CERTIFICADOS:
 *     1. SOLARPRO_CERTS (dataset_certs.js) — se definido e não vazio
 *     2. Google Drive (legado) — se dataset_certs.js estiver vazio
 *     3. DEMO_CERTS — se ambos falharem
 *   INVERSORES / MÓDULOS:
 *     1. SOLARPRO_INVERSORES / SOLARPRO_MODULOS (dataset.js)
 */
async function loadAllData() {
  // INVERSORES e MÓDULOS — do dataset estático
  var invDocs = (typeof SOLARPRO_INVERSORES !== 'undefined' ? SOLARPRO_INVERSORES : [])
    .map(function(r) { return datasetRowToDoc(r, 'inv'); });
  var modDocs = (typeof SOLARPRO_MODULOS !== 'undefined' ? SOLARPRO_MODULOS : [])
    .map(function(r) { return datasetRowToDoc(r, 'mod'); });

  var inversoresTree = groupDocsByBrand(invDocs);
  var modulosTree    = groupDocsByBrand(modDocs);

  // CERTIFICADOS — prioridade pro dataset estático, fallback pro Drive
  var certsTree;
  var isDemo = false;
  var certsSource = 'unknown';

  if (typeof SOLARPRO_CERTS !== 'undefined' && Array.isArray(SOLARPRO_CERTS) && SOLARPRO_CERTS.length > 0) {
    var certDocs = SOLARPRO_CERTS.map(certRowToDoc);
    certsTree = groupDocsByBrand(certDocs);
    certsSource = 'dataset';
    console.info('SolarPro: certificados carregados do dataset estático (' + SOLARPRO_CERTS.length + ' registros).');
  } else {
    console.info('SolarPro: dataset_certs.js vazio ou ausente, tentando Google Drive...');
    var usingDemoDrive = !DRIVE_CONFIG.API_KEY || DRIVE_CONFIG.API_KEY === 'SUA_API_KEY_AQUI';
    if (usingDemoDrive) {
      certsTree = groupDocsByBrand(DEMO_CERTS);
      isDemo = true;
      certsSource = 'demo';
    } else {
      var driveTree = await fetchCertsTree(DRIVE_CONFIG.FOLDERS.certificados);
      if (driveTree && driveTree.length > 0) {
        certsTree = driveTree;
        certsSource = 'drive';
        console.info('SolarPro: certificados carregados do Google Drive.');
      } else {
        certsTree = groupDocsByBrand(DEMO_CERTS);
        isDemo = true;
        certsSource = 'demo';
      }
    }
  }

  return {
    certs:       certsTree,
    inversores:  inversoresTree,
    modulos:     modulosTree,
    isDemo:      isDemo,
    certsSource: certsSource,
  };
}
