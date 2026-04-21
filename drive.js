/**
 * SolarPro Portal — Google Drive Integration
 * ============================================
 * Lê arquivos de pastas públicas do Google Drive
 * e os disponibiliza para o portal.
 *
 * CONFIGURAÇÃO:
 * 1. No Google Drive (solarproportal@gmail.com), crie a estrutura de pastas
 * 2. Compartilhe as pastas como "Qualquer pessoa com o link pode visualizar"
 * 3. Cole os IDs das pastas abaixo
 * 4. Crie uma API Key no Google Cloud Console e cole em DRIVE_API_KEY
 *
 * Como obter o ID de uma pasta:
 * Abra a pasta no Drive → copie o ID da URL:
 * https://drive.google.com/drive/folders/[FOLDER_ID_AQUI]
 */

const DRIVE_CONFIG = {
  API_KEY: 'AIzaSyAIU2q4xcMmcaej6A0ktS3GnZYFAMjEwww',
  FOLDERS: {
    certificados: 'https://drive.google.com/drive/folders/113cnBxIjjzRbRPk9ZvmLSEl3xtd1ABrf',
    inversores:   'https://drive.google.com/drive/folders/1nPrMBaYLk3ezLj5KoXAx4AG7lVsYlBMA',
    modulos:      'https://drive.google.com/drive/folders/1rFgm1pecGK3aTKxF_Pl-LweuMEDjkUeA',
  },
  FIELDS: 'files(id,name,size,modifiedTime,mimeType,description,webViewLink,webContentLink)',
};

/**
 * Busca arquivos de uma pasta do Google Drive via API
 */
async function fetchFolderFiles(folderId) {
  if (!DRIVE_CONFIG.API_KEY || DRIVE_CONFIG.API_KEY === 'SUA_API_KEY_AQUI') {
    // Modo demo: retorna dados de exemplo quando API não está configurada
    return null;
  }

  var query = "'" + folderId + "' in parents and trashed=false";
  const url = 'https://www.googleapis.com/drive/v3/files?' +
    'q=' + encodeURIComponent(query) +
    '&fields=' + encodeURIComponent(DRIVE_CONFIG.FIELDS) +
    '&orderBy=modifiedTime%20desc' +
    '&key=' + DRIVE_CONFIG.API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Drive API error: ${res.status}`);
    const data = await res.json();
    return data.files || [];
  } catch (err) {
    console.error('Erro ao buscar Drive:', err);
    return null;
  }
}

/**
 * Converte arquivo do Drive para formato do portal
 */
function driveFileToDoc(file, category) {
  const name = file.name || '';

  // Tenta extrair marca do nome do arquivo
  // Formato sugerido: "MARCA_MODELO_TIPO.pdf"
  const parts = name.replace('.pdf','').replace('.PDF','').split('_');
  const brand = parts[0] || 'Outros';

  // Detecta se é novo (últimos 30 dias)
  const modified = new Date(file.modifiedTime);
  const daysDiff = (Date.now() - modified.getTime()) / (1000 * 60 * 60 * 24);
  const isNew = daysDiff <= 30;

  // Formata o tamanho
  const bytes = parseInt(file.size || 0);
  const size = bytes > 1048576
    ? `${(bytes / 1048576).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;

  // Formata a data
  const dateStr = modified.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

  return {
    id: file.id,
    title: name.replace('.pdf','').replace('.PDF','').replace(/_/g,' '),
    sub: file.description || name.replace('.pdf','').replace('.PDF','').replace(/_/g,' '),
    brand: brand,
    size: size,
    date: dateStr,
    isNew: isNew,
    category: category,
    downloadUrl: file.webContentLink || `https://drive.google.com/uc?export=download&id=${file.id}`,
    viewUrl: file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`,
  };
}

/**
 * Dados de demonstração (usados quando a API não está configurada)
 */
const DEMO_DATA = {
  certs: [
    { id:'c1', title:'Growatt MIN 3000-6000TL-X', sub:'Certificado INMETRO + Declaração de Conformidade', brand:'Growatt', size:'1.2 MB', date:'Mar/2026', isNew:true, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c2', title:'Growatt SPH 3000-10000TL BL-UP', sub:'Certificado INMETRO — Híbrido com bateria', brand:'Growatt', size:'890 KB', date:'Jan/2026', isNew:false, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c3', title:'Fronius Primo GEN24 Plus', sub:'Certificado ANEEL + INMETRO', brand:'Fronius', size:'2.1 MB', date:'Fev/2026', isNew:false, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c4', title:'Deye SUN-6K-SG03LP1', sub:'Certificado INMETRO — Off-grid/Híbrido', brand:'Deye', size:'1.4 MB', date:'Jan/2026', isNew:false, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c5', title:'SAJ R5 Series 3-6kW', sub:'Certificado INMETRO + Manual técnico', brand:'SAJ', size:'950 KB', date:'Abr/2026', isNew:true, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c6', title:'SMA Sunny Boy 3.0-5.0', sub:'Certificado de Conformidade ANEEL', brand:'SMA', size:'1.8 MB', date:'Fev/2026', isNew:false, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c7', title:'Huawei SUN2000-5KTL-M1', sub:'Certificado INMETRO — Série M', brand:'Huawei', size:'2.0 MB', date:'Mar/2026', isNew:true, category:'cert', downloadUrl:'#', viewUrl:'#' },
    { id:'c8', title:'GoodWe GW5000-ET', sub:'Certificado INMETRO — Híbrido trifásico', brand:'GoodWe', size:'1.6 MB', date:'Abr/2026', isNew:true, category:'cert', downloadUrl:'#', viewUrl:'#' },
  ],
  inversores: [
    { id:'i1', title:'Growatt MIN 3000-6000TL-X', sub:'3–6 kW · Monofásico · String · 2 MPPT', brand:'Growatt', power:'3-6 kW', size:'3.4 MB', date:'Jan/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i2', title:'Growatt SPH 5000TL BL-UP', sub:'5 kW · Híbrido · MPPT duplo · Wi-Fi', brand:'Growatt', power:'5 kW', size:'2.9 MB', date:'Mar/2026', isNew:true, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i3', title:'Fronius Primo GEN24 5.0 Plus', sub:'5 kW · Backup integrado · Híbrido', brand:'Fronius', power:'5 kW', size:'4.2 MB', date:'Fev/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i4', title:'Deye SUN-12K-SG04LP3', sub:'12 kW · Trifásico · Híbrido · 3 MPPT', brand:'Deye', power:'12 kW', size:'3.1 MB', date:'Abr/2026', isNew:true, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i5', title:'SMA Sunny Tripower 10.0', sub:'10 kW · Trifásico · String · OptiTrack', brand:'SMA', power:'10 kW', size:'5.0 MB', date:'Jan/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i6', title:'Huawei SUN2000-5KTL-M1', sub:'5 kW · Smart · Monofásico · AI-powered', brand:'Huawei', power:'5 kW', size:'2.7 MB', date:'Mar/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i7', title:'SAJ R5-5K-T2', sub:'5 kW · Trifásico · String · RS485', brand:'SAJ', power:'5 kW', size:'2.2 MB', date:'Fev/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i8', title:'GoodWe GW5000-ET', sub:'5 kW · Híbrido · Trifásico · EPS', brand:'GoodWe', power:'5 kW', size:'3.8 MB', date:'Abr/2026', isNew:true, category:'inv', downloadUrl:'#', viewUrl:'#' },
    { id:'i9', title:'WEG SIW500H M020', sub:'20 kW · String · Trifásico · IP65', brand:'WEG', power:'20 kW', size:'4.5 MB', date:'Mar/2026', isNew:false, category:'inv', downloadUrl:'#', viewUrl:'#' },
  ],
  modulos: [
    { id:'m1', title:'Canadian Solar HiKu6 CS6W-550MS', sub:'550 Wp · Monocristalino · 144 células · IP68', brand:'Canadian Solar', power:'550 Wp', size:'1.8 MB', date:'Mar/2026', isNew:false, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m2', title:'BYD BYD415B10-51HZA', sub:'415 Wp · Half-Cell · Bifacial · 30 anos garantia', brand:'BYD', power:'415 Wp', size:'1.2 MB', date:'Abr/2026', isNew:true, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m3', title:'Longi Solar Hi-MO 6 LR5-72HTH', sub:'580 Wp · Monocristalino PERC · Anti-PID', brand:'Longi', power:'580 Wp', size:'2.0 MB', date:'Jan/2026', isNew:false, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m4', title:'Trina Solar Vertex S TSM-440DE09', sub:'440 Wp · Bifacial · Half-Cell · 210mm', brand:'Trina', power:'440 Wp', size:'1.5 MB', date:'Fev/2026', isNew:false, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m5', title:'JA Solar JAM72S30-545/MR', sub:'545 Wp · Monocristalino · 72 células · MBB', brand:'JA Solar', power:'545 Wp', size:'1.9 MB', date:'Abr/2026', isNew:true, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m6', title:'Risen Solar RSM120-8-600M', sub:'600 Wp · Bifacial · TOPCon · Dupla camada de vidro', brand:'Risen', power:'600 Wp', size:'2.3 MB', date:'Mar/2026', isNew:false, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m7', title:'Jinko Solar Tiger Neo JKM580N', sub:'580 Wp · N-Type TOPCon · Bifacial · IP68', brand:'Jinko Solar', power:'580 Wp', size:'2.1 MB', date:'Fev/2026', isNew:false, category:'mod', downloadUrl:'#', viewUrl:'#' },
    { id:'m8', title:'LONGi Hi-MO X6 LR5-54HTH', sub:'430 Wp · Residencial · HPBC · Anti-LID', brand:'Longi', power:'430 Wp', size:'1.7 MB', date:'Abr/2026', isNew:true, category:'mod', downloadUrl:'#', viewUrl:'#' },
  ],
};

/**
 * Carrega todos os dados (Drive ou demo)
 */
async function loadAllData() {
  const usingDemo = !DRIVE_CONFIG.API_KEY || DRIVE_CONFIG.API_KEY === 'SUA_API_KEY_AQUI';

  if (usingDemo) {
    console.info('SolarPro: modo demo. Configure DRIVE_CONFIG para usar dados reais do Google Drive.');
    return {
      certs: DEMO_DATA.certs,
      inversores: DEMO_DATA.inversores,
      modulos: DEMO_DATA.modulos,
      isDemo: true,
    };
  }

  // Busca paralela das 3 pastas
  const [certFiles, invFiles, modFiles] = await Promise.all([
    fetchFolderFiles(DRIVE_CONFIG.FOLDERS.certificados),
    fetchFolderFiles(DRIVE_CONFIG.FOLDERS.inversores),
    fetchFolderFiles(DRIVE_CONFIG.FOLDERS.modulos),
  ]);

  return {
    certs:     (certFiles || DEMO_DATA.certs).map(f => typeof f.id === 'string' && f.title ? f : driveFileToDoc(f, 'cert')),
    inversores:(invFiles  || DEMO_DATA.inversores).map(f => typeof f.id === 'string' && f.title ? f : driveFileToDoc(f, 'inv')),
    modulos:   (modFiles  || DEMO_DATA.modulos).map(f => typeof f.id === 'string' && f.title ? f : driveFileToDoc(f, 'mod')),
    isDemo: false,
  };
}
