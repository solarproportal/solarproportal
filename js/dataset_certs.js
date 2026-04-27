/**
 * SolarPro Portal — Dataset de Certificados de Inversores
 * =========================================================
 * Os certificados (Inmetro ou TÜV) são exigidos apenas para INVERSORES.
 * Módulos fotovoltaicos não têm exigência de registro Inmetro nesse nível.
 *
 * Cada entrada aponta para uma fonte oficial:
 *   - registro Inmetro -> consulta direta em registro.inmetro.gov.br
 *   - quando o modelo não tem registro Inmetro localizado, link aponta para
 *     a página de certificados TÜV / fabricante oficial (CE, IEC, etc).
 *
 * Campos:
 *   brand     fabricante (usado pra agrupar)
 *   title     modelo do inversor
 *   registro  número do registro Inmetro no formato "XXXXXX/AAAA"
 *             (presente apenas quando há registro Inmetro)
 *   tuvUrl    URL direta do certificado TÜV/fabricante
 *             (usado quando registro Inmetro não está disponível)
 *   portaria  portaria Inmetro aplicável
 *   detentor  empresa titular do registro
 *   year      ano do registro/certificado
 *   power     potência nominal
 *   sub       descrição curta (categoria)
 *
 * COMO ADICIONAR UM NOVO CERTIFICADO:
 *   1. Inmetro: consulte http://registro.inmetro.gov.br/consulta/ e copie
 *      o número do registro (ex.: "001474/2024"). Adicione com o campo
 *      `registro` preenchido.
 *   2. TÜV/fabricante: copie a URL da página de certificado oficial (ex.:
 *      sma.de/.../downloads/certificates) e use o campo `tuvUrl`.
 *   3. O site monta automaticamente o link e renderiza o card.
 *
 * Atualizado: abril/2026
 * Fontes: Aldo Solar (download.aldo.com.br/pdfprodutos), Helte Solar,
 *         registro.inmetro.gov.br, deyebrasil.com.br, sites oficiais.
 */

var SOLARPRO_CERTS = [
  /* ========================================================================
   * GROWATT (lista oficial Aldo Solar Rev 25/03/2025 — 47 registros)
   * Detentor principal: Growatt New Energy Brazil (CNPJ 48.767.083/0001-75)
   * ========================================================================*/

  // Microinversores NEO
  { brand:'Growatt', title:'NEO 800M-X',           registro:'019270/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'0.8 kW',   sub:'Microinversor monofásico 220V' },
  { brand:'Growatt', title:'NEO 1000M-X',          registro:'019271/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'1 kW',     sub:'Microinversor monofásico 220V' },
  { brand:'Growatt', title:'NEO 1600M-X',          registro:'000517/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'1.6 kW',   sub:'Microinversor monofásico 220V' },
  { brand:'Growatt', title:'NEO 2000M-X',          registro:'008475/2023', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2023', power:'2 kW',     sub:'Microinversor monofásico 220V' },
  { brand:'Growatt', title:'NEO 2250M-X2',         registro:'018187/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'2.25 kW',  sub:'Microinversor monofásico 220V' },
  { brand:'Growatt', title:'NEO 2500M-X2',         registro:'018185/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'2.5 kW',   sub:'Microinversor monofásico 220V' },

  // String monofásicos MIC (residencial pequeno)
  { brand:'Growatt', title:'MIC 1000TL-X',         registro:'002636/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'1 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIC 1500TL-X',         registro:'002637/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'1.5 kW',   sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIC 2000TL-X',         registro:'002618/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'2 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIC 2500TL-X',         registro:'002622/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'2.5 kW',   sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIC 3000TL-X',         registro:'002584/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'3 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIC 3000TL-X2',        registro:'004395/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'3 kW',     sub:'String monofásico 220V on-grid (X2)' },

  // String monofásicos MIN (residencial médio)
  { brand:'Growatt', title:'MIN 3000TL-X',         registro:'001473/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'3 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 5000TL-X',         registro:'001474/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'5 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 5000TL-X2',        registro:'003570/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'5 kW',     sub:'String monofásico 220V on-grid (X2)' },
  { brand:'Growatt', title:'MIN 6000TL-X',         registro:'001475/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'6 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 6000TL-X2',        registro:'004048/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'6 kW',     sub:'String monofásico 220V on-grid (X2)' },
  { brand:'Growatt', title:'MIN 7000TL-X(E)',      registro:'001469/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'7 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 7500TL-X2',        registro:'018116/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'7.5 kW',   sub:'String monofásico 220V on-grid (X2)' },
  { brand:'Growatt', title:'MIN 8000TL-X(E)',      registro:'001470/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'8 kW',     sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 8000TL-X2',        registro:'004375/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'8 kW',     sub:'String monofásico 220V on-grid (X2)' },
  { brand:'Growatt', title:'MIN 10000TL-X',        registro:'001471/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'10 kW',    sub:'String monofásico 220V on-grid' },
  { brand:'Growatt', title:'MIN 10000TL-X2',       registro:'004497/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'10 kW',    sub:'String monofásico 220V on-grid (X2)' },

  // Off-grid monofásicos SPF
  { brand:'Growatt', title:'SPF 3000TL LVM ES',    registro:'000520/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'3 kW',     sub:'Off-grid monofásico 110V' },
  { brand:'Growatt', title:'SPF 3500ES',           registro:'000519/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'3.5 kW',   sub:'Off-grid monofásico 220V' },
  { brand:'Growatt', title:'SPF 5000ES',           registro:'000521/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'5 kW',     sub:'Off-grid monofásico 220V' },
  { brand:'Growatt', title:'SPF 6000ES PLUS',      registro:'004651/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'6 kW',     sub:'Off-grid monofásico 220V' },

  // Híbridos monofásicos SPH
  { brand:'Growatt', title:'SPH 10000TL-HU-US',    registro:'017878/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'10 kW',    sub:'Híbrido bifásico 110V/220V' },
  { brand:'Growatt', title:'SPH 10000TL-HU',       registro:'000310/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'10 kW',    sub:'Híbrido monofásico 220V' },

  // Trifásicos 220V (MID/MAC/MAX -XL2)
  { brand:'Growatt', title:'MID 15KTL3-XL2',       registro:'000700/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'15 kW',    sub:'String trifásico 220V on-grid' },
  { brand:'Growatt', title:'MID 20KTL3-XL2',       registro:'000888/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'20 kW',    sub:'String trifásico 220V on-grid' },
  { brand:'Growatt', title:'MID 25KTL3-XL2',       registro:'000896/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'25 kW',    sub:'String trifásico 220V on-grid' },
  { brand:'Growatt', title:'MAC 30KTL3-XL2',       registro:'002914/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'30 kW',    sub:'String trifásico 220V comercial' },
  { brand:'Growatt', title:'MAC 36KTL3-XL2',       registro:'002921/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'36 kW',    sub:'String trifásico 220V comercial' },
  { brand:'Growatt', title:'MAX 50KTL3-XL2',       registro:'002936/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'50 kW',    sub:'String trifásico 220V comercial' },
  { brand:'Growatt', title:'MAX 60KTL3-XL2',       registro:'002938/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'60 kW',    sub:'String trifásico 220V comercial' },
  { brand:'Growatt', title:'MAX 75KTL3-XL2',       registro:'002939/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'75 kW',    sub:'String trifásico 220V comercial' },

  // Trifásicos 380V (MOD/MID/MAC/MAX)
  { brand:'Growatt', title:'MOD 12KTL3-X2(Pro)',   registro:'019288/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'12 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MOD 15KTL3-X2(Pro)',   registro:'019299/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2024', power:'15 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MID 20KTL3-X2',        registro:'002241/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'20 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MID 25KTL3-X2',        registro:'002243/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'25 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MID 30KTL3-X2',        registro:'002244/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'30 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MID 40KTL3-X2',        registro:'002251/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'40 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MID 50KTL3-X2',        registro:'002252/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'50 kW',    sub:'String trifásico 380V on-grid' },
  { brand:'Growatt', title:'MAC 60KTL3-X2 LV',     registro:'002981/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'60 kW',    sub:'String trifásico 380V comercial' },
  { brand:'Growatt', title:'MAX 75KTL3 LV',        registro:'002946/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Growatt New Energy Brazil', year:'2025', power:'75 kW',    sub:'String trifásico 380V comercial' },

  /* ========================================================================
   * GOODWE (lista oficial Aldo Solar — 35 registros)
   * Detentor: Product Holder Certification Solutions / GoodWe
   * ========================================================================*/

  // Linha NS (legado)
  { brand:'GoodWe', title:'GW1500-NS',  registro:'008897/2019', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2019', power:'1.5 kW',  sub:'String monofásico residencial NS' },
  { brand:'GoodWe', title:'GW3000-NS',  registro:'008896/2019', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2019', power:'3 kW',    sub:'String monofásico residencial NS' },

  // Linha XS
  { brand:'GoodWe', title:'GW700-XS',   registro:'002441/2020', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2020', power:'0.7 kW',  sub:'String monofásico XS' },
  { brand:'GoodWe', title:'GW1500-XS',  registro:'002439/2020', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2020', power:'1.5 kW',  sub:'String monofásico XS' },
  { brand:'GoodWe', title:'GW3000-XS',  registro:'003341/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'3 kW',    sub:'String monofásico XS' },
  { brand:'GoodWe', title:'GW3000N-XS', registro:'003342/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'3 kW',    sub:'String monofásico XS' },
  { brand:'GoodWe', title:'GW3KB-XS',   registro:'012544/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'3 kW',    sub:'String monofásico XS' },

  // XS Plus / XS G3
  { brand:'GoodWe', title:'GW3300-XS-11/B11', registro:'011532/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'3.3 kW', sub:'String monofásico XS Plus' },
  { brand:'GoodWe', title:'GW3300-XS-30/B30', registro:'011052/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'3.3 kW', sub:'String monofásico XS G3' },

  // Linha DNS
  { brand:'GoodWe', title:'GW5000D-NS', registro:'005186/2021', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2021', power:'5 kW',    sub:'String monofásico DNS' },
  { brand:'GoodWe', title:'GW5000T-DS', registro:'002983/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'5 kW',    sub:'String monofásico DS' },
  { brand:'GoodWe', title:'GW5KBD-NS',  registro:'012031/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'5 kW',    sub:'String monofásico DNS' },
  { brand:'GoodWe', title:'GW6KBD-NS',  registro:'011991/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'6 kW',    sub:'String monofásico DNS' },

  // DNS G3
  { brand:'GoodWe', title:'GW5000-DNS-30/B30', registro:'001501/2024', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2024', power:'5 kW', sub:'String monofásico DNS G3' },
  { brand:'GoodWe', title:'GW6000-DNS-30/B30', registro:'001562/2024', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2024', power:'6 kW', sub:'String monofásico DNS G3' },

  // Linha MS (3 MPPT)
  { brand:'GoodWe', title:'GW7000-MS',  registro:'006056/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'7 kW',    sub:'String monofásico MS 3 MPPT' },
  { brand:'GoodWe', title:'GW8500-MS',  registro:'011697/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'8.5 kW',  sub:'String monofásico MS 3 MPPT' },
  { brand:'GoodWe', title:'GW10K-MS',   registro:'011696/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'10 kW',   sub:'String monofásico MS 3 MPPT' },

  // MS G3
  { brand:'GoodWe', title:'GW7000-MS-30',  registro:'011979/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'7 kW',   sub:'String monofásico MS G3' },
  { brand:'GoodWe', title:'GW7000-MS-C30', registro:'011318/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'7 kW',   sub:'String monofásico MS G3 (C)' },
  { brand:'GoodWe', title:'GW8500-MS-30',  registro:'011980/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'8.5 kW', sub:'String monofásico MS G3' },
  { brand:'GoodWe', title:'GW8000-MS-C30', registro:'011319/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'8 kW',   sub:'String monofásico MS G3 (C)' },
  { brand:'GoodWe', title:'GW10K-MS-30',   registro:'011978/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'10 kW',  sub:'String monofásico MS G3' },

  // SDT G2 / G3
  { brand:'GoodWe', title:'GW8K-DT',          registro:'005185/2021', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2021', power:'8 kW',  sub:'String trifásico SDT G2' },
  { brand:'GoodWe', title:'GW8000-SDT-20',    registro:'011540/2022', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2022', power:'8 kW',  sub:'String trifásico SDT G2' },
  { brand:'GoodWe', title:'GW8000-SDT-30',    registro:'011311/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'8 kW',  sub:'String trifásico SDT G3' },
  { brand:'GoodWe', title:'GW12K-SDT-30',     registro:'000804/2024', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2024', power:'12 kW', sub:'String trifásico SDT G3' },
  { brand:'GoodWe', title:'GW15K-SDT-30',     registro:'011312/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'15 kW', sub:'String trifásico SDT G3' },
  { brand:'GoodWe', title:'GW20K-SDT-30',     registro:'011307/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'20 kW', sub:'String trifásico SDT G3' },
  { brand:'GoodWe', title:'GW25K-SDT-C30',    registro:'011308/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'25 kW', sub:'String trifásico SDT G3 (C)' },
  { brand:'GoodWe', title:'GW30K-SDT-C30',    registro:'000807/2024', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2024', power:'30 kW', sub:'String trifásico SDT G3 (C)' },
  { brand:'GoodWe', title:'GW12KLV-SDT-C30',  registro:'000806/2024', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2024', power:'12 kW', sub:'String trifásico SDT G3 LV' },
  { brand:'GoodWe', title:'GW17KLV-SDT-C30',  registro:'000805/2024', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2024', power:'17 kW', sub:'String trifásico SDT G3 LV' },

  // EH e ES (híbridos)
  { brand:'GoodWe', title:'GW6000-EH',        registro:'007699/2021', portaria:'Portaria 004/2011', detentor:'Product Holder Certification', year:'2021', power:'6 kW',   sub:'Híbrido monofásico EH HV' },
  { brand:'GoodWe', title:'GW3500L-ES-BR20',  registro:'001425/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'3.5 kW', sub:'Híbrido monofásico ES G2 (bateria)' },
  { brand:'GoodWe', title:'GW3600-ES-BR20',   registro:'001426/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'3.6 kW', sub:'Híbrido monofásico ES G2 (bateria)' },
  { brand:'GoodWe', title:'GW6000-ES-BR20',   registro:'001427/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'6 kW',   sub:'Híbrido monofásico ES G2 (bateria)' },
  { brand:'GoodWe', title:'GW6000-ES-20',     registro:'012555/2022', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2022', power:'6 kW',   sub:'String monofásico ES on-grid' },

  // Linha ET (híbridos trifásicos)
  { brand:'GoodWe', title:'GW12KL-ET',        registro:'018781/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Product Holder Certification', year:'2024', power:'12 kW', sub:'Híbrido trifásico ET LV' },
  { brand:'GoodWe', title:'GW20K-ET',         registro:'015583/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Product Holder Certification', year:'2024', power:'20 kW', sub:'Híbrido trifásico ET' },
  { brand:'GoodWe', title:'GW30K-ET',         registro:'019002/2024', portaria:'Portaria 140/2022 + 515/2023', detentor:'Product Holder Certification', year:'2024', power:'30 kW', sub:'Híbrido trifásico ET' },

  // Microinversores MIS
  { brand:'GoodWe', title:'GW1600-MIS',       registro:'011538/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'1.6 kW', sub:'Microinversor monofásico' },
  { brand:'GoodWe', title:'GW2000-MIS',       registro:'011536/2023', portaria:'Portaria 140/2022', detentor:'Product Holder Certification', year:'2023', power:'2 kW',   sub:'Microinversor monofásico' },

  /* ========================================================================
   * DEYE (registros individuais — empresa pulveriza titularidade)
   * Detentores: Deye Inversores, Deye Brasil Support, Haussmart, AJA Importação
   * ========================================================================*/

  { brand:'Deye', title:'SUN-3K-G',                  registro:'007490/2019', portaria:'Portaria 004/2011', detentor:'Haussmart',                    year:'2019', power:'3 kW',    sub:'String monofásico 220V on-grid' },
  { brand:'Deye', title:'SUN-5K-G',                  registro:'005632/2021', portaria:'Portaria 004/2011', detentor:'Deye Inversores',              year:'2021', power:'5 kW',    sub:'String monofásico 220V on-grid' },
  { brand:'Deye', title:'SUN-6K-G / SUN-10.5K-G',    registro:'005957/2021', portaria:'Portaria 004/2011', detentor:'Deye Inversores',              year:'2021', power:'6-10.5 kW', sub:'String monofásico 220V on-grid' },
  { brand:'Deye', title:'SUN-G série (família)',     registro:'005635/2021', portaria:'Portaria 004/2011', detentor:'Deye Inversores',              year:'2021', power:'3-8 kW',  sub:'Família SUN-G monofásico' },
  { brand:'Deye', title:'SUN-G série (família 2)',   registro:'005637/2021', portaria:'Portaria 004/2011', detentor:'Deye Inversores',              year:'2021', power:'3-8 kW',  sub:'Família SUN-G monofásico (2º registro)' },
  { brand:'Deye', title:'SUN-10K-G',                 registro:'002092/2021', portaria:'Portaria 004/2011', detentor:'AJA Importação',               year:'2021', power:'10 kW',   sub:'String monofásico 220V on-grid' },
  { brand:'Deye', title:'SUN-5K-SG03LP1-EU (5K-G)',  registro:'007492/2019', portaria:'Portaria 004/2011', detentor:'Haussmart',                    year:'2019', power:'5 kW',    sub:'Híbrido monofásico bateria' },
  { brand:'Deye', title:'SUN-8K híbrido',            registro:'001452/2020', portaria:'Portaria 004/2011', detentor:'Haussmart',                    year:'2020', power:'8 kW',    sub:'Híbrido monofásico bateria' },
  { brand:'Deye', title:'SUN-5K-SG01LP1-US (bifásico)', registro:'009596/2023', portaria:'Portaria 140/2022', detentor:'Deye Brasil',               year:'2023', power:'5 kW',    sub:'Híbrido bifásico 127/220V US' },
  { brand:'Deye', title:'SUN2000G3-US-220 (microinv.)', registro:'006290/2020', portaria:'Portaria 004/2011', detentor:'Deye Inversores',           year:'2020', power:'2 kW',    sub:'Microinversor monofásico 220V' },
  { brand:'Deye', title:'SUN-6.6K-G05P1-EU-AM2',     registro:'009876/2024', portaria:'Portaria 140/2022', detentor:'Deye Brasil',                  year:'2024', power:'6.6 kW',  sub:'String monofásico G05 220V' },
  { brand:'Deye', title:'SUN-M225G4-EU-Q0 (micro 4-em-1)', registro:'001070/2024', portaria:'Portaria 140/2022', detentor:'Deye Brasil Support',    year:'2024', power:'2.25 kW', sub:'Microinversor 4-em-1 220V' },
  { brand:'Deye', title:'SUN string (registro 2024 família)', registro:'016868/2024', portaria:'Portaria 140/2022', detentor:'Deye Brasil Support', year:'2024', power:'—',       sub:'Família SUN — registro 2024' },
  { brand:'Deye', title:'SUN string monofásico 2025',     registro:'000934/2025', portaria:'Portaria 140/2022 + 515/2023', detentor:'Deye Brasil', year:'2025', power:'—',       sub:'String monofásico — registro 2025' },

  /* ========================================================================
   * SUNGROW (registros individuais)
   * Detentor: Sungrow do Brasil Representação Comercial
   * ========================================================================*/

  { brand:'Sungrow', title:'SG3.0RS',         registro:'005354/2021', portaria:'Portaria 004/2011', detentor:'Sungrow do Brasil', year:'2021', power:'3 kW', sub:'String monofásico 220V residencial' },
  { brand:'Sungrow', title:'SG5.0RS',         registro:'005335/2021', portaria:'Portaria 004/2011', detentor:'Sungrow do Brasil', year:'2021', power:'5 kW', sub:'String monofásico 220V residencial' },
  { brand:'Sungrow', title:'SG5.0RS-L-1',     registro:'005485/2023', portaria:'Portaria 140/2022', detentor:'Sungrow do Brasil', year:'2023', power:'5 kW', sub:'String monofásico 220V residencial (L)' },
  // Família SG3-6RS / SG10/12KTL-M / SG33-50CX / SG110CX / SG125-250HX —
  // demais modelos desta marca: certificados TÜV/CE no site oficial
  { brand:'Sungrow', title:'SG10/12KTL-M (catálogo)',  tuvUrl:'https://br.sungrowpower.com/Downloads', portaria:'Certificações TÜV/CE',  detentor:'Sungrow Power Supply', year:'2024', power:'10-12 kW',  sub:'String trifásico — certificado fabricante' },
  { brand:'Sungrow', title:'SG33CX/SG40CX/SG50CX',     tuvUrl:'https://br.sungrowpower.com/Downloads', portaria:'Certificações TÜV/CE',  detentor:'Sungrow Power Supply', year:'2024', power:'33-50 kW',  sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Sungrow', title:'SG110CX',                  tuvUrl:'https://br.sungrowpower.com/Downloads', portaria:'Certificações TÜV/CE',  detentor:'Sungrow Power Supply', year:'2024', power:'110 kW',    sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Sungrow', title:'SG125-250HX (utility)',    tuvUrl:'https://br.sungrowpower.com/Downloads', portaria:'Certificações TÜV/CE',  detentor:'Sungrow Power Supply', year:'2024', power:'125-250 kW', sub:'Utility 1500V — certificado fabricante' },

  /* ========================================================================
   * HOYMILES (registros individuais)
   * ========================================================================*/

  { brand:'Hoymiles', title:'HMS-2000-4T (microinv. 4-em-1)', registro:'006609/2021', portaria:'Portaria 004/2011', detentor:'W.M. Laudisio Junior', year:'2021', power:'2 kW',  sub:'Microinversor 4-em-1 monofásico 220V' },
  // Demais modelos da família HMS / HMT — TÜV
  { brand:'Hoymiles', title:'HMS 600-1000W-2T (balcony)', tuvUrl:'https://www.hoymiles.com/download-center/',         portaria:'Certificações TÜV/CE/IEC', detentor:'Hoymiles Power Electronics', year:'2024', power:'0.6-1 kW',  sub:'Microinversor 2-em-1 — certificado fabricante' },
  { brand:'Hoymiles', title:'HMS 1600-1800-2000-4T EU',   tuvUrl:'https://www.hoymiles.com/download-center/',         portaria:'Certificações TÜV/CE/IEC', detentor:'Hoymiles Power Electronics', year:'2024', power:'1.6-2 kW',  sub:'Microinversor 4-em-1 EU — certificado fabricante' },
  { brand:'Hoymiles', title:'HMT 1600-2000-4T (3P)',       tuvUrl:'https://www.hoymiles.com/download-center/',         portaria:'Certificações TÜV/CE/IEC', detentor:'Hoymiles Power Electronics', year:'2024', power:'1.6-2 kW',  sub:'Microinversor trifásico — certificado fabricante' },

  /* ========================================================================
   * SOLPLANET / AISWEI / ZEVERSOLAR (registros individuais)
   * ========================================================================*/

  { brand:'Solplanet', title:'ASW3000-S-G2',  registro:'010782/2022', portaria:'Portaria 004/2011', detentor:'W.M. Laudisio Junior',                       year:'2022', power:'3 kW',  sub:'String monofásico 220V' },
  { brand:'Solplanet', title:'ASW10000-S',    registro:'006602/2019', portaria:'Portaria 004/2011', detentor:'Inovacare Tecnologia em Energias Renováveis', year:'2019', power:'10 kW', sub:'String monofásico 220V' },
  // Demais modelos Solplanet — TÜV
  { brand:'Solplanet', title:'ASW S Series 6-10kW',    tuvUrl:'https://solplanet.net/download/',  portaria:'Certificações TÜV/CE',  detentor:'AISWEI Pty Ltd', year:'2024', power:'6-10 kW',  sub:'String monofásico — certificado fabricante' },
  { brand:'Solplanet', title:'ASW H-S2 Hybrid 3-6kW',  tuvUrl:'https://solplanet.net/download/',  portaria:'Certificações TÜV/CE',  detentor:'AISWEI Pty Ltd', year:'2024', power:'3-6 kW',   sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Solplanet', title:'ASW SH Series 8-10kW',   tuvUrl:'https://solplanet.net/download/',  portaria:'Certificações TÜV/CE',  detentor:'AISWEI Pty Ltd', year:'2024', power:'8-10 kW',  sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Solplanet', title:'ASW LT-G2 Pro 8-20kW',   tuvUrl:'https://solplanet.net/download/',  portaria:'Certificações TÜV/CE',  detentor:'AISWEI Pty Ltd', year:'2024', power:'8-20 kW',  sub:'String trifásico — certificado fabricante' },

  /* ========================================================================
   * SOLIS / GINLONG (registros individuais)
   * ========================================================================*/

  { brand:'Solis', title:'S6-GR1P6K-S',  registro:'002459/2023', portaria:'Portaria 140/2022', detentor:'Ginlong Solis', year:'2023', power:'6 kW', sub:'String monofásico 220V S6 série' },
  // Demais Solis — TÜV
  { brand:'Solis', title:'S5-GR1P 2.5-6K (família)',     tuvUrl:'https://www.solisinverters.com/global/downloads.html',  portaria:'Certificações TÜV/CE',  detentor:'Ginlong Solis', year:'2024', power:'2.5-6 kW',  sub:'String monofásico — certificado fabricante' },
  { brand:'Solis', title:'S5-GR3P 4-10K (3P residencial)', tuvUrl:'https://www.solisinverters.com/global/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Ginlong Solis', year:'2024', power:'4-10 kW',   sub:'String trifásico residencial — certificado fabricante' },
  { brand:'Solis', title:'S6-GC25-100K (C&I)',            tuvUrl:'https://www.solisinverters.com/global/downloads.html', portaria:'Certificações TÜV/CE',  detentor:'Ginlong Solis', year:'2024', power:'25-100 kW', sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Solis', title:'S6-EH1P (hybrid 1P)',           tuvUrl:'https://www.solisinverters.com/global/downloads.html', portaria:'Certificações TÜV/CE',  detentor:'Ginlong Solis', year:'2024', power:'3-6 kW',    sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Solis', title:'S6-EH3P (hybrid 3P)',           tuvUrl:'https://www.solisinverters.com/global/downloads.html', portaria:'Certificações TÜV/CE',  detentor:'Ginlong Solis', year:'2024', power:'5-15 kW',   sub:'Híbrido trifásico — certificado fabricante' },

  // Ginlong Technologies (mesma empresa Solis — link genérico)
  { brand:'Ginlong Technologies', title:'Solis (catálogo Download Center)', tuvUrl:'https://www.solisinverters.com/global/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Ginlong Solis', year:'2024', power:'—', sub:'Download Center — certificado fabricante' },

  /* ========================================================================
   * PHB (registro individual)
   * ========================================================================*/
  { brand:'PHB Solar', title:'PHB3300-XS', tuvUrl:'http://registro.inmetro.gov.br/consulta/', portaria:'Consulta Inmetro', detentor:'PHB Solar', year:'—', power:'3.3 kW', sub:'Consulte registro pelo modelo no site Inmetro' },
  { brand:'PHB Solar', title:'PHB1500/PHB3000/PHB5K-SS', tuvUrl:'https://phbsolar.com.br/', portaria:'Certificações TÜV/CE', detentor:'PHB Solar', year:'2024', power:'1.5-5 kW', sub:'String monofásico BR — certificado fabricante' },

  /* ========================================================================
   * MARCAS INTERNACIONAIS — link TÜV / fabricante oficial
   * (autorizado pelo cliente como fallback)
   * ========================================================================*/

  // SMA — alemã
  { brand:'SMA', title:'Sunny Tripower X 12-25kW',           tuvUrl:'https://www.sma.de/en/products/photovoltaic-inverters/sunny-tripower-x', portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'12-25 kW', sub:'String trifásico — certificado fabricante' },
  { brand:'SMA', title:'Sunny Tripower 5.0-10.0 Smart Energy', tuvUrl:'https://www.sma.de/en/products/hybrid-inverters/sunny-tripower-smart-energy', portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'5-10 kW',  sub:'Híbrido trifásico — certificado fabricante' },
  { brand:'SMA', title:'Sunny Tripower CORE1 33-62kW',       tuvUrl:'https://www.sma.de/en/products/photovoltaic-inverters/sunny-tripower-core1', portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'33-62 kW', sub:'String trifásico C&I — certificado fabricante' },
  { brand:'SMA', title:'Sunny Tripower CORE2 110kW',         tuvUrl:'https://www.sma.de/en/products/photovoltaic-inverters/sunny-tripower-core2', portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'110 kW',   sub:'String trifásico C&I — certificado fabricante' },
  { brand:'SMA', title:'Sunny Boy 3.0-6.0 (SB30-60)',        tuvUrl:'https://www.sma.de/en/products/photovoltaic-inverters/sunny-boy-30-60',     portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'3-6 kW',   sub:'String monofásico — certificado fabricante' },
  { brand:'SMA', title:'Sunny Boy Smart Energy (SBSE)',      tuvUrl:'https://www.sma.de/en/products/hybrid-inverters/sunny-boy-smart-energy',   portaria:'Certificações TÜV/CE/VDE', detentor:'SMA Solar Technology', year:'2024', power:'3.6-6 kW', sub:'Híbrido monofásico — certificado fabricante' },

  // Fronius — austríaca
  { brand:'Fronius', title:'Primo GEN24 & Plus 3.0-10.0 kW', tuvUrl:'https://www.fronius.com/en/solar-energy/installers-partners/technical-data/all-products/inverters/fronius-primo-gen24-plus', portaria:'Certificações TÜV/CE/IEC', detentor:'Fronius International', year:'2024', power:'3-10 kW',  sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Fronius', title:'Symo 3-20 kW (família)',         tuvUrl:'https://www.fronius.com/en/solar-energy/installers-partners/technical-data/all-products/inverters/fronius-symo',           portaria:'Certificações TÜV/CE/IEC', detentor:'Fronius International', year:'2024', power:'3-20 kW',  sub:'String trifásico — certificado fabricante' },
  { brand:'Fronius', title:'Symo Advanced (AFCI)',           tuvUrl:'https://www.fronius.com/en/solar-energy/installers-partners/technical-data/all-products/inverters/fronius-symo-advanced',  portaria:'Certificações TÜV/CE/IEC', detentor:'Fronius International', year:'2024', power:'10-24 kW', sub:'String trifásico C&I AFCI — certificado fabricante' },
  { brand:'Fronius', title:'Symo GEN24 & Plus 3-10kW',       tuvUrl:'https://www.fronius.com/en/solar-energy/installers-partners/technical-data/all-products/inverters/fronius-symo-gen24-plus', portaria:'Certificações TÜV/CE/IEC', detentor:'Fronius International', year:'2024', power:'3-10 kW',  sub:'Híbrido trifásico — certificado fabricante' },
  { brand:'Fronius', title:'Tauro 50-100kW',                 tuvUrl:'https://www.fronius.com/en/solar-energy/installers-partners/technical-data/all-products/inverters/fronius-tauro',          portaria:'Certificações TÜV/CE/IEC', detentor:'Fronius International', year:'2024', power:'50-100 kW', sub:'String trifásico C&I outdoor — certificado fabricante' },

  // SolarEdge — americana/israelense
  { brand:'SolarEdge', title:'HD-Wave SE2200H-SE6000H (EU)', tuvUrl:'https://www.solaredge.com/products/single-phase-residential', portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'2.2-6 kW',   sub:'String monofásico HD-Wave — certificado fabricante' },
  { brand:'SolarEdge', title:'Home Wave single phase EU',    tuvUrl:'https://www.solaredge.com/products/single-phase-residential', portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'3-10 kW',    sub:'String monofásico Home Wave — certificado fabricante' },
  { brand:'SolarEdge', title:'StorEdge HD-Wave hybrid',      tuvUrl:'https://www.solaredge.com/products/storedge',                  portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'3-10 kW',    sub:'Híbrido residencial StorEdge — certificado fabricante' },
  { brand:'SolarEdge', title:'StorEdge AC Coupled (EU)',     tuvUrl:'https://www.solaredge.com/products/storedge',                  portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'3-5 kW',     sub:'Storage AC-coupled — certificado fabricante' },

  // Enphase — americana (microinversores)
  { brand:'Enphase', title:'IQ8 Series (família)',     tuvUrl:'https://enphase.com/installers/microinverters/iq8',           portaria:'Certificações UL/TÜV/CE', detentor:'Enphase Energy', year:'2024', power:'240-384 VA', sub:'Microinversor IQ8 — certificado fabricante' },
  { brand:'Enphase', title:'IQ8MC microinverter',      tuvUrl:'https://enphase.com/installers/microinverters/iq8',           portaria:'Certificações UL/TÜV/CE', detentor:'Enphase Energy', year:'2024', power:'315-330 VA', sub:'Microinversor IQ8MC — certificado fabricante' },
  { brand:'Enphase', title:'IQ8 Commercial (3-phase)', tuvUrl:'https://enphase.com/installers/microinverters/iq8-commercial', portaria:'Certificações UL/TÜV/CE', detentor:'Enphase Energy', year:'2024', power:'—',          sub:'Microinversor comercial 3P — certificado fabricante' },
  { brand:'Enphase', title:'IQ7 Microinverter (família)', tuvUrl:'https://enphase.com/en-us/installers/microinverters/iq7',     portaria:'Certificações UL/TÜV/CE', detentor:'Enphase Energy', year:'2024', power:'240-366 VA', sub:'Microinversor IQ7 — certificado fabricante' },

  // Kaco — alemã (Siemens Energy)
  { brand:'Kaco', title:'blueplanet 100 NX3',     tuvUrl:'https://kaco-newenergy.com/products/blueplanet-100-nx3/', portaria:'Certificações TÜV/CE/VDE', detentor:'Kaco new energy (Siemens)', year:'2024', power:'100 kW',  sub:'String trifásico utility — certificado fabricante' },
  { brand:'Kaco', title:'blueplanet 50.0 NX3',     tuvUrl:'https://kaco-newenergy.com/products/blueplanet-50-nx3/',  portaria:'Certificações TÜV/CE/VDE', detentor:'Kaco new energy (Siemens)', year:'2024', power:'50 kW',   sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Kaco', title:'blueplanet NX3 Family 3-20kW', tuvUrl:'https://kaco-newenergy.com/products/blueplanet-3-0-20-0-nx3-m2/', portaria:'Certificações TÜV/CE/VDE', detentor:'Kaco new energy (Siemens)', year:'2024', power:'3-20 kW', sub:'String trifásico residencial — certificado fabricante' },
  { brand:'Kaco', title:'blueplanet 87-125 TL3',  tuvUrl:'https://kaco-newenergy.com/',                              portaria:'Certificações TÜV/CE/VDE', detentor:'Kaco new energy (Siemens)', year:'2024', power:'87-125 kW', sub:'String trifásico utility — certificado fabricante' },
  { brand:'Kaco', title:'blueplanet hybrid 10.0 TL3', tuvUrl:'https://kaco-newenergy.com/',                          portaria:'Certificações TÜV/CE/VDE', detentor:'Kaco new energy (Siemens)', year:'2024', power:'10 kW',     sub:'Híbrido trifásico — certificado fabricante' },

  // Kostal — alemã
  { brand:'Kostal', title:'PLENTICORE plus 3-10kW',  tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/hybrid-inverters/plenticore-plus',  portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'3-10 kW', sub:'Híbrido trifásico residencial — certificado fabricante' },
  { brand:'Kostal', title:'PLENTICORE G3',            tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/hybrid-inverters/plenticore-g3',     portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'3-10 kW', sub:'Híbrido residencial G3 — certificado fabricante' },
  { brand:'Kostal', title:'PIKO 10-20',                tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/string-inverters/piko-10-20',       portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'10-20 kW', sub:'String trifásico — certificado fabricante' },
  { brand:'Kostal', title:'PIKO MP plus',              tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/string-inverters/piko-mp-plus',     portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'1.5-5 kW', sub:'String monofásico — certificado fabricante' },
  { brand:'Kostal', title:'PIKO CI G2 (comercial 3P)', tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/string-inverters/piko-ci-g2',       portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'30-60 kW', sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Kostal', title:'PLENTICORE BI',             tuvUrl:'https://www.kostal-solar-electric.com/en-gb/products/hybrid-inverters/plenticore-bi',     portaria:'Certificações TÜV/CE/VDE', detentor:'Kostal Solar Electric', year:'2024', power:'5.5-10 kW', sub:'Battery inverter 48V — certificado fabricante' },

  // Huawei — chinesa
  { brand:'Huawei', title:'SUN2000 3-10KTL-M1',     tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'3-10 kW',   sub:'String trifásico residencial — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 12-20KTL-M0',    tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'12-20 kW',  sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 8-20KTL-M2',     tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'8-20 kW',   sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 50KTL-M0',       tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'50 kW',     sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 2-6KTL-L1',      tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'2-6 kW',    sub:'String monofásico — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000-215KTL-H3',      tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'215 kW',    sub:'Utility 1500V — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000-330KTL-H1',      tuvUrl:'https://solar.huawei.com/en/professionals/all-products', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2024', power:'330 kW',    sub:'Utility 1500V — certificado fabricante' },

  // Solax Power — chinesa
  { brand:'Solax Power', title:'X1-Hybrid G4',         tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'3-7.5 kW', sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Solax Power', title:'X3-Hybrid G4',         tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'5-15 kW',  sub:'Híbrido trifásico — certificado fabricante' },
  { brand:'Solax Power', title:'X3-HYB G4 PRO',         tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'15-30 kW', sub:'Híbrido trifásico Pro — certificado fabricante' },
  { brand:'Solax Power', title:'X3-IES All-in-one',    tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'5-15 kW',  sub:'All-in-one — certificado fabricante' },
  { brand:'Solax Power', title:'X1-Boost (retrofit)',  tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'3-6 kW',   sub:'String monofásico retrofit — certificado fabricante' },
  { brand:'Solax Power', title:'X3-MIC G2 3-25kW',     tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'3-25 kW',  sub:'String trifásico — certificado fabricante' },
  { brand:'Solax Power', title:'X3-ULTRA',              tuvUrl:'https://www.solaxpower.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'Solax Power', year:'2024', power:'15-30 kW', sub:'Híbrido trifásico high-power — certificado fabricante' },

  // Sofar Solar — chinesa
  { brand:'Sofar Solar', title:'HYD 5-10KTL-3PH-G4',         tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'5-10 kW',  sub:'Híbrido trifásico — certificado fabricante' },
  { brand:'Sofar Solar', title:'HYD 5-20KTL-3PH storage',     tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'5-20 kW',  sub:'Híbrido trifásico storage — certificado fabricante' },
  { brand:'Sofar Solar', title:'HYD 3000-6000-EP',            tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'3-6 kW',   sub:'Híbrido monofásico EP — certificado fabricante' },
  { brand:'Sofar Solar', title:'HYD 3000-6000-ES',            tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'3-6 kW',   sub:'Híbrido monofásico ES — certificado fabricante' },
  { brand:'Sofar Solar', title:'SOFAR 3300-12000TL-G3',       tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'3.3-12 kW', sub:'String trifásico — certificado fabricante' },
  { brand:'Sofar Solar', title:'SOFAR 25-40KTL-G2',           tuvUrl:'https://www.sofarsolar.com/downloads.html', portaria:'Certificações TÜV/CE', detentor:'Sofar Solar', year:'2024', power:'25-40 kW', sub:'String trifásico C&I — certificado fabricante' },

  // SAJ — chinesa
  { brand:'SAJ', title:'R5 3K-8K-S2 (EU)',                tuvUrl:'https://www.saj-electric.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'SAJ Electric', year:'2024', power:'3-8 kW',   sub:'String monofásico — certificado fabricante' },
  { brand:'SAJ', title:'H2S 5K-12K-3P Hybrid',             tuvUrl:'https://www.saj-electric.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'SAJ Electric', year:'2024', power:'5-12 kW',  sub:'Híbrido trifásico — certificado fabricante' },
  { brand:'SAJ', title:'R6 3K-15K-S4 (1P/3P)',             tuvUrl:'https://www.saj-electric.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'SAJ Electric', year:'2024', power:'3-15 kW',  sub:'String mono/trifásico — certificado fabricante' },
  { brand:'SAJ', title:'Suntrio Plus 25K-60K (3P C&I)',    tuvUrl:'https://www.saj-electric.com/downloads/', portaria:'Certificações TÜV/CE', detentor:'SAJ Electric', year:'2024', power:'25-60 kW', sub:'String trifásico C&I — certificado fabricante' },

  // Fox ESS — chinesa
  { brand:'Fox ESS', title:'F Series 3-6kW (1P)',          tuvUrl:'https://www.fox-ess.com/Download',   portaria:'Certificações TÜV/CE', detentor:'Fox ESS', year:'2024', power:'3-6 kW',     sub:'String monofásico — certificado fabricante' },
  { brand:'Fox ESS', title:'T Series G3 3-25kW (3P)',      tuvUrl:'https://www.fox-ess.com/Download',   portaria:'Certificações TÜV/CE', detentor:'Fox ESS', year:'2024', power:'3-25 kW',    sub:'String trifásico — certificado fabricante' },
  { brand:'Fox ESS', title:'H1 & AC1 G2 Hybrid 3-6kW',     tuvUrl:'https://www.fox-ess.com/Download',   portaria:'Certificações TÜV/CE', detentor:'Fox ESS', year:'2024', power:'3-6 kW',     sub:'Híbrido monofásico G2 — certificado fabricante' },
  { brand:'Fox ESS', title:'KH & KA Series',                tuvUrl:'https://www.fox-ess.com/Download',   portaria:'Certificações TÜV/CE', detentor:'Fox ESS', year:'2024', power:'7-13 kW',    sub:'Híbrido trifásico C&I — certificado fabricante' },
  { brand:'Fox ESS', title:'US Series split-phase 3.8-11.4kW', tuvUrl:'https://www.fox-ess.com/Download', portaria:'Certificações TÜV/CE', detentor:'Fox ESS', year:'2024', power:'3.8-11.4 kW', sub:'Híbrido split-phase US — certificado fabricante' },

  // APsystems — americana/chinesa
  { brand:'APsystems', title:'DS3 / DS3-L (microinv. 2-em-1)', tuvUrl:'https://emea.apsystems.com/microinverters/',   portaria:'Certificações TÜV/CE/IEC', detentor:'APsystems',  year:'2024', power:'0.88-1.2 kW', sub:'Microinversor 2-em-1 — certificado fabricante' },
  { brand:'APsystems', title:'QS1 / QS1A (microinv. 4-em-1)',   tuvUrl:'https://emea.apsystems.com/microinverters/',   portaria:'Certificações TÜV/CE/IEC', detentor:'APsystems',  year:'2024', power:'1 kW',         sub:'Microinversor 4-em-1 — certificado fabricante' },
  { brand:'APsystems', title:'DS3-H (high-power 2-em-1)',       tuvUrl:'https://emea.apsystems.com/microinverters/',   portaria:'Certificações TÜV/CE/IEC', detentor:'APsystems',  year:'2024', power:'1.2 kW',       sub:'Microinversor dual high-power — certificado fabricante' },
  { brand:'APsystems', title:'YC600 / YC1000 (legacy)',         tuvUrl:'https://emea.apsystems.com/microinverters/',   portaria:'Certificações TÜV/CE/IEC', detentor:'APsystems',  year:'2024', power:'0.6-1 kW',     sub:'Microinversor legacy — certificado fabricante' },

  // NEP — chinesa (microinversores)
  { brand:'NEP', title:'BDM-600 microinversor',  tuvUrl:'https://www.northernep.com/cn-en-products/', portaria:'Certificações TÜV/CE',         detentor:'NEP Northern', year:'2024', power:'0.6 kW', sub:'Microinversor — certificado fabricante' },
  { brand:'NEP', title:'BDM-800 microinversor',  tuvUrl:'https://www.northernep.com/cn-en-products/', portaria:'Certificações TÜV/CE',         detentor:'NEP Northern', year:'2024', power:'0.8 kW', sub:'Microinversor — certificado fabricante' },
  { brand:'NEP', title:'BDM-1000 microinversor', tuvUrl:'https://www.northernep.com/cn-en-products/', portaria:'Certificações TÜV/CE',         detentor:'NEP Northern', year:'2024', power:'1 kW',   sub:'Microinversor — certificado fabricante' },

  // Chint Power — chinesa (foco US/Global)
  { brand:'Chint Power', title:'CPS America (catálogo)',                  tuvUrl:'https://www.chintpower.com/na/', portaria:'Certificações UL/TÜV/CE', detentor:'Chint Power Systems', year:'2024', power:'—',        sub:'Catálogo CPS — certificado fabricante' },
  { brand:'Chint Power', title:'CPS SCA30KTL-DO/US-480',                   tuvUrl:'https://www.chintpower.com/na/', portaria:'Certificações UL/TÜV/CE', detentor:'Chint Power Systems', year:'2024', power:'30 kW',    sub:'String trifásico US — certificado fabricante' },
  { brand:'Chint Power', title:'CPS SCA50-80KTL (global)',                  tuvUrl:'https://www.chintpower.com/',    portaria:'Certificações TÜV/CE',     detentor:'Chint Power Systems', year:'2024', power:'50-80 kW', sub:'String trifásico C&I — certificado fabricante' },

  // Delta — taiwanesa
  { brand:'Delta', title:'RPI M20A',                          tuvUrl:'https://www.deltaww.com/en-us/products/Solar-Inverter/ALL/',  portaria:'Certificações TÜV/CE/IEC', detentor:'Delta Electronics', year:'2024', power:'20 kW',     sub:'String trifásico — certificado fabricante' },
  { brand:'Delta', title:'RPI M6A/M8A',                        tuvUrl:'https://www.deltaww.com/en-us/products/Solar-Inverter/ALL/',  portaria:'Certificações TÜV/CE/IEC', detentor:'Delta Electronics', year:'2024', power:'6-8 kW',    sub:'String trifásico residencial — certificado fabricante' },
  { brand:'Delta', title:'RPI M8/M10/M12/M15A/M20A (família)', tuvUrl:'https://www.deltaww.com/en-us/products/Solar-Inverter/ALL/',  portaria:'Certificações TÜV/CE/IEC', detentor:'Delta Electronics', year:'2024', power:'8-20 kW',   sub:'String trifásico família — certificado fabricante' },
  { brand:'Delta', title:'Catálogo Solar 2024 (geral)',       tuvUrl:'https://www.deltaww.com/en-us/products/Solar-Inverter/ALL/',  portaria:'Certificações TÜV/CE/IEC', detentor:'Delta Electronics', year:'2024', power:'—',          sub:'Catálogo — certificado fabricante' },

  // Livoltek
  { brand:'Livoltek', title:'Hyper Series 3-5kW hybrid',  tuvUrl:'https://livoltek-portal.com/en/Download',  portaria:'Certificações TÜV/CE', detentor:'Livoltek',  year:'2024', power:'3-5 kW',  sub:'Híbrido monofásico — certificado fabricante' },
  { brand:'Livoltek', title:'GT3-30-60K trifásico',        tuvUrl:'https://livoltek-portal.com/en/Download',  portaria:'Certificações TÜV/CE', detentor:'Livoltek',  year:'2024', power:'30-60 kW', sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Livoltek Brasil', title:'Portal Livoltek BR',   tuvUrl:'https://livoltek-portal.com/br/',          portaria:'Certificações TÜV/CE', detentor:'Livoltek BR', year:'2024', power:'—',      sub:'Portal BR — certificado fabricante' },

  // WEG — brasileira
  { brand:'WEG', title:'SIW linha completa',          tuvUrl:'https://www.weg.net/institutional/BR/pt/solutions/solar-energy', portaria:'Certificações TÜV/CE/Inmetro',  detentor:'WEG Equipamentos Elétricos', year:'2024', power:'—',         sub:'Linha SIW — certificado fabricante' },
  { brand:'WEG', title:'SIW500H (3P 50-110 kW)',       tuvUrl:'https://www.weg.net/institutional/BR/pt/solutions/solar-energy', portaria:'Certificações TÜV/CE/Inmetro',  detentor:'WEG Equipamentos Elétricos', year:'2024', power:'50-110 kW', sub:'String trifásico C&I — certificado fabricante' },
  { brand:'WEG', title:'SIW300H (1P 3-6 kW)',          tuvUrl:'https://www.weg.net/institutional/BR/pt/solutions/solar-energy', portaria:'Certificações TÜV/CE/Inmetro',  detentor:'WEG Equipamentos Elétricos', year:'2024', power:'3-6 kW',    sub:'String monofásico residencial — certificado fabricante' },

  // Intelbras — brasileira
  { brand:'Intelbras', title:'EGI-80K/100K string solar', tuvUrl:'https://www.intelbras.com/pt-br/energia-solar', portaria:'Certificações TÜV/Inmetro', detentor:'Intelbras', year:'2024', power:'80-100 kW', sub:'String trifásico C&I — certificado fabricante' },

  // Ingeteam — espanhola
  { brand:'Ingeteam', title:'Ingecon Sun (utility)',  tuvUrl:'https://www.ingeteam.com/pt-br/setores/energia-fotovoltaica/p15_24_472/produtos.aspx',  portaria:'Certificações TÜV/CE/IEC',  detentor:'Ingeteam',  year:'2024',  power:'—',  sub:'Utility — certificado fabricante' },

  // Refusol / Advanced Energy
  { brand:'Refusol / Advanced Energy', title:'Refusol (legado)', tuvUrl:'https://www.advancedenergy.com/en-us/products/inverters/',  portaria:'Certificações TÜV/CE',  detentor:'Advanced Energy',  year:'2024',  power:'—',  sub:'Legado Refusol — certificado fabricante' },

  // Renovigi — brasileira
  { brand:'Renovigi', title:'Renovigi (catálogo)', tuvUrl:'https://renovigi.com.br/',  portaria:'Certificações TÜV/Inmetro',  detentor:'Renovigi',  year:'2024',  power:'—',  sub:'Catálogo — certificado fabricante' },

  // Elgin Solar — brasileira (rebrand)
  { brand:'Elgin Solar', title:'Catálogo inversores Elgin (1P)',   tuvUrl:'https://elgin.com.br/produtos/energia-solar', portaria:'Certificações TÜV/Inmetro',  detentor:'Elgin',  year:'2024',  power:'—',  sub:'Catálogo monofásico — certificado fabricante' },
  { brand:'Elgin Solar', title:'Elgin GT 50kW trifásico',           tuvUrl:'https://elgin.com.br/produtos/energia-solar', portaria:'Certificações TÜV/Inmetro',  detentor:'Elgin',  year:'2024',  power:'50 kW',  sub:'String trifásico C&I — certificado fabricante' },

  // Outras marcas menores
  { brand:'Aiswei',                 title:'Aiswei catálogo (Solplanet)',     tuvUrl:'https://solplanet.net/download/', portaria:'Certificações TÜV/CE',   detentor:'AISWEI Pty Ltd',   year:'2024', power:'—',  sub:'Mesma linha Solplanet — certificado fabricante' },
  { brand:'Zeversolar (Aiswei)',    title:'Zeversolar (Aiswei/Solplanet)',   tuvUrl:'https://solplanet.net/download/', portaria:'Certificações TÜV/CE',   detentor:'AISWEI Pty Ltd',   year:'2024', power:'—',  sub:'Linha Aiswei/Solplanet — certificado fabricante' },
  { brand:'Must Energy',            title:'Must Solar página oficial',       tuvUrl:'https://www.mustsolar.com/',      portaria:'Certificações TÜV/CE',   detentor:'Must Solar',       year:'2024', power:'—',  sub:'Página oficial — certificado fabricante' },
  { brand:'Turbo Energy',           title:'TESLINK gestão energética BR',    tuvUrl:'https://turboenergy.com.br/',     portaria:'Certificações TÜV/Inmetro', detentor:'Turbo Energy',  year:'2024', power:'—',  sub:'Gestão energética — certificado fabricante' },
  { brand:'Upnergy',                title:'Upnergy residencial monofásico',  tuvUrl:'https://upnergy.com.br/',         portaria:'Certificações TÜV/Inmetro', detentor:'Upnergy',       year:'2024', power:'—',  sub:'Residencial monofásico — certificado fabricante' },
  { brand:'Veichi',                 title:'SIHxxxKTL-3PH',                    tuvUrl:'https://www.veichi.com/Solar-Pump-Inverters.html', portaria:'Certificações TÜV/CE', detentor:'Veichi Electric', year:'2024', power:'—',  sub:'String trifásico — certificado fabricante' },

  /* ========================================================================
   * EXPANSÃO Abr/2026 — modelos adicionais das marcas:
   * SolarEdge, Sungrow, Solplanet, Solis, Livoltek, APsystems + Huawei
   * Foco: cobertura de novos modelos com link direto pra certificados oficiais.
   * ========================================================================*/

  // ===== SolarEdge — novos modelos =====
  { brand:'SolarEdge', title:'SE Home Hub Single Phase 2.2-10kW',  tuvUrl:'https://knowledge-center.solaredge.com/sites/kc/files/se-home-hub-single-phase-inverter-datasheet-row.pdf', portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'2.2-10 kW',  sub:'Home Hub residencial — certificado fabricante' },
  { brand:'SolarEdge', title:'SE Home Wave Single Phase NA',        tuvUrl:'https://knowledge-center.solaredge.com/sites/kc/files/se-solaredge-home-wave-inverter-single-phase-with-setapp-datasheet-nam.pdf', portaria:'Certificações UL/CSA',     detentor:'SolarEdge Technologies', year:'2024', power:'6-11.4 kW',  sub:'Home Wave NA — certificado fabricante' },
  { brand:'SolarEdge', title:'SE Three Phase 4-10K (família)',      tuvUrl:'https://knowledge-center.solaredge.com/sites/kc/files/se-three-phase-inverter-datasheet.pdf',                portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'4-10 kW',    sub:'Trifásico residencial — certificado fabricante' },
  { brand:'SolarEdge', title:'SE Three Phase SetApp 5-30K',          tuvUrl:'https://knowledge-center.solaredge.com/sites/kc/files/se-three-phase-inverter-with-setapp-configuration-datasheet.pdf', portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2024', power:'5-30 kW',    sub:'Trifásico SetApp — certificado fabricante' },
  { brand:'SolarEdge', title:'SE 16A Single Phase',                  tuvUrl:'https://www.solaredge.com/sites/default/files/se-single-phase-16a-inverter-datasheet.pdf',                  portaria:'Certificações TÜV/CE/IEC', detentor:'SolarEdge Technologies', year:'2023', power:'3-4 kW',     sub:'Single Phase 16A — certificado fabricante' },

  // ===== Sungrow — novos modelos =====
  { brand:'Sungrow', title:'SG3.0RS-S/SG5.0RS-S/SG6.0RS família',    tuvUrl:'https://en.sungrowpower.com/upload/file/PD-SG3-6RS-S%20Datasheet_V14_EN.pdf.pdf',                              portaria:'Certificações TÜV/CE/Inmetro', detentor:'Sungrow Power Supply', year:'2024', power:'3-6 kW',     sub:'String monofásico residencial RS — certificado fabricante' },
  { brand:'Sungrow', title:'SG3K-D / SG5K-D / SG6K-D família',       tuvUrl:'https://en.sungrowpower.com/upload/documentFile/DS_SG3K%203K6%204K%204K6%205K%206K-D%20Datasheet(EMEA)_V12_EN.pdf.pdf', portaria:'Certificações TÜV/CE/Inmetro', detentor:'Sungrow Power Supply', year:'2022', power:'3-6 kW',     sub:'String monofásico família D — certificado fabricante' },
  { brand:'Sungrow', title:'SG110CX (datasheet completo)',           tuvUrl:'https://en.sungrowpower.com/upload/documentFile/DS_SG110CX%20Datasheet_V14_EN.pdf.pdf',                       portaria:'Certificações TÜV/CE/Inmetro', detentor:'Sungrow Power Supply', year:'2023', power:'110 kW',     sub:'String C&I — certificado fabricante' },
  { brand:'Sungrow', title:'SG33CX-P2 / SG40CX-P2 / SG50CX-P2',      tuvUrl:'https://en.sungrowpower.com/productDetail/2156/string-inverter-sg33cx-p2-sg40cx-p2-sg50cx-p2',                portaria:'Certificações TÜV/CE/Inmetro', detentor:'Sungrow Power Supply', year:'2024', power:'33-50 kW',   sub:'String C&I CX-P2 — certificado fabricante' },
  { brand:'Sungrow', title:'SG250HX (utility)',                       tuvUrl:'https://en.sungrowpower.com/productDetail/665/string-inverter-sg250hx',                                       portaria:'Certificações TÜV/CE/IEC',     detentor:'Sungrow Power Supply', year:'2023', power:'250 kW',     sub:'Utility 1500V — certificado fabricante' },

  // ===== Solplanet — novos modelos =====
  { brand:'Solplanet', title:'ASW S-G2 1-6kW (Global EN)',           tuvUrl:'https://solplanet.net/wp-content/uploads/2022/09/Datasheet-ASW-3K-6K-S-G2-Series-Global-EN_1023_web-2.pdf',  portaria:'Certificações TÜV/CE/Inmetro', detentor:'AISWEI Pty Ltd',  year:'2023', power:'1-6 kW',     sub:'Single phase ASW S-G2 — certificado fabricante' },
  { brand:'Solplanet', title:'ASW LT-G2 8-20kW (3-fase)',            tuvUrl:'https://solplanet.net/wp-content/uploads/2021/12/Datasheet-ASW-ASW-8-20K-LT-G2-Series-0322_Global-EN_web-1.pdf', portaria:'Certificações TÜV/CE/Inmetro', detentor:'AISWEI Pty Ltd', year:'2022', power:'8-20 kW',    sub:'Three-phase LT-G2 — certificado fabricante' },
  { brand:'Solplanet', title:'ASW LT-G2 Pro 8-20kW',                 tuvUrl:'https://solplanet.net/wp-content/uploads/2022/05/Datasheet-ASW-ASW-8-20K-LT-G2-Pro-Series-0322_Global-EN_web.pdf', portaria:'Certificações TÜV/CE',         detentor:'AISWEI Pty Ltd', year:'2022', power:'8-20 kW',    sub:'Three-phase Pro — certificado fabricante' },
  { brand:'Solplanet', title:'ASW LT-G2 Pro 3-10kW',                 tuvUrl:'https://solplanet.net/wp-content/uploads/2022/05/Datasheet-ASW-3-10K-LT-G2-Pro-Series-0722_Global-EN_web-1-2.pdf', portaria:'Certificações TÜV/CE',     detentor:'AISWEI Pty Ltd', year:'2022', power:'3-10 kW',    sub:'Three-phase residencial Pro — certificado fabricante' },
  { brand:'Solplanet', title:'Installer Area (downloads)',           tuvUrl:'https://solplanet.net/installer-area/',                                                                       portaria:'Certificações TÜV/CE',         detentor:'AISWEI Pty Ltd',  year:'2024', power:'—',          sub:'Centro de downloads instalador — certificado fabricante' },

  // ===== Solis — novos modelos =====
  { brand:'Solis', title:'S6-GR1P (2.5-6)K-S Brasil V1.7',           tuvUrl:'https://www.solisinverters.com/uploads/file/Solis_datasheet_S6-GR1P(2,5-6)K_BRA_V1,7_202408.pdf',           portaria:'Certificações TÜV/CE/Inmetro', detentor:'Ginlong Solis', year:'2024', power:'2.5-6 kW',   sub:'String monofásico BR — datasheet oficial' },
  { brand:'Solis', title:'S5-GR1P (3-6)K Família',                  tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S5-GR1P_3-6_K.html',                                  portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2023', power:'3-6 kW',     sub:'String monofásico S5 — certificado fabricante' },
  { brand:'Solis', title:'S5-GR3P (3-20)K Trifásico',                tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S5-GR3P_3-20K.html',                                  portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2023', power:'3-20 kW',    sub:'Trifásico S5 — certificado fabricante' },
  { brand:'Solis', title:'S6-GC (25-60)K C&I',                       tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S6-GC_25-60_K.html',                                  portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2024', power:'25-60 kW',   sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Solis', title:'S5-GC (75-125)K C&I',                      tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S5-GC_75-125_K.html',                                 portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2023', power:'75-125 kW',  sub:'String trifásico C&I — certificado fabricante' },
  { brand:'Solis', title:'Solis (80-110)K-5G-PRO',                    tuvUrl:'https://www.solisinverters.com/global/solarinverter17/80-110K_5G_PRO.html',                                portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2023', power:'80-110 kW',  sub:'String utility 5G-PRO — certificado fabricante' },
  { brand:'Solis', title:'S6-EH1P (5-8)K-L-PLUS Híbrido',            tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S6-EH1P_5-8_K-L-PLUS.html',                            portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2024', power:'5-8 kW',     sub:'Híbrido monofásico LV-PLUS — certificado fabricante' },
  { brand:'Solis', title:'S6-EH3P (8-15)K02-NV-YD-L Híbrido',        tuvUrl:'https://www.solisinverters.com/global/solarinverter17/S6-EH3P_8-15_K02-NV-YD-L.html',                        portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2024', power:'8-15 kW',    sub:'Híbrido trifásico LV — certificado fabricante' },
  { brand:'Solis', title:'Download Center oficial',                  tuvUrl:'https://www.solisinverters.com/global/downloadcenter.html',                                                  portaria:'Certificações TÜV/CE',         detentor:'Ginlong Solis', year:'2024', power:'—',          sub:'Download Center — certificado fabricante' },

  // ===== Livoltek — novos modelos =====
  { brand:'Livoltek', title:'GT3 30-60kW Trifásico',                 tuvUrl:'https://www.livoltek.com/product/grid-tied-inverter-three-phase-gt3-30-60kw/',                              portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'30-60 kW',   sub:'Three-phase string GT3 — certificado fabricante' },
  { brand:'Livoltek', title:'GT3 15-30kW Trifásico',                 tuvUrl:'https://www.livoltek.com/product/grid-tied-inverter-three-phase-gt3-15-30kw/',                              portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'15-30 kW',   sub:'Three-phase residencial GT3 — certificado fabricante' },
  { brand:'Livoltek', title:'GT3 4-25kW Trifásico',                  tuvUrl:'https://www.livoltek.com/product/grid-tied-inverter-three-phase-gt3-4-25kw/',                               portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'4-25 kW',    sub:'Three-phase versátil GT3 — certificado fabricante' },
  { brand:'Livoltek', title:'Hyper 3-6kW Híbrido',                   tuvUrl:'https://www.livoltek.com/product/hybrid-inverter-single-phase-3-6kw/',                                       portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'3-6 kW',     sub:'Hybrid Hyper Series — certificado fabricante' },
  { brand:'Livoltek', title:'All-in-one 3-5kW',                       tuvUrl:'https://www.livoltek.com/product/all-in-one-energy-storage/',                                               portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'3-5 kW',     sub:'All-in-one residencial — certificado fabricante' },
  { brand:'Livoltek', title:'Download Center oficial',               tuvUrl:'https://www.livoltek.com/download-center/',                                                                 portaria:'Certificações TÜV/CE',         detentor:'Hangzhou Livoltek',  year:'2024', power:'—',          sub:'Download Center — certificado fabricante' },

  // ===== APsystems — novos modelos =====
  { brand:'APsystems', title:'DS3-H (Brasil) microinversor 1050VA',  tuvUrl:'https://latam.apsystems.com/produtos/microinversor-ds3-h/',                                                  portaria:'Certificações TÜV/CE/Inmetro', detentor:'APsystems Latam', year:'2023', power:'1.05 kW',    sub:'Microinversor 2-em-1 alta potência BR — certificado fabricante' },
  { brand:'APsystems', title:'DS3D (Brasil) microinversor 2000VA',    tuvUrl:'https://latam.apsystems.com/produtos/microinversor-ds3d/',                                                  portaria:'Certificações TÜV/CE/Inmetro', detentor:'APsystems Latam', year:'2024', power:'2 kW',       sub:'Microinversor 4-em-1 BR — certificado fabricante' },
  { brand:'APsystems', title:'QS1A (Brasil) microinversor 1500VA',    tuvUrl:'https://latam.apsystems.com/produtos/microinversor-qs1a/',                                                  portaria:'Certificações TÜV/CE/Inmetro', detentor:'APsystems Latam', year:'2021', power:'1.5 kW',     sub:'Microinversor 4-em-1 UL1741 BR — certificado fabricante' },
  { brand:'APsystems', title:'QT2 microinversor 3-fase 1800VA',       tuvUrl:'https://emea.apsystems.com/products/qt2/',                                                                  portaria:'Certificações TÜV/CE',         detentor:'APsystems EMEA',  year:'2024', power:'1.8 kW',     sub:'Microinversor trifásico 4-em-1 — certificado fabricante' },
  { brand:'APsystems', title:'YC600 microinversor (legacy)',          tuvUrl:'https://emea.apsystems.com/products/yc600/',                                                                portaria:'Certificações TÜV/CE',         detentor:'APsystems EMEA',  year:'2020', power:'0.6 kW',     sub:'Microinversor 2-em-1 — certificado fabricante' },
  { brand:'APsystems', title:'Catálogo APsystems Latam',              tuvUrl:'https://latam.apsystems.com/',                                                                              portaria:'Certificações TÜV/CE/Inmetro', detentor:'APsystems Latam', year:'2024', power:'—',          sub:'Catálogo BR/LatAm — certificado fabricante' },

  // ===== Huawei — modelos adicionais com URLs revalidadas =====
  { brand:'Huawei', title:'SUN2000 3-10KTL-M1 (EU EMEA datasheet)',  tuvUrl:'https://solar.huawei.com/-/media/Solar/attachment/pdf/eu/datasheet/SUN2000-3-10KTL-M1.pdf',                  portaria:'Certificações TÜV/CE/IEC',     detentor:'Huawei Technologies', year:'2024', power:'3-10 kW',    sub:'String trifásico residencial M1 — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 5-10KTL-M0/M1 (APAC)',             tuvUrl:'https://solar.huawei.com/-/media/Solar/attachment/pdf/apac/datasheet/SUN2000-5-10KTL-M0-M1.pdf',           portaria:'Certificações TÜV/CE/IEC',     detentor:'Huawei Technologies', year:'2024', power:'5-10 kW',    sub:'String residencial APAC — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 12-25KTL-M5',                       tuvUrl:'https://solar.huawei.com/download?p=%2F-%2FMedia%2FSolar%2Fdatasheet%2FSUN2000-12-25KTL-M5.pdf',          portaria:'Certificações TÜV/CE/IEC',     detentor:'Huawei Technologies', year:'2024', power:'12-25 kW',   sub:'String trifásico M5 — certificado fabricante' },
  { brand:'Huawei', title:'SUN2000 100KTL-M2 (C&I)',                   tuvUrl:'https://solar.huawei.com/download?p=%2F-%2Fmedia%2FSolarV4%2Fsolar-version2%2Fmiddle-east-africa%2Fke%2Fprofessionals%2Fall-products%2Fci%2Fsmart-module-controller%2Fsun2000-100ktl-m2-datasheet-20230210.pdf', portaria:'Certificações TÜV/CE/IEC', detentor:'Huawei Technologies', year:'2023', power:'100 kW', sub:'Smart PV Controller C&I — certificado fabricante' },
];

/* ----------------------------------------------------------------
 * Helper: gera URL do Inmetro a partir do número de registro.
 * NÃO editar — usado automaticamente pelo drive.js.
 * ---------------------------------------------------------------- */
function buildInmetroUrl(registro) {
  if (!registro) return '#';
  return 'https://registro.inmetro.gov.br/consulta/detalhe.aspx?pag=1&NumeroRegistro=' + encodeURIComponent(registro);
}
