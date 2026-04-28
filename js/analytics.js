/**
 * SolarPro Portal — Analytics
 * ============================
 * Google Analytics 4 (GA4) + tracking customizado de eventos.
 *
 * COMO CONFIGURAR (passo a passo):
 *
 *  1. Acesse https://analytics.google.com e crie uma conta:
 *     - Nome da conta: ROV Energia (ou SolarPro)
 *     - Nome da propriedade: SolarPro Portal
 *     - Categoria: Outras / Tecnologia
 *     - Configure como "Web stream" e use a URL do site
 *       (https://solarproportal.github.io/solarproportal/)
 *
 *  2. No painel do GA4, copie o "Measurement ID" — formato G-XXXXXXXXXX
 *
 *  3. Substitua a constante GA4_ID abaixo pelo ID copiado.
 *
 *  4. Faça commit e push do site. Em ~24h o GA4 começa a mostrar dados.
 *     (relatórios em tempo real aparecem em poucos minutos pra testar)
 *
 * COMO VER OS DADOS:
 *  - Painel GA4 -> "Relatórios" -> "Aquisição" pra ver quantos acessos
 *  - "Engajamento" -> "Eventos" pra ver os cliques específicos:
 *      • abrir_documento  → quem clicou em quais datasheets/certificados
 *      • abrir_marca      → quais fabricantes mais visualizados
 *      • mudar_aba        → navegação entre seções
 *      • buscar           → o que pessoas pesquisam
 *      • enviar_sugestao  → quem mandou sugestão
 *  - "Tempo real" pra ver acessos acontecendo agora
 *
 * Para testar localmente: o GA4 pode bloquear acessos em localhost,
 * sendo normal não ver dados quando o site rodar local.
 */

// ============================================================================
// CONFIGURAÇÃO — substitua pelo seu Measurement ID após criar conta GA4
// ============================================================================
var GA4_ID = 'G-XXXXXXXXXX';  // <-- TROCAR pelo ID real (ex: G-ABC123XYZ4)

// ============================================================================
// Carregamento do GA4 (somente se o ID foi configurado)
// ============================================================================
(function loadGA4() {
  if (!GA4_ID || GA4_ID === 'G-XXXXXXXXXX') {
    console.info('SolarPro Analytics: GA4 não configurado (placeholder). Edite js/analytics.js');
    return;
  }

  // Carrega script do gtag.js
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(script);

  // Inicializa dataLayer e gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA4_ID, {
    // Configurações úteis pro contexto
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  console.info('SolarPro Analytics: GA4 ativo (' + GA4_ID + ')');
})();

// ============================================================================
// Helper: dispara evento (silencioso se GA4 não configurado)
// ============================================================================
function trackEvent(eventName, params) {
  if (typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', eventName, params || {});
  } catch (err) {
    console.warn('SolarPro Analytics: erro ao enviar evento ' + eventName, err);
  }
}

// Expõe globalmente pra ser chamado de app.js
window.trackEvent = trackEvent;

// ============================================================================
// Helpers específicos do portal — usados em app.js
// ============================================================================

// Disparado quando alguém clica em "Abrir datasheet" / "Consultar Inmetro" / etc
window.trackDocOpen = function(doc) {
  if (!doc) return;
  trackEvent('abrir_documento', {
    categoria: doc.category || 'unknown',          // 'cert', 'inv', 'mod'
    fabricante: doc.brand || 'unknown',
    modelo: doc.title || 'unknown',
    fonte: doc.source || 'external',               // 'external', 'drive'
    tipo_cert: doc.certType || '',                 // 'inmetro' ou 'tuv' (só pra certs)
    url: doc.url || '',
  });
};

// Disparado ao abrir uma página de fabricante (ex: "APsystems" dentro de Certificados)
window.trackBrandOpen = function(catKey, brandName) {
  trackEvent('abrir_marca', {
    categoria: catKey || 'unknown',
    fabricante: brandName || 'todos',
  });
};

// Disparado ao mudar de aba (Início / Certificados / Inversores / Módulos)
window.trackTabChange = function(tabName) {
  trackEvent('mudar_aba', {
    aba: tabName || 'unknown',
  });
};

// Disparado ao buscar (com debounce: só envia se a query tem 3+ caracteres
// e fica parado por 1.5s, pra não inundar com cada letra)
var searchDebounce = {};
window.trackSearch = function(catKey, query) {
  if (!query || query.length < 3) return;
  if (searchDebounce[catKey]) clearTimeout(searchDebounce[catKey]);
  searchDebounce[catKey] = setTimeout(function() {
    trackEvent('buscar', {
      categoria: catKey || 'unknown',
      termo: query.toLowerCase().substring(0, 100),  // limita tamanho
    });
  }, 1500);
};

// Disparado quando o form de sugestão é enviado
window.trackSuggestion = function(category) {
  trackEvent('enviar_sugestao', {
    categoria: category || 'geral',
  });
};
