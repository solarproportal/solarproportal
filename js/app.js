/**
 * SolarPro Portal — App Principal
 * Navegação: Categoria → Fabricante → Documentos
 *
 * Cada doc tem um campo `source`:
 *  - 'drive'     → PDF hospedado pela ROV (certificados)
 *  - 'external'  → Link oficial do fabricante (inversores, módulos)
 */

// Árvore agrupada por fabricante
let DB = { certs: [], inversores: [], modulos: [], isDemo: false };

// Fabricante selecionado em cada categoria (null = lista de fabricantes)
let selectedBrand = { certs: null, inversores: null, modulos: null };

const CAT_INFO = {
  certs:      { label: 'Certificados',                       type: 'cert', sub: 'Selecione um fabricante para ver os documentos' },
  inversores: { label: 'Datasheets de Inversores',           type: 'inv',  sub: 'Selecione um fabricante para ver os datasheets oficiais' },
  modulos:    { label: 'Datasheets de Módulos Fotovoltaicos', type: 'mod', sub: 'Selecione um fabricante para ver os datasheets oficiais' },
};

// ===== ÍCONES SVG =====
const ICONS = {
  cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  inv:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M8 12h8"/></svg>',
  mod:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><rect x="2" y="3" width="9" height="9" rx="1"/><rect x="13" y="3" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>',
  dl:   '<svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/></svg>',
  ext:  '<svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg>',
  cal:  '<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/></svg>',
  bolt: '<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/></svg>',
};

// ===== HELPERS =====
function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getAllDocs(catKey) {
  const groups = DB[catKey] || [];
  const all = [];
  groups.forEach(g => g.docs.forEach(d => all.push(d)));
  return all;
}

function getInitials(brand) {
  if (!brand) return '?';
  const words = brand.trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return brand.substring(0, 2).toUpperCase();
}

// ===== CRIAÇÃO DE CARD DE DOCUMENTO =====
function createDocCard(doc) {
  const type = doc.category;
  const badgeLabel = type === 'cert' ? 'Certificado' : type === 'inv' ? 'Inversor' : 'Módulo';
  const powerMeta = doc.power
    ? '<div class="meta-tag">' + ICONS.bolt + '<span>' + escapeHTML(doc.power) + '</span></div>'
    : '';
  const yearMeta = doc.date
    ? '<div class="meta-tag">' + ICONS.cal + '<span>' + escapeHTML(doc.date) + '</span></div>'
    : '';

  const isExternal = doc.source === 'external';
  const isCert = type === 'cert';
  const isInmetro = isCert && doc.certType === 'inmetro';
  const isTuv = isCert && doc.certType === 'tuv';

  // Label/ícone/texto variam conforme origem do doc
  var sizeLabel, btnLabel, btnIcon, externalBadgeLabel;
  if (isInmetro) {
    sizeLabel = doc.registro ? 'Registro ' + escapeHTML(doc.registro) : 'Consulta Inmetro';
    btnLabel = 'Consultar Inmetro';
    btnIcon = ICONS.ext;
    externalBadgeLabel = 'Inmetro';
  } else if (isTuv) {
    sizeLabel = 'Certificado fabricante';
    btnLabel = 'Ver certificado';
    btnIcon = ICONS.ext;
    externalBadgeLabel = 'TÜV / Fabricante';
  } else if (isExternal) {
    sizeLabel = 'Site oficial';
    btnLabel = 'Abrir datasheet';
    btnIcon = ICONS.ext;
    externalBadgeLabel = 'Oficial';
  } else {
    // Legado: PDF do Drive
    sizeLabel = doc.size ? 'PDF · ' + doc.size : 'PDF';
    btnLabel = 'Baixar';
    btnIcon = ICONS.dl;
    externalBadgeLabel = '';
  }

  // Info extra pra certificado: portaria aplicável
  const portariaMeta = (isCert && doc.portaria)
    ? '<div class="meta-tag meta-portaria"><span>' + escapeHTML(doc.portaria) + '</span></div>'
    : '';

  return '' +
    '<div class="doc-card" data-brand="' + escapeHTML(doc.brand) + '" data-cat="' + type + '">' +
      '<div class="doc-card-top">' +
        '<div class="doc-icon ' + type + '">' + ICONS[type] + '</div>' +
        '<div class="doc-badges">' +
          '<span class="badge badge-' + type + '">' + badgeLabel + '</span>' +
          (isExternal && externalBadgeLabel ? '<span class="badge badge-external">' + externalBadgeLabel + '</span>' : '') +
          (doc.isNew ? '<span class="badge badge-new">Novo</span>' : '') +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="doc-title">' + escapeHTML(doc.title) + '</div>' +
        (doc.sub ? '<div class="doc-sub">' + escapeHTML(doc.sub) + '</div>' : '') +
      '</div>' +
      '<div class="doc-meta">' +
        yearMeta +
        powerMeta +
        portariaMeta +
      '</div>' +
      '<div class="doc-footer">' +
        '<span class="doc-size">' + sizeLabel + '</span>' +
        '<a href="' + escapeHTML(doc.url) + '" ' +
          (doc.url !== '#' ? 'target="_blank" rel="noopener"' : '') +
          ' class="btn-download ' + (isExternal ? 'btn-external' : '') + '"' +
          ' onclick="handleOpen(event, this)"' +
          ' data-url="' + escapeHTML(doc.url) + '"' +
          ' data-source="' + (doc.source || 'drive') + '">' +
          btnIcon + ' ' + btnLabel +
        '</a>' +
      '</div>' +
    '</div>';
}

// ===== CRIAÇÃO DE CARD DE FABRICANTE =====
function createBrandCard(catKey, group) {
  const type = CAT_INFO[catKey].type;
  const initials = getInitials(group.brand);
  const count = group.docs.length;
  const label = count + ' documento' + (count !== 1 ? 's' : '');
  const brandEsc = escapeHTML(group.brand).replace(/'/g, "\\'");

  return '' +
    '<button class="brand-card cat-' + type + '" onclick="openBrand(\'' + catKey + '\', \'' + brandEsc + '\')">' +
      '<div class="brand-avatar">' + escapeHTML(initials) + '</div>' +
      '<div class="brand-info">' +
        '<div class="brand-name">' + escapeHTML(group.brand) + '</div>' +
        '<div class="brand-count">' + label + '</div>' +
      '</div>' +
      '<span class="brand-arrow">→</span>' +
    '</button>';
}

// ===== RENDER DA VIEW (fabricantes ou docs) =====
function renderCategoryView(catKey) {
  const viewEl = document.getElementById('view-' + catKey);
  const breadcrumbEl = document.getElementById('breadcrumb-' + catKey);
  const subEl = document.getElementById('sub-' + catKey);
  const countEl = document.getElementById(catKey === 'certs' ? 'cert-count' : catKey === 'inversores' ? 'inv-count' : 'mod-count');
  const searchInput = document.getElementById('search-' + catKey);
  const searchVal = (searchInput && searchInput.value || '').toLowerCase().trim();

  const brand = selectedBrand[catKey];
  const groups = DB[catKey] || [];

  if (brand === null) {
    // --- NÍVEL 1: lista de fabricantes ---
    breadcrumbEl.innerHTML = '';
    subEl.textContent = CAT_INFO[catKey].sub;

    if (searchVal) {
      const all = getAllDocs(catKey);
      const filtered = all.filter(d => matchesSearch(d, searchVal));
      countEl.textContent = filtered.length + ' resultado' + (filtered.length !== 1 ? 's' : '');
      if (filtered.length === 0) {
        viewEl.innerHTML = '<div class="empty-state">Nenhum documento encontrado para "' + escapeHTML(searchVal) + '".</div>';
      } else {
        viewEl.innerHTML = '<div class="card-grid">' + filtered.map(createDocCard).join('') + '</div>';
      }
      return;
    }

    const totalDocs = groups.reduce((s, g) => s + g.docs.length, 0);
    countEl.textContent = groups.length + ' fabricante' + (groups.length !== 1 ? 's' : '') + ' · ' + totalDocs + ' documento' + (totalDocs !== 1 ? 's' : '');

    if (groups.length === 0) {
      viewEl.innerHTML = '<div class="empty-state">Nenhum fabricante cadastrado ainda.</div>';
    } else {
      viewEl.innerHTML = '<div class="brand-grid">' + groups.map(g => createBrandCard(catKey, g)).join('') + '</div>';
    }
  } else {
    // --- NÍVEL 2: docs do fabricante ---
    const group = groups.find(g => g.brand === brand);
    const docs = group ? group.docs : [];

    breadcrumbEl.innerHTML =
      '<nav class="breadcrumb">' +
        '<a onclick="openBrand(\'' + catKey + '\', null)">' + escapeHTML(CAT_INFO[catKey].label) + '</a>' +
        '<span class="bc-sep">/</span>' +
        '<span class="bc-current">' + escapeHTML(brand) + '</span>' +
      '</nav>';

    subEl.textContent = 'Documentos do fabricante ' + brand;

    const filtered = searchVal ? docs.filter(d => matchesSearch(d, searchVal)) : docs;
    countEl.textContent = filtered.length + ' documento' + (filtered.length !== 1 ? 's' : '');

    if (filtered.length === 0) {
      viewEl.innerHTML = '<div class="empty-state">Nenhum documento encontrado' + (searchVal ? ' para essa busca' : '') + '.</div>';
    } else {
      viewEl.innerHTML = '<div class="card-grid">' + filtered.map(createDocCard).join('') + '</div>';
    }
  }
}

function matchesSearch(doc, searchVal) {
  return (doc.title || '').toLowerCase().includes(searchVal) ||
         (doc.brand || '').toLowerCase().includes(searchVal) ||
         (doc.sub   || '').toLowerCase().includes(searchVal) ||
         (doc.power || '').toLowerCase().includes(searchVal);
}

// ===== NAVEGAÇÃO =====
window.openBrand = function(catKey, brand) {
  selectedBrand[catKey] = brand;
  const searchInput = document.getElementById('search-' + catKey);
  if (searchInput) searchInput.value = '';
  renderCategoryView(catKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== HANDLER DE ABRIR DOC =====
window.handleOpen = function(e, btn) {
  if (btn.dataset.url === '#') {
    e.preventDefault();
    showToast('⚠️ Documento ainda não disponível.', 'error');
    return;
  }
  // Link externo: o browser abre em nova aba naturalmente.
  // Só animamos o botão por feedback visual.
  const isExt = btn.dataset.source === 'external';
  if (!isExt) {
    // Para PDFs do Drive, também deixa abrir em nova aba.
    btn.classList.add('opening');
    setTimeout(() => btn.classList.remove('opening'), 800);
  }
};

// ===== TOAST =====
function showToast(msg, type) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + (type || '');
  setTimeout(() => { t.className = 'toast'; }, 3500);
}

// ===== TABS =====
function showTab(tabName) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link, .mob-link').forEach(a => a.classList.remove('active'));

  const section = document.getElementById('tab-' + tabName);
  if (section) section.classList.add('active');

  document.querySelectorAll('[data-tab="' + tabName + '"]').forEach(a => a.classList.add('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const mm = document.getElementById('mobileMenu');
  if (mm) mm.classList.remove('open');
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-tab]');
  if (!link) return;
  const tab = link.dataset.tab;
  if (['home','certs','inversores','modulos'].includes(tab)) {
    e.preventDefault();
    showTab(tab);
  }
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ===== SEARCH =====
function setupSearch(inputId, catKey) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => renderCategoryView(catKey));
}

// ===== FORMULÁRIO DE SUGESTÃO =====
function setupSuggestForm() {
  const form = document.getElementById('suggest-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const category = document.getElementById('sf-category').value.trim();
    const brand    = document.getElementById('sf-brand').value.trim();
    const model    = document.getElementById('sf-model').value.trim();
    const message  = document.getElementById('sf-message').value.trim();
    const email    = document.getElementById('sf-email').value.trim();

    if (!category) {
      showToast('Selecione uma categoria.', 'error');
      document.getElementById('sf-category').focus();
      return;
    }
    if (!model) {
      showToast('Informe o modelo ou nome do documento.', 'error');
      document.getElementById('sf-model').focus();
      return;
    }

    const subject = '[SolarPro] Sugestão de documento: ' + (brand ? brand + ' ' : '') + model;

    let body = 'Olá,\n\nGostaria de sugerir a inclusão do seguinte documento no SolarPro Portal:\n\n';
    body += '• Categoria: ' + category + '\n';
    if (brand) body += '• Fabricante: ' + brand + '\n';
    body += '• Modelo / Documento: ' + model + '\n';
    if (message) body += '\nObservações:\n' + message + '\n';
    if (email)   body += '\nContato: ' + email + '\n';
    body += '\n— Enviado via SolarPro Portal';

    const mailto = 'mailto:solarproportal@gmail.com' +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
    showToast('✓ Abrindo seu app de e-mail com a sugestão preenchida...', 'success');
    setTimeout(() => form.reset(), 800);
  });
}

// ===== ANIMAÇÃO DE NÚMEROS =====
function animateCount(el, target) {
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

// ===== INIT =====
async function init() {
  try {
    DB = await loadAllData();

    const totalCerts = getAllDocs('certs').length;
    const totalInv   = getAllDocs('inversores').length;
    const totalMod   = getAllDocs('modulos').length;

    const psC = document.getElementById('ps-certs');
    const psI = document.getElementById('ps-inv');
    const psM = document.getElementById('ps-mod');
    if (psC) animateCount(psC, totalCerts);
    if (psI) animateCount(psI, totalInv);
    if (psM) animateCount(psM, totalMod);

    const hcc = document.getElementById('home-count-certs');
    const hci = document.getElementById('home-count-inv');
    const hcm = document.getElementById('home-count-mod');
    if (hcc) hcc.textContent = totalCerts;
    if (hci) hci.textContent = totalInv;
    if (hcm) hcm.textContent = totalMod;

    // Recent grid — apenas certificados novos (últimos 30 dias)
    const recent = getAllDocs('certs').filter(d => d.isNew).slice(0, 6);
    const recentContainer = document.getElementById('recent-grid');
    if (recentContainer) {
      if (recent.length > 0) {
        recentContainer.innerHTML = recent.map(createDocCard).join('');
      } else {
        const fallback = getAllDocs('certs').slice(0, 3);
        if (fallback.length > 0) {
          recentContainer.innerHTML = fallback.map(createDocCard).join('');
        } else {
          recentContainer.innerHTML = '<div class="empty-state">Nenhum certificado disponível ainda.</div>';
        }
      }
    }
    const recentBadge = document.getElementById('recent-badge');
    if (recentBadge) recentBadge.textContent = recent.length;

    renderCategoryView('certs');
    renderCategoryView('inversores');
    renderCategoryView('modulos');

    setupSearch('search-certs', 'certs');
    setupSearch('search-inversores', 'inversores');
    setupSearch('search-modulos', 'modulos');

    setupSuggestForm();

    if (DB.isDemo) {
      setTimeout(() => showToast('📋 Modo demonstração para certificados — configure o Google Drive para dados reais', ''), 1000);
    }
  } catch (err) {
    console.error('Erro ao inicializar:', err);
    showToast('Erro ao carregar dados. Verifique o console.', 'error');
  }
}

document.addEventListener('DOMContentLoaded', init);
