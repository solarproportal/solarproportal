/**
 * SolarPro Portal — App Principal
 */

let DB = { certs: [], inversores: [], modulos: [], isDemo: false };
let activeFilters = { certs: 'Todos', inversores: 'Todos', modulos: 'Todos' };

// ===== ÍCONES SVG =====
const ICONS = {
  cert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  inv:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M8 12h8"/></svg>`,
  mod:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><rect x="2" y="3" width="9" height="9" rx="1"/><rect x="13" y="3" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>`,
  dl:   `<svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/></svg>`,
  cal:  `<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/></svg>`,
  bolt: `<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/></svg>`,
  check:`<svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>`,
};

// ===== CRIAÇÃO DE CARD =====
function createCard(doc) {
  const type = doc.category;
  const badgeLabel = type === 'cert' ? 'Certificado' : type === 'inv' ? 'Inversor' : 'Módulo';
  const powerMeta = doc.power
    ? `<div class="meta-tag">${ICONS.bolt}<span>${doc.power}</span></div>` : '';

  return `
    <div class="doc-card" data-brand="${doc.brand}" data-cat="${type}">
      <div class="doc-card-top">
        <div class="doc-icon ${type}">${ICONS[type]}</div>
        <div class="doc-badges">
          <span class="badge badge-${type}">${badgeLabel}</span>
          ${doc.isNew ? '<span class="badge badge-new">Novo</span>' : ''}
        </div>
      </div>
      <div>
        <div class="doc-title">${doc.title}</div>
        <div class="doc-sub">${doc.sub || ''}</div>
      </div>
      <div class="doc-meta">
        <div class="meta-tag">${ICONS.cal}<span>${doc.date}</span></div>
        ${powerMeta}
      </div>
      <div class="doc-footer">
        <span class="doc-size">PDF · ${doc.size}</span>
        <a
          href="${doc.downloadUrl}"
          ${doc.downloadUrl !== '#' ? 'target="_blank" rel="noopener"' : ''}
          class="btn-download"
          onclick="handleDownload(event, this, '${doc.title}')"
          data-url="${doc.downloadUrl}"
        >
          ${ICONS.dl} Baixar
        </a>
      </div>
    </div>
  `;
}

// ===== RENDER GRID =====
function renderGrid(containerId, docs) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!docs || docs.length === 0) {
    el.innerHTML = '<div class="empty-state">Nenhum documento encontrado.</div>';
    return;
  }
  el.innerHTML = docs.map(createCard).join('');
}

// ===== FILTROS =====
function getUniqueBrands(docs) {
  return ['Todos', ...new Set(docs.map(d => d.brand).filter(Boolean))];
}

function renderFilters(containerId, docs, activeVal, onSelect) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const brands = getUniqueBrands(docs);
  el.innerHTML = brands.map(b =>
    `<button class="chip ${b === activeVal ? 'active' : ''}" onclick="${onSelect}('${b}')">${b}</button>`
  ).join('');
}

function applyFilter(category, brand) {
  activeFilters[category] = brand;
  const src = DB[category];
  const filtered = brand === 'Todos' ? src : src.filter(d => d.brand === brand);
  const searchVal = document.getElementById(`search-${category}`)?.value?.toLowerCase() || '';
  const result = searchVal ? filtered.filter(d =>
    d.title.toLowerCase().includes(searchVal) ||
    (d.brand || '').toLowerCase().includes(searchVal) ||
    (d.sub || '').toLowerCase().includes(searchVal)
  ) : filtered;

  const gridId = `grid-${category}`;
  renderGrid(gridId, result);

  // Re-render filter chips com estado ativo
  const filterFnMap = { certs: 'setCertFilter', inversores: 'setInvFilter', modulos: 'setModFilter' };
  renderFilters(`filter-${category}`, src, brand, filterFnMap[category]);

  // Atualizar count
  const countMap = { certs: 'cert-count', inversores: 'inv-count', modulos: 'mod-count' };
  const countEl = document.getElementById(countMap[category]);
  if (countEl) countEl.textContent = `${result.length} arquivo${result.length !== 1 ? 's' : ''}`;
}

window.setCertFilter = (b) => applyFilter('certs', b);
window.setInvFilter  = (b) => applyFilter('inversores', b);
window.setModFilter  = (b) => applyFilter('modulos', b);

// ===== SEARCH =====
function setupSearch(inputId, category) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    applyFilter(category, activeFilters[category]);
  });
}

// ===== DOWNLOAD HANDLER =====
window.handleDownload = function(e, btn, title) {
  if (btn.dataset.url === '#') {
    e.preventDefault();
    showToast('⚠️ Configure o Google Drive para habilitar downloads.', 'error');
    return;
  }
  btn.classList.add('downloading');
  btn.innerHTML = `<div class="spinner" style="width:13px;height:13px;border-width:1.5px"></div> Baixando...`;
  setTimeout(() => {
    btn.classList.remove('downloading');
    btn.classList.add('done');
    btn.innerHTML = `${ICONS.check} Baixado!`;
    setTimeout(() => {
      btn.classList.remove('done');
      btn.innerHTML = `${ICONS.dl} Baixar`;
    }, 2500);
  }, 1200);
};

// ===== TOAST =====
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  setTimeout(() => { t.className = 'toast'; }, 3500);
}

// ===== TABS =====
function showTab(tabName) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link, .mob-link').forEach(a => a.classList.remove('active'));

  const section = document.getElementById(`tab-${tabName}`);
  if (section) section.classList.add('active');

  document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(a => a.classList.add('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bind nav links
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
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ===== ANIMAÇÃO NÚMEROS HERO =====
function animateCount(el, target) {
  let current = 0;
  const step = Math.ceil(target / 30);
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

    // Hero stats
    const psC = document.getElementById('ps-certs');
    const psI = document.getElementById('ps-inv');
    const psM = document.getElementById('ps-mod');
    if (psC) animateCount(psC, DB.certs.length);
    if (psI) animateCount(psI, DB.inversores.length);
    if (psM) animateCount(psM, DB.modulos.length);

    // Home category counts
    document.getElementById('home-count-certs').textContent = DB.certs.length;
    document.getElementById('home-count-inv').textContent   = DB.inversores.length;
    document.getElementById('home-count-mod').textContent   = DB.modulos.length;

    // Recent grid (novos de todas as categorias)
    const recent = [
      ...DB.certs.filter(d => d.isNew),
      ...DB.inversores.filter(d => d.isNew),
      ...DB.modulos.filter(d => d.isNew),
    ].slice(0, 6);
    renderGrid('recent-grid', recent.length ? recent : DB.certs.slice(0,3));
    document.getElementById('recent-badge').textContent = recent.length;

    // Grids individuais
    renderGrid('grid-certs', DB.certs);
    renderGrid('grid-inversores', DB.inversores);
    renderGrid('grid-modulos', DB.modulos);

    // Filtros
    renderFilters('filter-certs', DB.certs, 'Todos', 'setCertFilter');
    renderFilters('filter-inversores', DB.inversores, 'Todos', 'setInvFilter');
    renderFilters('filter-modulos', DB.modulos, 'Todos', 'setModFilter');

    // Counts
    document.getElementById('cert-count').textContent = `${DB.certs.length} arquivos`;
    document.getElementById('inv-count').textContent  = `${DB.inversores.length} arquivos`;
    document.getElementById('mod-count').textContent  = `${DB.modulos.length} arquivos`;

    // Search
    setupSearch('search-certs', 'certs');
    setupSearch('search-inversores', 'inversores');
    setupSearch('search-modulos', 'modulos');

    // Aviso modo demo
    if (DB.isDemo) {
      setTimeout(() => showToast('📋 Modo demonstração — configure o Google Drive para dados reais', 'info'), 1000);
    }

  } catch (err) {
    console.error('Erro ao inicializar:', err);
    showToast('Erro ao carregar dados. Verifique o console.', 'error');
  }
}

document.addEventListener('DOMContentLoaded', init);
