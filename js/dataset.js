/**
 * SolarPro Portal — Dataset estático
 * ==================================
 * Inversores e Módulos com links diretos para documentação oficial dos fabricantes.
 * Certificados continuam vindo do Google Drive (hospedados pela ROV).
 *
 * Atualizado: abril/2026
 * Total: 231 inversores + 159 módulos
 */

var SOLARPRO_INVERSORES = [
  {
    "brand": "Growatt",
    "title": "MIC 750-3300TL-X (família)",
    "power": "0.75-3.3 kW",
    "sub": "String monofásico residencial pequeno",
    "year": "2021",
    "url": "https://www.scribd.com/document/498792475/Datasheet-Growatt-MIC-3000-TL-X"
  },
  {
    "brand": "Growatt",
    "title": "MIN 2500-6000TL-X",
    "power": "2.5-6 kW",
    "sub": "String monofásico",
    "year": "2021",
    "url": "https://krannich-solar.com/fileadmin/user_upload/IND/Datasheets/Growatt/Datasheet_Growatt_MIN_3-6TL-X.pdf"
  },
  {
    "brand": "Growatt",
    "title": "MIN 2500-5000TL-XA",
    "power": "2.5-5 kW",
    "sub": "AC-coupled storage",
    "year": "2023",
    "url": "https://en.growatt.com/products/min-2500-5000tl-xa"
  },
  {
    "brand": "Growatt",
    "title": "MIN 7000-10000TL-X/X2",
    "power": "7-10 kW",
    "sub": "String monofásico médio",
    "year": "2022",
    "url": "https://en.growatt.com/products/min-7000-10000tl-x-x2"
  },
  {
    "brand": "Growatt",
    "title": "MIN 3000-7600TL-XH-US",
    "power": "3-7.6 kW",
    "sub": "Híbrido monofásico US",
    "year": "2024",
    "url": "https://us.growatt.com/upload/file/MIN_3000-7600TL-XH-US_Datasheet_EN_202401.pdf"
  },
  {
    "brand": "Growatt",
    "title": "MOD 3000-9000TL3-X",
    "power": "3-9 kW",
    "sub": "String trifásico residencial",
    "year": "2022",
    "url": "https://krannich-solar.com/fileadmin/user_upload/IND/Datasheets/Growatt/Datasheet_Growatt_MOD_3000_9000TL3-X.pdf"
  },
  {
    "brand": "Growatt",
    "title": "MOD 10-15KTL3-X",
    "power": "10-15 kW",
    "sub": "String trifásico residencial+",
    "year": "2022",
    "url": "https://www.czxcsolar.com/growatt-mod-series-10ktl3-x-15ktl3-x-product/"
  },
  {
    "brand": "Growatt",
    "title": "MID 15-25KTL3-X",
    "power": "15-25 kW",
    "sub": "String trifásico comercial",
    "year": "2021",
    "url": "https://midsummerwholesale.co.uk/pdfs/growatt-15-25ktl3-x-datasheet.pdf"
  },
  {
    "brand": "Growatt",
    "title": "MID 25-40KTL3-X (EU)",
    "power": "25-40 kW",
    "sub": "String trifásico comercial",
    "year": "2023",
    "url": "https://www.scribd.com/document/697425721/MID-25-40KTL3-X-EU-Datasheet-EN-202310"
  },
  {
    "brand": "Growatt",
    "title": "MID 33-50KTL3-X2 (global)",
    "power": "33-50 kW",
    "sub": "String trifásico comercial",
    "year": "2024",
    "url": "https://growatt.tech/wp-content/uploads/shared-files/MID-33-50KTL3-X2-User-Manual-EN-1.pdf"
  },
  {
    "brand": "Growatt",
    "title": "MAX 50-80KTL3 LV",
    "power": "50-80 kW",
    "sub": "Comercial trifásico 220V",
    "year": "2022",
    "url": "https://en.growatt.com/products/max-50-80ktl3-lv"
  },
  {
    "brand": "Growatt",
    "title": "MAX 185-253KTL3-X HV",
    "power": "185-253 kW",
    "sub": "Utility trifásico 1500V",
    "year": "2023",
    "url": "https://en.growatt.com/products/max-185-253ktl3-x-hv"
  },
  {
    "brand": "Growatt",
    "title": "SPH 10000TL-HU",
    "power": "10 kW",
    "sub": "Híbrido residencial US",
    "year": "2024",
    "url": "https://us.growatt.com/upload/file/SPH_10000TL-HU-US_Datasheet_EN_202406.pdf"
  },
  {
    "brand": "Growatt",
    "title": "SPH 3000-6000TL BL-UP",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico residencial",
    "year": "2022",
    "url": "https://en.growatt.com/products/sph-3000-6000tl-bl-up"
  },
  {
    "brand": "Growatt",
    "title": "SPH 4000-10000TL3 BH-UP",
    "power": "4-10 kW",
    "sub": "Híbrido trifásico residencial",
    "year": "2022",
    "url": "https://en.growatt.com/products/sph-4000-10000tl3-bh-up"
  },
  {
    "brand": "Deye",
    "title": "SUN-4/5/6K-G (string 1P)",
    "power": "4-6 kW",
    "sub": "String monofásico on-grid",
    "year": "2020",
    "url": "https://220v.com.ua/files/deye/Deye-sun-5k-g.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-3.6/5/6K-SG03LP1-EU",
    "power": "3.6-6 kW",
    "sub": "Híbrido monofásico LV G3",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/10/21/datasheet_sun-3.6-6k-sg03lp1_241021_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-3/3.6K-SG04LP1-SM1-EU",
    "power": "3-3.6 kW",
    "sub": "Híbrido monofásico SM1",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/09/27/datasheet_sun-3-6k-sg04lp1-sm1_240927_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-5-8K-SG01LP1-US",
    "power": "5-8 kW",
    "sub": "Híbrido split-phase US/EU",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/02/03/instructions_sun-5-8k-sg01lp1-us-eu_240203_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-5-25K-SG01HP3-EU-AM2",
    "power": "5-25 kW",
    "sub": "Híbrido trifásico HV comercial",
    "year": "2023",
    "url": "https://www.deyeinverter.com/deyeinverter/2023/07/24/datasheet_sun-(5-25)k-sg01hp3-eu_230724_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-5-12K-SG04LP3-EU",
    "power": "5-12 kW",
    "sub": "Híbrido trifásico LV residencial",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/10/21/datasheet_sun-5-12k-sg04lp3_241021_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-14-20K-SG05LP3-EU-SM2",
    "power": "14-20 kW",
    "sub": "Híbrido trifásico alta potência",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/09/27/datasheet_sun-14-20k-sg05lp3-eu-sm2_240927_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-18-25K-G05 (string 3P)",
    "power": "18-25 kW",
    "sub": "String trifásico comercial",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/04/16/datasheet_sun-18-25k-g05_240416_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-60-80K-G (string 3P)",
    "power": "60-80 kW",
    "sub": "String trifásico comercial 4 MPPT",
    "year": "2024",
    "url": "https://www.deyeinverter.com/deyeinverter/2024/04/16/datasheet_sun-60-80k-g-deye_240416_en.pdf"
  },
  {
    "brand": "Deye",
    "title": "SUN-70-110K-G03 (string 3P)",
    "power": "70-110 kW",
    "sub": "String trifásico comercial alta pot.",
    "year": "2023",
    "url": "https://www.deyeinverter.com/deyeinverter/2023/07/31/datasheet_sun-(70-110)k-g03_230731_en.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "DNS Series 3-6kW (original)",
    "power": "3-6 kW",
    "sub": "String monofásico residencial 2 MPPT",
    "year": "2020",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_DNS_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "DNS G3 Series 3-6kW",
    "power": "3-6 kW",
    "sub": "String monofásico residencial G3 (16A/string)",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_DNS%20G3_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "MS Series 5-10kW (3 MPPT)",
    "power": "5-10 kW",
    "sub": "String monofásico residencial telhados complexos",
    "year": "2022",
    "url": "https://en.goodwe.com/ms-series-single-phase-residential-solar-inverter"
  },
  {
    "brand": "GoodWe",
    "title": "SDT G2 Series 5-12kW",
    "power": "5-12 kW",
    "sub": "String trifásico residencial G2",
    "year": "2022",
    "url": "https://en.goodwe.com/sdt-g2-series-three-phase-residential-solar-inverter"
  },
  {
    "brand": "GoodWe",
    "title": "SDT G2 Series 17-25kW",
    "power": "17-25 kW",
    "sub": "String trifásico res/comercial 2 MPPT",
    "year": "2023",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_SDT%20G2%2017-25K_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "SDT G3 Series 4-30kW",
    "power": "4-30 kW",
    "sub": "String trifásico G3 2 MPPT",
    "year": "2026",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_SDT-G3_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "SMT Series 25-36kW (3 MPPT)",
    "power": "25-36 kW",
    "sub": "String trifásico comercial 3 MPPT",
    "year": "2023",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_SMT%2015A_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "SMT G2 Series 35-80kW",
    "power": "35-80 kW",
    "sub": "String trifásico comercial 4/6 MPPT",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_SMT-G2_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "SMT Series 50-60kW (6 MPPT)",
    "power": "50-60 kW",
    "sub": "String trifásico C&I 6 MPPT",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_SMT%2050-60kW_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "MT Series 50-80kW (4 MPPT)",
    "power": "50-80 kW",
    "sub": "String trifásico C&I alta pot.",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_MT_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET Series 5-10kW HV",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico HV residencial",
    "year": "2021",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET G2 Series 5-10kW",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico G2",
    "year": "2025",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET-G2_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET Series 15-30kW",
    "power": "15-30 kW",
    "sub": "Híbrido trifásico comercial HV",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET%2015-30kW_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET LV Series 5-20kW",
    "power": "5-20 kW",
    "sub": "Híbrido trifásico LV (Brasil-ready)",
    "year": "2026",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET-LV_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET 25-50kW",
    "power": "25-50 kW",
    "sub": "Híbrido comercial trifásico",
    "year": "2025",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET-25-50kW_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET 75-100kW",
    "power": "75-100 kW",
    "sub": "Híbrido HV C&I",
    "year": "2025",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET-100_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ETC 50/100kW (modular)",
    "power": "50-100 kW",
    "sub": "Híbrido modular C&I",
    "year": "2026",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ETC%2050-100K_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET PLUS+ 5-10kW 16A",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico 16A",
    "year": "2024",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/Datasheet/GW_ET%20PLUS+%20(16A)_Datasheet-EN.pdf"
  },
  {
    "brand": "GoodWe",
    "title": "ET G2 EMEA (UK/IE spec)",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico G2 EMEA",
    "year": "2025",
    "url": "https://en.goodwe.com/Ftp/EN/Downloads/ZUO/GW_ET-G2_Datasheet-UK-and-IE.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG3K-6K-D (residencial monofásico)",
    "power": "3-6 kW",
    "sub": "String monofásico residencial",
    "year": "2020",
    "url": "https://en.sungrowpower.com/upload/documentFile/DS_SG3K%203K6%204K%204K6%205K%206K-D%20Datasheet(EMEA)_V12_EN.pdf.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG8.0/9.0/10RS",
    "power": "8-10 kW",
    "sub": "String monofásico residencial RS",
    "year": "2021",
    "url": "https://vietnam.sungrowpower.com/upload/file/20220120/DS_SG8.0_9.0_10RS_ENG.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG10/12KTL-M",
    "power": "10-12 kW",
    "sub": "String trifásico residencial",
    "year": "2020",
    "url": "https://en.sungrowpower.com/upload/documentFile/DS_SG10&12KTL-M%20datasheet_V11_EN.pdf.PDF"
  },
  {
    "brand": "Sungrow",
    "title": "SH5K (original hybrid)",
    "power": "5 kW",
    "sub": "Híbrido monofásico LV battery",
    "year": "2019",
    "url": "https://acdcenergy.com.au/wp-content/uploads/2018/07/Sungrow-Hybrid-5kW-Inverter-2.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SH5K-30 (hybrid 1P)",
    "power": "5 kW",
    "sub": "Híbrido monofásico LV battery v3",
    "year": "2019",
    "url": "https://en.sungrowpower.com/upload/documentFile/DS_SH5K-30%20Datasheet_V10_EN.pdf.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SH5.0-10RT (3-phase hybrid)",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico residencial HV",
    "year": "2021",
    "url": "https://en.sungrowpower.com/upload/file/20210706/DS_20210703_SH5~10RT_V1.2.1_EN.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG33CX/SG40CX/SG50CX",
    "power": "33-50 kW",
    "sub": "String trifásico C&I 1000V",
    "year": "2021",
    "url": "https://en.sungrowpower.com/upload/documentFile/DS_SG33CX%20SG40CX%20SG50CX%20Datasheet_V14_EN.pdf.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG110CX",
    "power": "110 kW",
    "sub": "String trifásico C&I 1000V 9 MPPT",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/inverter-datasheet/12367"
  },
  {
    "brand": "Sungrow",
    "title": "SG125CX-P2",
    "power": "125 kW",
    "sub": "String trifásico C&I P2 1000V",
    "year": "2023",
    "url": "https://krannich-solar.com/fileadmin/user_upload/global/datasheets/Sungrow/sungrow-inverter-sg125cx-p2-datasheet.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG125HX (utility 1500V)",
    "power": "125 kW",
    "sub": "Utility trifásico 1500V 6 MPPT",
    "year": "2021",
    "url": "https://en.sungrowpower.com/upload/file/20210317/DS_20210317_SG125HX_V11_EN.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG250HX (utility 1500V)",
    "power": "250 kW",
    "sub": "Utility trifásico 1500V",
    "year": "2020",
    "url": "https://en.sungrowpower.com/upload/file/20210108/DS_20201121_SG250HX%20Datasheet_V1.5.4_EN.pdf.pdf"
  },
  {
    "brand": "Sungrow",
    "title": "SG250HX-US (NA)",
    "power": "250 kW",
    "sub": "Utility trifásico 1500V EUA",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/inverter-datasheet/13310"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 3-10KTL-M1",
    "power": "3-10 kW",
    "sub": "String trifásico residencial M1",
    "year": "2021",
    "url": "https://solar.huawei.com/en-GB/download?p=/-/media/Solar/attachment/pdf/eu/datasheet/SUN2000-3-10KTL-M1.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 3-10KTL-M1 HC",
    "power": "3-10 kW",
    "sub": "String residencial HC high-current",
    "year": "2024",
    "url": "https://solar.huawei.com/download?p=%2F-%2FMedia%2FSolar%2Fdatasheet%2FSUN2000-3_4_5_6_8_10KTL-M1_High_Current_Version.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 12-20KTL-M0",
    "power": "12-20 kW",
    "sub": "String trifásico comercial M0",
    "year": "2020",
    "url": "https://solar.huawei.com/-/media/Solar/attachment/pdf/apac/datasheet/SUN2000-12-20KTL-M0.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 8-20KTL-M2",
    "power": "8-20 kW",
    "sub": "String trifásico M2 2ª gen",
    "year": "2023",
    "url": "https://solar.huawei.com/download?p=%2F-%2FMedia%2FSolarV4%2Fsolar-version2%2Fasia-pacific%2Fau%2Fprofessionals%2Fall-products%2Fresidential%2Fsmart-energy-controller%2FSUN2000-8_10_12_15_17_20KTL-M2.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 12-25KTL-M5",
    "power": "12-25 kW",
    "sub": "String trifásico M5 nova gen",
    "year": "2024",
    "url": "https://solar.huawei.com/download?p=%2F-%2FMedia%2FSolar%2Fdatasheet%2FSUN2000-12-25KTL-M5.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 50KTL-M0",
    "power": "50 kW",
    "sub": "String trifásico comercial",
    "year": "2020",
    "url": "https://solar.huawei.com/-/media/Solar/attachment/pdf/mea/datasheet/SUN2000-50KTL-M0.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 2-6KTL-L1 (1P)",
    "power": "2-6 kW",
    "sub": "String monofásico híbrido L1",
    "year": "2020",
    "url": "https://solar.huawei.com/-/media/Solar/attachment/pdf/mea/datasheet/SUN2000-2-6KTL-L1.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000 5-10KTL-M0/M1",
    "power": "5-10 kW",
    "sub": "String trifásico residencial",
    "year": "2021",
    "url": "https://solar.huawei.com/-/media/Solar/attachment/pdf/apac/datasheet/SUN2000-5-10KTL-M0-M1.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000-215KTL-H3 (utility)",
    "power": "215 kW",
    "sub": "Utility trifásico 1500V 9 MPPT",
    "year": "2020",
    "url": "https://solar.huawei.com/en-GB/download?p=/-/media/Solar/attachment/pdf/eu/datasheet/SUN2000-215KTL-H3.pdf"
  },
  {
    "brand": "Huawei",
    "title": "SUN2000-330KTL-H1 (utility)",
    "power": "330 kW",
    "sub": "Utility trifásico 1500V 6 MPPT",
    "year": "2023",
    "url": "https://solar.huawei.com/download?p=%2F-%2Fmedia%2FSolarV4%2Fsolar-version2%2Fcommon%2Fprofessionals%2Fall-products%2Futility-smart-pv%2Fsmart-pv-controller%2FSUN2000-330KTL-H1%2Fsun2000-330ktl-h1-datasheet-20230515.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Primo GEN24 & Plus 3.0-6.0 kW",
    "power": "3-6 kW",
    "sub": "String/Híbrido monofásico EU",
    "year": "2021",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Primo_GEN24_GEN24Plus_3_to_6_kW_EN.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Primo GEN24 & Plus 3.0-10.0 kW (AUS)",
    "power": "3-10 kW",
    "sub": "String/Híbrido monofásico",
    "year": "2022",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Primo_GEN24_GEN24Plus_3_to_10_kW_EN_AUS.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Primo GEN24 Plus 208-240 (US)",
    "power": "3.8-10 kW",
    "sub": "String/Híbrido monofásico US",
    "year": "2022",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_GEN24_Plus_208_240_EN_US.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Primo GEN24 3-6kW (EMEA)",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico EMEA",
    "year": "2022",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Primo_GEN24_GEN24Plus_3_to_6-kW_Jordan_EN.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower X 12/15/20/25",
    "power": "12-25 kW",
    "sub": "String trifásico comercial",
    "year": "2022",
    "url": "https://files.sma.de/downloads/STPxx-50-BE-en-11.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower 5.0-10.0 Smart Energy",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico residencial",
    "year": "2023",
    "url": "https://files.sma.de/downloads/STPxx-3SE-40-DS-en-20.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower CORE1 33-62kW",
    "power": "33-62 kW",
    "sub": "Standalone comercial",
    "year": "2020",
    "url": "https://files.sma.de/downloads/STPCORE1-DS-en-34.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower CORE2 110kW",
    "power": "110 kW",
    "sub": "Standalone comercial AFCI",
    "year": "2022",
    "url": "https://files.sma.de/downloads/STP110-60-AFCI-DS-en-21.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower X-US 20/25/30",
    "power": "20-30 kW",
    "sub": "String trifásico US",
    "year": "2023",
    "url": "https://files.sma.de/downloads/STPX-US-50-DS-en-22.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower 125",
    "power": "125 kW",
    "sub": "Utility comercial",
    "year": "2023",
    "url": "https://files.sma.de/downloads/STP125-70-DS-en-11.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower CORE1 33/50/62-US",
    "power": "33-62 kW",
    "sub": "Comercial US AFCI",
    "year": "2022",
    "url": "https://files.sma.de/downloads/STP50-US-40-BA-en-10.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower 15-25TL-30",
    "power": "15-25 kW",
    "sub": "String legado trifásico",
    "year": "2020",
    "url": "https://files.sma.de/downloads/STP15-25TL-30-BE-en-18_.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Tripower CORE1 (EN general)",
    "power": "50 kW",
    "sub": "Standalone comercial EN",
    "year": "2021",
    "url": "https://files.sma.de/downloads/STPCORE1-EN_210413_01.pdf"
  },
  {
    "brand": "SAJ",
    "title": "R5 3K-8K-S2 (EU)",
    "power": "3-8 kW",
    "sub": "String monofásico 2 MPPT",
    "year": "2021",
    "url": "https://image3.saj-electric.com/static/file/Catalogue/2021/R5/R5-3-8K-S2--2021-03-31.pdf"
  },
  {
    "brand": "SAJ",
    "title": "R5 3K-8K-S2 (AU)",
    "power": "3-8 kW",
    "sub": "String monofásico Austrália",
    "year": "2023",
    "url": "https://www.saj-electric.com/hubfs/Australia/AU%20Service%20and%20Support/AU%20Download%20Center/AU%20Datasheet/AU%20R5/R5%203K-8K-S2%20Series%20Single%20Phase%20Inverter%20datasheet.pdf"
  },
  {
    "brand": "WEG",
    "title": "SIW linha completa (PT)",
    "power": "1.6-110 kW",
    "sub": "Catálogo string completo BR",
    "year": "2025",
    "url": "https://static.weg.net/medias/downloadcenter/h09/h17/WEG-SIW-inversores-string-50105878-pt.pdf"
  },
  {
    "brand": "WEG",
    "title": "SIW500H (trifásico 50-110 kW)",
    "power": "50-110 kW",
    "sub": "String trifásico comercial BR",
    "year": "2024",
    "url": "https://www.weg.net/catalog/weg/BR/en/Industrial-Automation/Drives/PV-panels-and-Solar-Inverters/String-Inverter-SIW500H/Three-Phase-Inverter-SIW500H/p/MKT_WDC_BRAZIL_INVERTERSTRING_SIW500H"
  },
  {
    "brand": "WEG",
    "title": "SIW300H (monofásico 3-6 kW)",
    "power": "3-6 kW",
    "sub": "String monofásico residencial BR",
    "year": "2024",
    "url": "https://www.weg.net/catalog/weg/BR/en/Industrial-Automation/Drives/PV-panels-and-Solar-Inverters/Single-Phase-String-Inverter-SIW300H/Single-Phase-String-Inverter-SIW300H/p/MKT_WDC_BRAZIL_INVERTER1PHASE_SIW300"
  },
  {
    "brand": "Solis",
    "title": "Solis-1P 9-10K-4G",
    "power": "9-10 kW",
    "sub": "String monofásico 4G",
    "year": "2020",
    "url": "https://www.ginlong.com/uploads/file/Datasheet_Solis-1P(9-10)K-4G.pdf"
  },
  {
    "brand": "Solis",
    "title": "S5-GC 25-60K-US",
    "power": "25-60 kW",
    "sub": "String trifásico comercial US",
    "year": "2023",
    "url": "https://www.ginlong.com/uploads/file/Datasheet_S5-GC(25-60)K-US_USA_V1,0_2023_02.pdf"
  },
  {
    "brand": "Solis",
    "title": "Solis-30K 3P 400V",
    "power": "30 kW",
    "sub": "String trifásico comercial",
    "year": "2020",
    "url": "https://www.ginlong.com/uploads/file/ab094c477b73c906253433b931906a6b.pdf"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 5-10KTL-3PH-G4",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico G4",
    "year": "2023",
    "url": "https://www.sofarsolar.com/upload/file/20230614/1686728831168009063.pdf"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 5-20KTL-3PH storage integrated",
    "power": "5-20 kW",
    "sub": "Híbrido trifásico storage",
    "year": "2023",
    "url": "https://www.sofarsolar.com/upload/file/20230321/1679402266417079029.pdf"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 3000-6000-EP (monofásico)",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico storage",
    "year": "2023",
    "url": "https://www.sofarsolar.com/upload/file/20230210/1676007357326042113.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "HMT 1600-2000-4T-208 NA",
    "power": "1.6-2 kW",
    "sub": "Microinversor trifásico 4-em-1 (208V)",
    "year": "2023",
    "url": "https://www.solar-electric.com/lib/wind-sun/Hoymiles-Datasheet_HMT-160018002000-208.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "HMT 1600-2000-4T (EMEA/APAC)",
    "power": "1.6-2 kW",
    "sub": "Microinversor trifásico 4-em-1",
    "year": "2023",
    "url": "https://www.taloon.com/media/attachments/hoymiles/hmt-1800-2250-6t_datasheet.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 1600-1800-2000-4T (EU)",
    "power": "1.6-2 kW",
    "sub": "Microinversor monofásico 4-em-1",
    "year": "2024",
    "url": "https://www.hoymiles.com/products/hms-1600-1800-2000-eu.html"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 600-1000-2T (balcony)",
    "power": "600-1000 VA",
    "sub": "Microinversor monofásico 2-em-1",
    "year": "2024",
    "url": "https://www.hoymiles.com/products/hms-600-700-800-900-1000-2t.html"
  },
  {
    "brand": "Hoymiles",
    "title": "DTU-Pro-S (gateway)",
    "power": "—",
    "sub": "Data Transfer Unit gateway",
    "year": "2021",
    "url": "https://www.taloon.com/media/attachments/hoymiles/hmt-1800-2250-6t_datasheet.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW S-G2 (3-6kW)",
    "power": "3-6 kW",
    "sub": "String monofásico",
    "year": "2022",
    "url": "https://solplanet.net/wp-content/uploads/2022/09/Datasheet-ASW-3K-6K-S-G2-Series-0722_Global-EN_web.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW S Series (6-10kW)",
    "power": "6-10 kW",
    "sub": "String monofásico médio",
    "year": "2024",
    "url": "https://solplanet.net/wp-content/uploads/2021/11/Datasheet-ASW-6-10K-S-Series-Global-EN_0924_web.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW H-S2 Hybrid (3-6kW)",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico",
    "year": "2022",
    "url": "https://solplanet.net/wp-content/uploads/2022/07/Datasheet-Hybrid-H-S2-Series-0722_AU.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW SH Series (8-10kW)",
    "power": "8-10 kW",
    "sub": "Híbrido monofásico storage",
    "year": "2025",
    "url": "https://solplanet.net/wp-content/uploads/2025/04/ASW008K-SHASW010K-SHEU-web0226.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW LT-G2 Pro (8-20kW)",
    "power": "8-20 kW",
    "sub": "String trifásico comercial",
    "year": "2022",
    "url": "https://solplanet.net/wp-content/uploads/2022/05/Datasheet-ASW-ASW-8-20K-LT-G2-Pro-Series-0322_Global-EN_web.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW S-S Series (1-3kW)",
    "power": "1-3 kW",
    "sub": "String monofásico pequeno",
    "year": "2022",
    "url": "https://solplanet.net/wp-content/uploads/2021/12/Datasheet-ASW-S-S-Series-Global-EN-1122_web.pdf"
  },
  {
    "brand": "Solplanet",
    "title": "ASW 3-5K H-S Series Hybrid",
    "power": "3-5 kW",
    "sub": "Híbrido monofásico G1",
    "year": "2021",
    "url": "https://solplanet.net/wp-content/uploads/2021/12/Datasheet-ASW-3-5K-H-S-Series_1121_EN_web.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "X1-Hybrid G4",
    "power": "3-7.5 kW",
    "sub": "Híbrido monofásico residencial",
    "year": "2025",
    "url": "https://www.solaxpower.com/uploads/file/solax-x1-hybrid-g4-datasheet-en.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "X3-Hybrid G4",
    "power": "5-15 kW",
    "sub": "Híbrido trifásico residencial",
    "year": "2024",
    "url": "https://www.solaxpower.com/uploads/file/solax-x3-hybrid-g4-datasheet-en.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "X3-HYB G4 PRO",
    "power": "4-8 kW",
    "sub": "Híbrido trifásico PRO",
    "year": "2024",
    "url": "https://www.solaxpower.com/uploads/file/solax-x3-hyb-g4-pro-datasheet-en.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "X3-IES All-in-one",
    "power": "4-15 kW",
    "sub": "Sistema residencial integrado",
    "year": "2024",
    "url": "https://www.solaxpower.com/uploads/file/solax-x3-ies-datasheet-en.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "Downloads center (catálogo oficial)",
    "power": "—",
    "sub": "Acesso a todos datasheets",
    "year": "2025",
    "url": "https://www.solaxpower.com/downloads.html"
  },
  {
    "brand": "Fox ESS",
    "title": "F Series single-phase 3-6kW",
    "power": "3-6 kW",
    "sub": "String monofásico",
    "year": "2025",
    "url": "https://www.fox-ess.com/Public/Uploads/uploadfile/files/Download/EN-F(3.0)-Datasheet-V1.1-20250507.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "F Series (versão 2022)",
    "power": "3-6 kW",
    "sub": "String monofásico original",
    "year": "2022",
    "url": "https://www.fox-ess.com/wp-content/uploads/2022/05/F-Series-Datasheet-3.22.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "T Series G3 3-25kW",
    "power": "3-25 kW",
    "sub": "String trifásico residencial/C&I",
    "year": "2022",
    "url": "https://pl.fox-ess.com/wp-content/uploads/2022/01/T-Series%EF%BC%88G3%EF%BC%89-Datasheet.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "H1 & AC1 G2 Hybrid 3-6kW",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico G2",
    "year": "2024",
    "url": "https://www.fox-ess.com/download/upfiles/EN-H1-G2-Datasheet-V1.5-3.28.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "KH & KA Series",
    "power": "7-13 kW",
    "sub": "Híbrido trifásico comercial",
    "year": "2024",
    "url": "https://www.fox-ess.com/wp-content/uploads/2024/12/EN-KH-KA-Datasheet-V2.0-20241127.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "US Series split-phase 3.8-11.4kW",
    "power": "3.8-11.4 kW",
    "sub": "Híbrido split-phase US",
    "year": "2025",
    "url": "https://us.fox-ess.com/wp-content/uploads/2025/08/US-H1-AC1-Datasheet-V4.2-20251210.pdf"
  },
  {
    "brand": "Fox ESS",
    "title": "K Series residential (2022)",
    "power": "—",
    "sub": "Híbrido residencial inicial",
    "year": "2022",
    "url": "https://www.fox-ess.com/wp-content/uploads/2022/07/K-Series-Datasheet-3.22.pdf"
  },
  {
    "brand": "Livoltek",
    "title": "Hyper Series 3-5kW hybrid",
    "power": "3-5 kW",
    "sub": "Híbrido monofásico",
    "year": "2023",
    "url": "https://www.bluenergy.ch/images/livoltek.pdf"
  },
  {
    "brand": "Livoltek",
    "title": "GT3-30-60K trifásico",
    "power": "30-60 kW",
    "sub": "String trifásico comercial",
    "year": "2025",
    "url": "https://www.livoltek.com/product/grid-tied-inverter-three-phase-gt3-30-60kw/"
  },
  {
    "brand": "Livoltek",
    "title": "Download Center (catálogo)",
    "power": "—",
    "sub": "Acesso a todos os PDFs",
    "year": "2025",
    "url": "https://www.livoltek.com/download-center/"
  },
  {
    "brand": "Livoltek",
    "title": "Página de produtos (catálogo)",
    "power": "—",
    "sub": "Todas as séries GT/HYD",
    "year": "2025",
    "url": "https://www.livoltek.com/products/"
  },
  {
    "brand": "SolarEdge",
    "title": "HD-Wave SE2200H-SE6000H (EU)",
    "power": "2.2-6 kW",
    "sub": "String monofásico com optimizer",
    "year": "2018",
    "url": "https://www.solaredge.com/sites/default/files/se-single-phase-HD-wave-inverter-datasheet.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "HD-Wave SetApp 2.2-6kW (EU)",
    "power": "2.2-6 kW",
    "sub": "String monofásico SetApp",
    "year": "2022",
    "url": "https://www.solaredge.com/sites/default/files/se-single-phase-HD-wave-inverter-setapp-datasheet.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "HD-Wave SE3000H-SE11400H (US)",
    "power": "3-11.4 kW",
    "sub": "String monofásico US",
    "year": "2019",
    "url": "https://www.solaredge.com/sites/default/files/se-hd-wave-single-phase-inverter-datasheet-na.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "Home Wave single phase (EU)",
    "power": "8-10 kW",
    "sub": "String monofásico Home",
    "year": "2022",
    "url": "https://knowledge-center.solaredge.com/sites/kc/files/se-home-wave-inverter-single-phase-setapp-datasheet-eng.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "Home Wave NAM",
    "power": "—",
    "sub": "String monofásico US Home",
    "year": "2024",
    "url": "https://knowledge-center.solaredge.com/sites/kc/files/se-solaredge-home-wave-inverter-single-phase-with-setapp-datasheet-nam.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "StorEdge HD-Wave hybrid",
    "power": "2.2-6 kW",
    "sub": "Híbrido on-grid storage",
    "year": "2022",
    "url": "https://www.solaredge.com/sites/default/files/se-storedge-single-phase-with-hd-wave-datasheet.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "HD-Wave (AUS)",
    "power": "2.5-10 kW",
    "sub": "String monofásico Austrália",
    "year": "2020",
    "url": "https://www.solaredge.com/sites/default/files/se-single-phase-HD-wave-inverter-datasheet-aus.pdf"
  },
  {
    "brand": "SolarEdge",
    "title": "StorEdge AC Coupled (EU)",
    "power": "—",
    "sub": "Híbrido AC coupled",
    "year": "2022",
    "url": "https://knowledge-center.solaredge.com/sites/kc/files/storedge_ac_coupling_HD_wave_inverter_SetApp_datasheet.pdf"
  },
  {
    "brand": "Enphase",
    "title": "IQ8 Series (família US)",
    "power": "240-384 VA",
    "sub": "Microinversor residencial",
    "year": "2022",
    "url": "https://enphase.com/sites/default/files/2021-10/IQ8-Series-DS-US.pdf"
  },
  {
    "brand": "Enphase",
    "title": "IQ8 and IQ8+ datasheet",
    "power": "240-290 VA",
    "sub": "Microinversor básico",
    "year": "2024",
    "url": "https://enphase.com/sites/default/files/2021-10/IQ8SP-DS-0002-01-EN-US-2021-10-19.pdf"
  },
  {
    "brand": "Enphase",
    "title": "IQ8 Commercial (3-phase)",
    "power": "—",
    "sub": "Microinversor comercial 3P",
    "year": "2025",
    "url": "https://enphase.com/download/iq8-commercial-microinverters-data-sheet"
  },
  {
    "brand": "Enphase",
    "title": "IQ8MC microinverter",
    "power": "315-330 VA",
    "sub": "Microinversor 60-cell optimized",
    "year": "2023",
    "url": "https://krannich-solar.com/fileadmin/user_upload/US/Datasheets/Inverters/Enphase/dsh-00049-en-us-iq8mc.pdf"
  },
  {
    "brand": "Enphase",
    "title": "IQ8M & IQ8A datasheet (LAC)",
    "power": "—",
    "sub": "Microinversor alta potência",
    "year": "2025",
    "url": "https://enphase.com/en-lac/download/iq8-series-microinverters-data-sheet"
  },
  {
    "brand": "Kostal",
    "title": "PLENTICORE plus 3-10kW",
    "power": "3-10 kW",
    "sub": "Híbrido trifásico residencial",
    "year": "2022",
    "url": "https://www.kostal-solar-electric.com/fileadmin/downloadcenter/kse/DB/PLENTICORE-G1/DB_PLENTICORE-plus_en.pdf"
  },
  {
    "brand": "Kostal",
    "title": "PLENTICORE plus G2 (3-10kW)",
    "power": "3-10 kW",
    "sub": "Híbrido G2 (15A/MPPT)",
    "year": "2025",
    "url": "https://www.kostal-solar-electric.com/en/products/hybrid-inverter/plenticore-plus/"
  },
  {
    "brand": "Kostal",
    "title": "PIKO 10-20",
    "power": "10-20 kW",
    "sub": "String trifásico comercial",
    "year": "2020",
    "url": "https://www.scribd.com/document/462127793/DB-PIKO-10-20-en-pdf"
  },
  {
    "brand": "Kostal",
    "title": "PLENTICORE G3 (catálogo)",
    "power": "—",
    "sub": "Nova geração hybrid",
    "year": "2025",
    "url": "https://www.kostal-solar-electric.com/en/download/"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 100 NX3",
    "power": "100 kW",
    "sub": "Comercial trifásico 1500V",
    "year": "2024",
    "url": "https://kaco-newenergy.com/index.php?eID=dumpFile&t=f&f=11152&token=3071887a5b0486d8230c57e31e56d81b633039cf"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 50.0 NX3",
    "power": "50 kW",
    "sub": "Comercial trifásico",
    "year": "2024",
    "url": "https://kaco-newenergy.com/index.php?eID=dumpFile&t=f&f=11092&token=3f6ec07bbdb51e8f763b776ec7040965c04df98b"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet NX3 Family 3-20kW",
    "power": "3-20 kW",
    "sub": "Residencial/comercial",
    "year": "2023",
    "url": "https://kaco-newenergy.com/products/blueplanet-3.0-10.0-TL3/"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 50.0 TL3",
    "power": "50 kW",
    "sub": "Comercial string TL3",
    "year": "2021",
    "url": "https://kaco-newenergy.com/index.php?eID=dumpFile&t=f&f=10186&token=3d6ef44b243767c518740a06df28edd14ea53994"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 60.0 TL3",
    "power": "60 kW",
    "sub": "Comercial string TL3 +",
    "year": "2022",
    "url": "https://kaco-newenergy.com/products/blueplanet-600-tl3"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 87-125 TL3",
    "power": "87-125 kW",
    "sub": "Comercial string utility",
    "year": "2022",
    "url": "https://kaco-newenergy.com/products/blueplanet-870-tl3-125-tl3"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet 29.0 TL3 LV",
    "power": "29 kW",
    "sub": "Comercial LV 208/220/240V",
    "year": "2022",
    "url": "https://kaco-newenergy.com/products/blueplanet-290-tl3-lv?uid=2063&cHash=79d81e7e3454091aebdd1922adecdaeb"
  },
  {
    "brand": "Kaco",
    "title": "blueplanet hybrid 10.0 TL3",
    "power": "10 kW",
    "sub": "Híbrido trifásico residencial",
    "year": "2023",
    "url": "https://kaco-newenergy.com/products/blueplanet-hybrid-100-tl3"
  },
  {
    "brand": "Delta",
    "title": "Catálogo Solar 2024 (geral)",
    "power": "—",
    "sub": "Catálogo RPI/M-Flex/H-Flex completo",
    "year": "2024",
    "url": "https://pdf.archiexpo.com/pdf/delta-energy-systems-88145.html"
  },
  {
    "brand": "Delta",
    "title": "RPI M20A",
    "power": "20 kW",
    "sub": "String trifásico comercial",
    "year": "2020",
    "url": "https://pdf.archiexpo.com/pdf/delta-energy-systems/rpi-m20a/88145-308412.html"
  },
  {
    "brand": "Delta",
    "title": "RPI M6A/M8A (manual completo)",
    "power": "6-8 kW",
    "sub": "String trifásico residencial",
    "year": "2019",
    "url": "https://www.europe-solarstore.com/download/delta/Delta-RPI-M6A-M10A-installation-and-operation-manual.pdf"
  },
  {
    "brand": "Delta",
    "title": "RPI M8/M10/M12/M15A/M20A (manual)",
    "power": "8-20 kW",
    "sub": "Family manual",
    "year": "2020",
    "url": "https://filecenter.deltaww.com/Products/Download/05/0501/5012326608_user_manual_en.pdf"
  },
  {
    "brand": "Chint Power",
    "title": "CPS America (catálogo)",
    "power": "—",
    "sub": "String trifásico comercial/utility",
    "year": "2025",
    "url": "https://www.chintpowersystems.com/na/products"
  },
  {
    "brand": "Intelbras",
    "title": "EGI-80K/100K string solar",
    "power": "80-100 kW",
    "sub": "String trifásico comercial BR",
    "year": "2024",
    "url": "https://www.intelbras.com/pt-br/energia-solar"
  },
  {
    "brand": "Renovigi",
    "title": "Renovigi página oficial",
    "power": "—",
    "sub": "Inversores distribuídos BR",
    "year": "2025",
    "url": "https://www.renovigi.com.br/"
  },
  {
    "brand": "Must Energy",
    "title": "Must Solar página oficial",
    "power": "—",
    "sub": "Off-grid/híbridos",
    "year": "2025",
    "url": "https://www.mustsolar.com/"
  },
  {
    "brand": "Veichi",
    "title": "SIHxxxKTL-3PH",
    "power": "—",
    "sub": "String trifásico comercial",
    "year": "2024",
    "url": "https://www.veichi.com/solar-inverter/on-grid-solar-inverter.html"
  },
  {
    "brand": "Ingeteam",
    "title": "Ingecon Sun (utility)",
    "power": "—",
    "sub": "String 3P e central utility",
    "year": "2025",
    "url": "https://www.ingeteam.com/ingeconsun/en/"
  },
  {
    "brand": "Refusol / Advanced Energy",
    "title": "Página Refusol (legado)",
    "power": "—",
    "sub": "Descontinuada pós-aquisição AE",
    "year": "—",
    "url": "https://solar.advanced-energy.com/"
  },
  {
    "brand": "Turbo Energy",
    "title": "TESLINK gestão energética BR",
    "power": "—",
    "sub": "Gestão híbrida BR",
    "year": "2025",
    "url": "https://www.turbo-e.com/"
  },
  {
    "brand": "Zeversolar (Aiswei)",
    "title": "Zeversolar → agora Solplanet/Aiswei",
    "power": "—",
    "sub": "Marca descontinuada 2023",
    "year": "—",
    "url": "https://www.zeversolar.com/en/"
  },
  {
    "brand": "Fronius",
    "title": "Symo (3-20 kW família EN)",
    "power": "3-20 kW",
    "sub": "String trifásico residencial/C&I legado",
    "year": "2020",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Symo_EN.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Symo 10.0-3-M-OS (Oversize)",
    "power": "10 kW",
    "sub": "String trifásico oversize design",
    "year": "2021",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Symo_Oversize_EN.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Symo Advanced (EN CA)",
    "power": "10-24 kW",
    "sub": "String trifásico comercial AFCI",
    "year": "2022",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Symo_Advanced_EN_CA.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Symo UL (EN CA)",
    "power": "12-24 kW",
    "sub": "String trifásico UL EUA/Canadá",
    "year": "2021",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Froius_Symo_UL_EN_CA.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Symo GEN24 & Plus 3-10kW (UK)",
    "power": "3-10 kW",
    "sub": "Híbrido trifásico GEN24",
    "year": "2023",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Symo_GEN24_GEN24Plus_3_to_10_kW_EN_UK.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Tauro 50-100kW (D direct)",
    "power": "50-100 kW",
    "sub": "String trifásico C&I outdoor direto",
    "year": "2023",
    "url": "https://www.fronius.com/en/~/downloads/Solar%20Energy/Datasheets/SE_DS_Fronius_Tauro_D_EN.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Tauro Precombined 50/99/100kW",
    "power": "50-100 kW",
    "sub": "String trifásico pre-combined",
    "year": "2023",
    "url": "https://www.europe-solarstore.com/download/fronius/Fronius_Tauro-50-3-P_TauroECO-100-3-P_Datasheet.pdf"
  },
  {
    "brand": "Fronius",
    "title": "Tauro 50-100kW Datasheet geral",
    "power": "50-100 kW",
    "sub": "Família completa Tauro",
    "year": "2023",
    "url": "https://www.origin.com.au/content/dam/origin/residential/docs/solar/Datasheet-Fronius-Tauro-50-100kW-x-3-D.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Boy 3.0/3.6/4.0/5.0/6.0 (SB30-60)",
    "power": "3-6 kW",
    "sub": "String monofásico residencial",
    "year": "2023",
    "url": "https://d3yvy865gav9f.cloudfront.net/asset/851725204959/document_to0jtt5ut514t5ojgvnd8u1u1d/SB30-60-DS-en-61.pdf"
  },
  {
    "brand": "SMA",
    "title": "Sunny Boy 3.0-7.7-US",
    "power": "3-7.7 kW",
    "sub": "String monofásico US",
    "year": "2021",
    "url": "https://www.enfsolar.com/pv/inverter-datasheet/8926"
  },
  {
    "brand": "SMA",
    "title": "Sunny Boy Smart Energy (SBSE) EU",
    "power": "3.6-9.9 kW",
    "sub": "Híbrido monofásico residencial 3/4 MPPT",
    "year": "2024",
    "url": "https://www.sma.de/en/products/hybrid-inverters/sunny-boy-smart-energy"
  },
  {
    "brand": "SMA",
    "title": "Sunny Boy Smart Energy US 3.8-11.4",
    "power": "3.8-11.4 kW",
    "sub": "Híbrido split-phase US Energy System Home",
    "year": "2024",
    "url": "https://krannich-solar.com/fileadmin/user_upload/US/Datasheets/Inverters/SMA/SMA_SunnyboySBSE_Data_Sheet__1_.pdf"
  },
  {
    "brand": "Solax Power",
    "title": "X1-Boost (retrofit)",
    "power": "3-6 kW",
    "sub": "String monofásico retrofit",
    "year": "2023",
    "url": "https://www.solaxpower.com/products/string-inverter-x1-boost/"
  },
  {
    "brand": "Solax Power",
    "title": "X3-MIC G2 (3-25 kW string 3P)",
    "power": "3-25 kW",
    "sub": "String trifásico residencial G2",
    "year": "2023",
    "url": "https://www.solaxpower.com/products/grid-tied-solar-inverter-x3-mic-g2/"
  },
  {
    "brand": "Solax Power",
    "title": "X3-ULTRA (3-phase high-power hybrid)",
    "power": "15-30 kW",
    "sub": "Híbrido trifásico alta pot.",
    "year": "2024",
    "url": "https://www.solaxpower.com/products/hybrid-inverter-x3-ultra/"
  },
  {
    "brand": "Solax Power",
    "title": "X1-FIT G4 (retrofit storage)",
    "power": "3-8 kW",
    "sub": "AC-coupled storage monofásico",
    "year": "2024",
    "url": "https://www.solaxpower.com/products/x1-fit-g4/"
  },
  {
    "brand": "Solax Power",
    "title": "X1-AELIO G2 (residencial monofásico)",
    "power": "—",
    "sub": "Híbrido monofásico EU 2024",
    "year": "2024",
    "url": "https://www.solaxpower.com/products/x1-aelio-g2/"
  },
  {
    "brand": "Solax Power",
    "title": "X3-AELIO (C&I 3-phase)",
    "power": "—",
    "sub": "Energy storage comercial C&I",
    "year": "2024",
    "url": "https://www.solaxpower.com/products/x3-aelio/"
  },
  {
    "brand": "Kostal",
    "title": "PLENTICORE G3 (residencial hybrid)",
    "power": "—",
    "sub": "Híbrido trifásico 3ª geração",
    "year": "2025",
    "url": "https://www.kostal-solar-electric.com/en/products/hybrid-inverter/plenticore-g3/"
  },
  {
    "brand": "Kostal",
    "title": "PIKO MP plus (residencial 1P)",
    "power": "1.5-5 kW",
    "sub": "String monofásico residencial pequeno",
    "year": "2023",
    "url": "https://www.kostal-solar-electric.com/en/products/solar-inverter/piko-mp-plus/"
  },
  {
    "brand": "Kostal",
    "title": "PIKO CI G2 (comercial trifásico)",
    "power": "30-100 kW",
    "sub": "String trifásico comercial G2",
    "year": "2024",
    "url": "https://www.kostal-solar-electric.com/en/products/solar-inverter/piko-ci-g2/"
  },
  {
    "brand": "Kostal",
    "title": "PLENTICORE BI (battery inverter 48V)",
    "power": "—",
    "sub": "Battery inverter 48V LV",
    "year": "2023",
    "url": "https://www.kostal-solar-electric.com/en/products/battery-inverter/plenticore-bi/"
  },
  {
    "brand": "Solis",
    "title": "S5-GR1P 2.5-6K (monofásico)",
    "power": "2.5-6 kW",
    "sub": "String monofásico residencial S5",
    "year": "2021",
    "url": "https://www.ginlong.com/product_en/solis_S5_GR1P.html"
  },
  {
    "brand": "Solis",
    "title": "S5-GR3P 4-10K (trifásico residencial)",
    "power": "4-10 kW",
    "sub": "String trifásico residencial S5",
    "year": "2021",
    "url": "https://www.ginlong.com/product_en/solis_S5_GR3P.html"
  },
  {
    "brand": "Solis",
    "title": "S6-GR1P (monofásico nova gen)",
    "power": "—",
    "sub": "String monofásico S6 geração atual",
    "year": "2024",
    "url": "https://www.solisinverters.com/global/product/s6-gr1p.html"
  },
  {
    "brand": "Solis",
    "title": "S6-GR3P (trifásico nova gen)",
    "power": "—",
    "sub": "String trifásico S6",
    "year": "2024",
    "url": "https://www.solisinverters.com/global/product/s6-gr3p.html"
  },
  {
    "brand": "Solis",
    "title": "S6-GC25-100K (C&I)",
    "power": "25-100 kW",
    "sub": "String trifásico comercial S6",
    "year": "2024",
    "url": "https://www.solisinverters.com/global/product/s6-gc.html"
  },
  {
    "brand": "Solis",
    "title": "S6-EH1P (hybrid monofásico)",
    "power": "3-10 kW",
    "sub": "Híbrido monofásico S6",
    "year": "2024",
    "url": "https://www.solisinverters.com/global/product/s6-eh1p.html"
  },
  {
    "brand": "Solis",
    "title": "S6-EH3P (hybrid trifásico)",
    "power": "5-10 kW",
    "sub": "Híbrido trifásico S6 Pro",
    "year": "2024",
    "url": "https://www.solisinverters.com/global/product/s6-eh3p.html"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 3000-6000-ES (1P hybrid)",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico LV bateria",
    "year": "2023",
    "url": "https://www.sofarsolar.com/products/hyd-3000-6000-es/"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 5-20KTL-3PH (storage integrado)",
    "power": "5-20 kW",
    "sub": "Híbrido trifásico storage",
    "year": "2023",
    "url": "https://www.sofarsolar.com/products/hyd-5-20ktl-3ph/"
  },
  {
    "brand": "Sofar Solar",
    "title": "SofarPowerAll ESI (residencial all-in-one)",
    "power": "—",
    "sub": "Sistema all-in-one 2024",
    "year": "2024",
    "url": "https://www.sofarsolar.com/products/sofar-power-all-esi/"
  },
  {
    "brand": "Sofar Solar",
    "title": "HYD 3-6K-EP (EP series)",
    "power": "3-6 kW",
    "sub": "Híbrido monofásico EP",
    "year": "2023",
    "url": "https://www.sofarsolar.com/products/hyd-3-6k-ep/"
  },
  {
    "brand": "Sofar Solar",
    "title": "SOFAR 3300-12000TL-G3 (string 3P)",
    "power": "3.3-12 kW",
    "sub": "String trifásico residencial G3",
    "year": "2022",
    "url": "https://www.sofarsolar.com/products/sofar-3300-12000tl-g3/"
  },
  {
    "brand": "Sofar Solar",
    "title": "SOFAR 25-40KTL-G2 (comercial)",
    "power": "25-40 kW",
    "sub": "String trifásico comercial G2",
    "year": "2022",
    "url": "https://www.sofarsolar.com/products/sofar-25-40ktlx-g2/"
  },
  {
    "brand": "SAJ",
    "title": "H2S 5K-12K-3P Hybrid",
    "power": "5-12 kW",
    "sub": "Híbrido trifásico H2S",
    "year": "2024",
    "url": "https://www.saj-electric.com/product/h2s-5k-12k-3p/"
  },
  {
    "brand": "SAJ",
    "title": "R6 3K-15K-S4 (monofásico/trifásico)",
    "power": "3-15 kW",
    "sub": "String R6 dual-output",
    "year": "2024",
    "url": "https://www.saj-electric.com/product/r6-3k-15k-s4/"
  },
  {
    "brand": "SAJ",
    "title": "Suntrio Plus 25K-60K (trifásico C&I)",
    "power": "25-60 kW",
    "sub": "String trifásico comercial",
    "year": "2023",
    "url": "https://www.saj-electric.com/product/suntrio-plus-25k-60k/"
  },
  {
    "brand": "PHB Solar",
    "title": "PHB1500 / PHB3000 (monofásico BR)",
    "power": "1.5-3 kW",
    "sub": "String monofásico residencial BR",
    "year": "2023",
    "url": "https://www.phb.com.br/solar/"
  },
  {
    "brand": "PHB Solar",
    "title": "PHB5K-SS (monofásico 5kW)",
    "power": "5 kW",
    "sub": "String monofásico residencial BR",
    "year": "2024",
    "url": "https://www.phb.com.br/solar/"
  },
  {
    "brand": "Elgin Solar",
    "title": "Catálogo inversores Elgin (monofásico)",
    "power": "—",
    "sub": "Rebrand residencial BR",
    "year": "2024",
    "url": "https://www.elgin.com.br/energia-solar/"
  },
  {
    "brand": "Elgin Solar",
    "title": "Elgin GT 50kW trifásico",
    "power": "50 kW",
    "sub": "String trifásico comercial BR",
    "year": "2024",
    "url": "https://www.elgin.com.br/energia-solar/inversores/"
  },
  {
    "brand": "Upnergy",
    "title": "Upnergy residencial monofásico BR",
    "power": "—",
    "sub": "Rebrand residencial BR",
    "year": "2024",
    "url": "https://upnergy.com.br/"
  },
  {
    "brand": "Livoltek Brasil",
    "title": "Portal Livoltek BR oficial",
    "power": "—",
    "sub": "Distribuição Livoltek BR",
    "year": "2025",
    "url": "https://livoltek.com.br/produtos/"
  },
  {
    "brand": "Aiswei",
    "title": "Aiswei catálogo (marca-irmã Solplanet)",
    "power": "—",
    "sub": "Mesma linha Solplanet Ásia",
    "year": "2024",
    "url": "https://www.aiswei.com/products/"
  },
  {
    "brand": "Ginlong Technologies",
    "title": "Solis catálogo página oficial",
    "power": "—",
    "sub": "Download Center global",
    "year": "2025",
    "url": "https://www.solisinverters.com/global/downloads.html"
  },
  {
    "brand": "APsystems",
    "title": "DS3 / DS3-L (microinversor 2-em-1)",
    "power": "0.88-1.2 kW",
    "sub": "Microinversor trifásico/monofásico",
    "year": "2023",
    "url": "https://emea.apsystems.com/products/ds3-series/"
  },
  {
    "brand": "APsystems",
    "title": "QS1 (microinversor quad)",
    "power": "1 kW",
    "sub": "Microinversor quad-módulo",
    "year": "2022",
    "url": "https://emea.apsystems.com/qs1/"
  },
  {
    "brand": "Chint Power",
    "title": "CPS SCA30KTL-DO/US-480 comercial US",
    "power": "30 kW",
    "sub": "String trifásico comercial EUA",
    "year": "2022",
    "url": "https://www.chintpowersystems.com/na/product/cps-sca30ktl-do-us-480/"
  },
  {
    "brand": "Chint Power",
    "title": "CPS SCA50-80KTL (comercial global)",
    "power": "50-80 kW",
    "sub": "String trifásico comercial global",
    "year": "2023",
    "url": "https://www.chintpowersystems.com/products/"
  },
  {
    "brand": "Enphase",
    "title": "IQ7 Microinverter (base)",
    "power": "240 VA",
    "sub": "Microinversor residencial IQ7 base",
    "year": "2018",
    "url": "https://enphase.com/download/iq7-and-iq7plus-microinverters-data-sheet"
  },
  {
    "brand": "Enphase",
    "title": "IQ7+ Microinverter (MC4)",
    "power": "290 VA",
    "sub": "Microinversor high-power IQ7+",
    "year": "2019",
    "url": "https://enphase.com/store/microinverters/iq7-series/iq7plus-microinverter"
  },
  {
    "brand": "Enphase",
    "title": "IQ7A Microinverter (366 VA)",
    "power": "366 VA",
    "sub": "Microinversor high-output 96-cell",
    "year": "2021",
    "url": "https://enphase.com/sites/default/files/2021-04/IQ7A-DS-EN-US.pdf"
  },
  {
    "brand": "Enphase",
    "title": "IQ7A Microinverter (2024 update)",
    "power": "366 VA",
    "sub": "Microinversor IQ7A datasheet novo",
    "year": "2024",
    "url": "https://enphase.com/download/iq7a-microinverter-data-sheet"
  },
  {
    "brand": "Enphase",
    "title": "IQ7X Microinverter (315 VA)",
    "power": "315 VA",
    "sub": "Microinversor 96-cell IQ7X",
    "year": "2020",
    "url": "https://enphase.com/download/iq7x-microinverter-data-sheet"
  },
  {
    "brand": "Enphase",
    "title": "IQ7 Series Installer Page",
    "power": "—",
    "sub": "Página técnica família IQ7",
    "year": "2024",
    "url": "https://enphase.com/installers/microinverters/iq7"
  },
  {
    "brand": "Enphase",
    "title": "IQ7+ / IQ7A (INT EU/APAC)",
    "power": "240-366 VA",
    "sub": "Família IQ7 internacional",
    "year": "2022",
    "url": "https://enphase.com/en-gb/download/iq7-iq7-iq7x-iq7a-microinverter-data-sheet"
  },
  {
    "brand": "Enphase",
    "title": "IQ7+ IQ7A India",
    "power": "240-366 VA",
    "sub": "Família IQ7 Índia",
    "year": "2021",
    "url": "https://enphase.com/en-in/download/iq7a-iq7-microinverter-data-sheet"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 300-500-1T-NA (1-em-1 NA)",
    "power": "300-500 VA",
    "sub": "Microinversor 1-em-1 América do Norte",
    "year": "2024",
    "url": "https://www.solar-electric.com/lib/wind-sun/Hoymiles_Datasheet_HMS-350-400-450-500-1T-NA.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 300-500-1T EU",
    "power": "300-500 VA",
    "sub": "Microinversor 1-em-1 EU",
    "year": "2024",
    "url": "https://www.hoymiles.com/resources/download/?sf_paged=3"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 600-1000-2T EU (balcony)",
    "power": "600-1000 VA",
    "sub": "Microinversor 2-em-1 balcão EU",
    "year": "2024",
    "url": "https://www.hoymiles.com/products/hms-600-700-800-900-1000-2t.html"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 600W-1000W-2T Wi-Fi integrado",
    "power": "600-1000 VA",
    "sub": "Microinversor balcão Wi-Fi integrado",
    "year": "2024",
    "url": "https://www.hoymiles.com/products/hms-600w-700w-800w-900w-1000w-2t-wi-fi-integrated-eu.html"
  },
  {
    "brand": "Hoymiles",
    "title": "HMS 1600-2000-4T EU (quad)",
    "power": "1600-2000 VA",
    "sub": "Microinversor 4-em-1 EU",
    "year": "2024",
    "url": "https://www.hoymiles.com/products/hms-1600-1800-2000-eu.html"
  },
  {
    "brand": "Hoymiles",
    "title": "HMT 1600-2000-4T-208 NA trifásico",
    "power": "1600-2000 VA",
    "sub": "Microinversor trifásico 4-em-1 208V",
    "year": "2023",
    "url": "https://www.solar-electric.com/lib/wind-sun/Hoymiles-Datasheet_HMT-160018002000-208.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "HMT 1600-2000-4T EMEA/APAC",
    "power": "1600-2000 VA",
    "sub": "Microinversor trifásico 4-em-1",
    "year": "2023",
    "url": "https://www.taloon.com/media/attachments/hoymiles/hmt-1800-2250-6t_datasheet.pdf"
  },
  {
    "brand": "Hoymiles",
    "title": "Download Center (catálogo oficial)",
    "power": "—",
    "sub": "Todos datasheets/manuais oficiais",
    "year": "2025",
    "url": "https://www.hoymiles.com/resources/download/"
  },
  {
    "brand": "APsystems",
    "title": "DS3 / DS3-L (microinversor 2-em-1)",
    "power": "0.88-1.2 kW",
    "sub": "Microinversor dual residencial",
    "year": "2023",
    "url": "https://emea.apsystems.com/products/ds3-series/"
  },
  {
    "brand": "APsystems",
    "title": "QS1 / QS1A (microinversor 4-em-1)",
    "power": "1 kW",
    "sub": "Microinversor quad residencial",
    "year": "2022",
    "url": "https://emea.apsystems.com/qs1/"
  },
  {
    "brand": "APsystems",
    "title": "DS3-H (high-power 2-em-1)",
    "power": "1.2 kW",
    "sub": "Microinversor dual high-power",
    "year": "2024",
    "url": "https://emea.apsystems.com/products/"
  },
  {
    "brand": "APsystems",
    "title": "YC600 / YC1000 (legacy)",
    "power": "0.6-1 kW",
    "sub": "Microinversor legacy 2/4-em-1",
    "year": "2020",
    "url": "https://emea.apsystems.com/products/"
  },
  {
    "brand": "NEP",
    "title": "BDM-600 microinversor (single)",
    "power": "600 VA",
    "sub": "Microinversor 1-em-1 balcão",
    "year": "2023",
    "url": "https://www.northernep.com/en/product_list/bdm.html"
  },
  {
    "brand": "NEP",
    "title": "BDM-800 microinversor (single)",
    "power": "800 VA",
    "sub": "Microinversor balcão alta pot.",
    "year": "2024",
    "url": "https://www.northernep.com/en/product_list/bdm.html"
  },
  {
    "brand": "NEP",
    "title": "BDM-1000 microinversor (single)",
    "power": "1000 VA",
    "sub": "Microinversor balcão máxima pot.",
    "year": "2024",
    "url": "https://www.northernep.com/en/product_list/bdm.html"
  },
  {
    "brand": "Deye",
    "title": "SUN-M Series Micro (80-2250G3)",
    "power": "0.8-2.25 kW",
    "sub": "Microinversor 1-em-1 até 4-em-1 EU",
    "year": "2024",
    "url": "https://www.deyeinverter.com/product/microinverter/sun80-130g3-eu-q0.html"
  },
  {
    "brand": "Deye",
    "title": "SUN-M 1600-2250G3 4-em-1",
    "power": "1.6-2.25 kW",
    "sub": "Microinversor 4-em-1 balcão EU",
    "year": "2024",
    "url": "https://www.deyeinverter.com/product/microinverter/"
  }
];

var SOLARPRO_MODULOS = [
  {
    "brand": "Longi",
    "title": "Hi-MO 5 LR5-72HPH 535-555M",
    "power": "535-555 Wp",
    "sub": "Mono PERC half-cell 144 cél. 182mm",
    "year": "2021",
    "url": "https://www.longi.com/en/products/modules/hi-mo-5/"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 5 LR5-72HBD 530-550M bifacial",
    "power": "530-550 Wp",
    "sub": "Mono PERC bifacial dual-glass",
    "year": "2021",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/42290"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 5 LR5-54HIH 400-420M",
    "power": "400-420 Wp",
    "sub": "Mono PERC half-cell 108 cél.",
    "year": "2021",
    "url": "https://www.scribd.com/document/652979722/longi-datasheet-himo5-lr5-54hih"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 5m LR5-66HPH 485-510M",
    "power": "485-510 Wp",
    "sub": "Mono PERC half-cell 132 cél.",
    "year": "2021",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/44131"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 6 Explorer LR5-54HTH 415-430M HPBC",
    "power": "415-430 Wp",
    "sub": "Mono HPBC 108 cél.",
    "year": "2023",
    "url": "https://www.solarmarkt.ch/herstimg/10-Solarmodule/Longi_Solar/DB_EN_LONGi_HiMO6_E_LR5-54HTH-420-440M.pdf"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 6 Scientist LR5-54HTH",
    "power": "—",
    "sub": "Mono HPBC Pro (25.3% cel.)",
    "year": "2024",
    "url": "https://www.longi.com/en/products/modules/hi-mo-6-scientist/"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 6 série 72HTH (comercial)",
    "power": "—",
    "sub": "Mono HPBC 144 cél.",
    "year": "2023",
    "url": "https://www.longi.com/en/products/modules/hi-mo-6/"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X6 Explorer LR5-54HTH 420-440M",
    "power": "420-440 Wp",
    "sub": "Mono HPBC 108 cél.",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56977"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X6 Explorer LR5-54HTB 415-435M",
    "power": "415-435 Wp",
    "sub": "Mono HPBC black frame",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56976"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X6 Scientist LR5-54HTH 445-455M HPBC+",
    "power": "445-455 Wp",
    "sub": "Mono HPBC+ Scientist 108 cél.",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56983"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X6 Max Explorer LR7-54HTH 455-465M",
    "power": "455-465 Wp",
    "sub": "Mono HPBC nova geração",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/64985"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 7 LR5-72HGD 560-590M bifacial",
    "power": "560-590 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/60553"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 7 LR7-72HGD 585-620M bifacial",
    "power": "585-620 Wp",
    "sub": "N-TOPCon bifacial 144 cél. (versão 2)",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/61996"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 7 LR7-72HGD 595-625M",
    "power": "595-625 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/64981"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 7 LR7-72HTH 605-615M Explorer",
    "power": "605-615 Wp",
    "sub": "N-TOPCon monofacial Explorer",
    "year": "2024",
    "url": "https://static.longi.com/LR_7_72_HTH_605_615_M_30_30_and_15_Frame_Explorer_20240511_V2_d0c9b7df55.pdf"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 9 LR8-66HYD 635-670M",
    "power": "635-670 Wp",
    "sub": "HPBC 2.0 bifacial back-contact",
    "year": "2025",
    "url": "https://inergion.com/wp-content/uploads/2025/07/LONGi-Datasheet_Hi-MO9-V2-LR8-66HYD-635-670M-V2R-V1.0-EN.pdf"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 9 Sea-Shield LR8-66HYD 630-670M",
    "power": "630-670 Wp",
    "sub": "HPBC 2.0 costa/humidade",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/69242"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 9 Ice-Shield LR8-66HYD 630-670M",
    "power": "630-670 Wp",
    "sub": "HPBC 2.0 clima frio",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/69241"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO 9 página oficial",
    "power": "—",
    "sub": "Flagship utility 2025-2026",
    "year": "2025",
    "url": "https://www.longi.com/en/products/modules/hi-mo-9/"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X10 Explorer LR7-72HVH 630-650M",
    "power": "630-650 Wp",
    "sub": "HPBC 2.0 distribuído",
    "year": "2025",
    "url": "https://nastechsolar.com/content/SOLAR%20PANELS/LONGI/Datasheet%20LONGI%20Hi-MO%20X10%20630-650%20LR7-72HVH%20Explorer.pdf"
  },
  {
    "brand": "Longi",
    "title": "Hi-MO X10 Guardian Anti-glare 645-665W",
    "power": "645-665 Wp",
    "sub": "HPBC 2.0 anti-reflexo",
    "year": "2025",
    "url": "https://www.moregosolar.com/Longi-Hi-MO9-LR8-66HYD-Bifacial-670W-665W-660W-655W-650W-645W-640W-Double-Glass-Solar-Panel-pd553880168.html"
  },
  {
    "brand": "Longi",
    "title": "Download Center (catálogo global)",
    "power": "—",
    "sub": "Acesso a todos os PDFs",
    "year": "2025",
    "url": "https://www.longi.com/en/download/"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Pro 72HC-BDVP 540-560W PERC bifacial",
    "power": "540-560 Wp",
    "sub": "Mono PERC bifacial 144 cél.",
    "year": "2021",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/Tiger-Pro-72HC-BDVP-540-560Watt.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Pro 78HC 600-620W",
    "power": "600-620 Wp",
    "sub": "Mono PERC 156 cél. 210mm",
    "year": "2022",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM600-620M-78HL4-BDVP-F5-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 54HL4-(V) 425-445W",
    "power": "425-445 Wp",
    "sub": "N-TOPCon monofacial 108 cél.",
    "year": "2023",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM425-445N-54HL4-(V)-F6-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 60HL4-(V) 475-495W",
    "power": "475-495 Wp",
    "sub": "N-TOPCon monofacial 120 cél.",
    "year": "2023",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM475-495N-60HL4-(V)-F3-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 72HL4-(V) 565-585W",
    "power": "565-585 Wp",
    "sub": "N-TOPCon monofacial 144 cél.",
    "year": "2022",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM565-585N-72HL4-(V)-F3-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 72HL4-(V) 580-605W (NA)",
    "power": "580-605 Wp",
    "sub": "N-TOPCon monofacial 144 cél.",
    "year": "2023",
    "url": "https://nastechsolar.com/content/SOLAR%20PANELS/03%20JINKO/Datasheet%20Jinko%20Tiger%20Neo%20JKM580-605N-72HL4-(V).pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 72HL4-BDV 560-580W bifacial",
    "power": "560-580 Wp",
    "sub": "N-TOPCon bifacial dual-glass 144 cél.",
    "year": "2023",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM560-580N-72HL4-BDV-F4-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 78HL4-(V) 610-630W",
    "power": "610-630 Wp",
    "sub": "N-TOPCon 156 cél. 210mm",
    "year": "2022",
    "url": "https://jinkosolar.eu/wp-content/uploads/JKM610-630N-78HL4-V-F2-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 78HL4-(V) 615-635W",
    "power": "615-635 Wp",
    "sub": "N-TOPCon 156 cél. 210mm versão 2024",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/55989"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 78HL4-BDV 605-625W bifacial",
    "power": "605-625 Wp",
    "sub": "N-TOPCon bifacial dual-glass 156 cél.",
    "year": "2023",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM605-625N-78HL4-BDV-F3-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 78HL4-BDV 625-650W (atualizado)",
    "power": "625-650 Wp",
    "sub": "N-TOPCon bifacial 156 cél.",
    "year": "2024",
    "url": "https://jinkosolarcdn.shwebspace.com/uploads/JKM625-650N-78HL4-BDV-F9-EN.pdf"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 66HL4M-(V) 610-635W",
    "power": "610-635 Wp",
    "sub": "N-TOPCon wafer retangular 132 cél.",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/62554"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 66HL4M-BDV 605-630W bifacial",
    "power": "605-630 Wp",
    "sub": "N-TOPCon bifacial retangular",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/61669"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 66 QL6-BDV 650-670W",
    "power": "650-670 Wp",
    "sub": "N-TOPCon 3.0 HOT 3.0 bifacial",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/69165"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 página oficial",
    "power": "—",
    "sub": "Nova linha 2025 com cel. 27% / mod. 24.8%",
    "year": "2025",
    "url": "https://jinkosolar.eu/solar-panels/pv-modules/tiger-neo-3-0/about/"
  },
  {
    "brand": "Jinko Solar",
    "title": "Download Center (AU)",
    "power": "—",
    "sub": "Todos os datasheets Austrália",
    "year": "2025",
    "url": "https://jinkosolar.com.au/download_categories/datasheets/"
  },
  {
    "brand": "Jinko Solar",
    "title": "Site oficial produto Tiger Neo",
    "power": "—",
    "sub": "Catálogo global",
    "year": "2025",
    "url": "https://www.jinkosolar.com/en/site/tigerneo"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex TSM-DE21 635-670W Mono PERC",
    "power": "635-670 Wp",
    "sub": "Mono PERC 210mm 132 cél.",
    "year": "2021",
    "url": "https://solaranalytica.com/wp-content/uploads/2022/04/Trina-Vertex-645-670W-Datasheet-Solar-Analytica-Verified.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex DEG21C.20 645-665W bifacial",
    "power": "645-665 Wp",
    "sub": "Mono PERC bifacial dual-glass",
    "year": "2022",
    "url": "https://static.trinasolar.com/sites/default/files/Datasheet_Vertex_DEG21C.20_EN_2022_A_0.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex DEG21C.20 (AU 2021)",
    "power": "—",
    "sub": "Mono PERC bifacial Austrália",
    "year": "2021",
    "url": "https://static.trinasolar.com/sites/default/files/Vertex_DEG21C.20_EN_2021_Aus_A_web_1.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex N NEG21C.20 695-720W",
    "power": "695-720 Wp",
    "sub": "N-TOPCon bifacial 210mm",
    "year": "2022",
    "url": "https://static.trinasolar.com/sites/default/files/Vertex_NEG21C.20_EN_2022_Aus_A_web.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex S+ TSM-NEG9R.28 430-460W",
    "power": "430-460 Wp",
    "sub": "N-TOPCon dual-glass 144 cél. 182mm retangular",
    "year": "2023",
    "url": "https://static.trinasolar.com/sites/default/files/230531_Datasheet_Vertex%20S+_NEG9R.28_EN_2023_B_web.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex S+ TSM-NEG9R.28 (versão 2024 C)",
    "power": "430-460 Wp",
    "sub": "N-TOPCon dual-glass (rev. 2024)",
    "year": "2024",
    "url": "https://vertexsplus.trinasolar.com/wp-content/uploads/2024/09/240831_Datasheet_Vertex-S_NEG9R.28_EN_2024_C_web.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex S+ TSM-NEG9R.28 425-445W (AU)",
    "power": "425-445 Wp",
    "sub": "N-TOPCon dual-glass Austrália 2024",
    "year": "2024",
    "url": "https://static.trinasolar.com/sites/default/files/Datasheet%20-%20Vertex%20S+_NEG9R.28_425-460%20EN_2024_Aus_C_web.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex S+ TSM-NEG9R.28 425-460W (v2024 final)",
    "power": "425-460 Wp",
    "sub": "N-TOPCon dual-glass versão final",
    "year": "2024",
    "url": "https://static.trinasolar.com/sites/default/files/Datasheet_Vertex%20S+_NEG9R.28_EN_2024_C_web.pdf"
  },
  {
    "brand": "Trina Solar",
    "title": "Download Center (catálogo oficial)",
    "power": "—",
    "sub": "Acesso completo aos PDFs",
    "year": "2025",
    "url": "https://www.trinasolar.com/en-glb/resources/download"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu6 CS6W 530-550MS (v1.6)",
    "power": "530-550 Wp",
    "sub": "Mono PERC half-cell 144 cél.",
    "year": "2021",
    "url": "https://solar.co.za/wp-content/uploads/2021/11/CS-Datasheet-HiKu6_CS6W-MS_v1.6_F50A_EN_530-550W.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu6 CS6W 530-555MS (v2.1)",
    "power": "530-555 Wp",
    "sub": "Mono PERC half-cell 144 cél.",
    "year": "2021",
    "url": "https://static.csisolar.com/wp-content/uploads/2020/06/21135332/CS-Datasheet-HiKu6_CS6W-MS_v2.1_EN.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu6 CS6W 530-550MS (v2.0 NA)",
    "power": "530-550 Wp",
    "sub": "Mono PERC half-cell EUA",
    "year": "2022",
    "url": "https://static.csisolar.com/wp-content/uploads/sites/3/2022/02/14153254/CS-Datasheet-HiKu6_CS6W-MS_v2.0_F50_J1_NA.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu6 CS6W 535-560MS (v2.8)",
    "power": "535-560 Wp",
    "sub": "Mono PERC half-cell atualizado",
    "year": "2023",
    "url": "https://natec.com/wp-content/uploads/2022/11/CS-Datasheet-HiKu6_CS6W-MS-535-560_v2.8_EN.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu6 CS6W 520-550MB AG bifacial (AU)",
    "power": "520-550 Wp",
    "sub": "Mono bifacial AG Austrália",
    "year": "2020",
    "url": "https://static.csisolar.com/wp-content/uploads/sites/2/2020/06/02103821/Canadian_Solar-Datasheet-CS6W-MB-AG-520-550-V1.0C3_AU.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPHiKu6 CS6.1-54TM All-Black 445-470W (NA)",
    "power": "445-470 Wp",
    "sub": "N-TOPCon monofacial 108 cél. all-black",
    "year": "2024",
    "url": "https://static.csisolar.com/wp-content/uploads/sites/3/2024/01/25141819/CS-Datasheet-TOPHiKu6-All-Black_CS6.1-54TM-H_v1.1C25_F23_P1_NA-US-445-470W.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPHiKu6 595-620W (72TM N-TOPCon)",
    "power": "595-620 Wp",
    "sub": "N-TOPCon monofacial 144 cél.",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/61580"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPBiHiKu6 CS6W-TB-AG 555-575W",
    "power": "555-575 Wp",
    "sub": "N-TOPCon bifacial dual-glass",
    "year": "2022",
    "url": "https://static.csisolar.com/wp-content/uploads/2022/09/27143006/CS-Datasheet-TOPBiHiKu6-TOPCon_CS6W-TB-AG_v1.6_EN.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPBiHiKu6 CS6W-TB-AG 565-590W (v1.8)",
    "power": "565-590 Wp",
    "sub": "N-TOPCon bifacial atualizado",
    "year": "2023",
    "url": "https://static.csisolar.com/wp-content/uploads/2022/09/06160941/CS-Datasheet-TOPBiHiKu6-TOPCon_CS6W-TB-AG_v1.8_EN.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPBiHiKu6 CS6.2-66TB bifacial",
    "power": "—",
    "sub": "N-TOPCon bifacial wafer retangular",
    "year": "2023",
    "url": "https://static.csisolar.com/wp-content/uploads/2022/09/04143133/CS-Datasheet-TOPBiHiKu6_CS6.2-66TB_v1.2_EN.pdf"
  },
  {
    "brand": "Canadian Solar",
    "title": "HiKu7 CS7N 660-690W Mono PERC",
    "power": "660-690 Wp",
    "sub": "Mono PERC 210mm 132 cél.",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/48244"
  },
  {
    "brand": "Canadian Solar",
    "title": "BiHiKu7 CS7N-MB-AG 650-680W bifacial",
    "power": "650-680 Wp",
    "sub": "Mono PERC bifacial 210mm",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/48245"
  },
  {
    "brand": "Canadian Solar",
    "title": "TOPBiHiKu7 CS7N-TB 695-720W N-TOPCon",
    "power": "695-720 Wp",
    "sub": "N-TOPCon bifacial 210mm 132 cél.",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/62130"
  },
  {
    "brand": "Canadian Solar",
    "title": "CSI Solar Downloads",
    "power": "—",
    "sub": "Catálogo completo",
    "year": "2025",
    "url": "https://www.csisolar.com/support/"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 3.0 JAM72S30 525-550/MR",
    "power": "525-550 Wp",
    "sub": "Mono PERC half-cell 144 cél. 182mm",
    "year": "2021",
    "url": "https://www.jasolar.com/uploadfile/2021/0706/20210706053524693.pdf"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 3.0 JAM72D30 525-550/MB bifacial",
    "power": "525-550 Wp",
    "sub": "Mono PERC bifacial",
    "year": "2021",
    "url": "https://www.jasolar.com/uploadfile/2021/0706/20210706053456650.pdf"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 3.0 JAM72S30 540-565/MR",
    "power": "540-565 Wp",
    "sub": "Mono PERC atualizado",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/66268"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 3.0 Pro JAM72S30 540-565/GR",
    "power": "540-565 Wp",
    "sub": "Mono PERC GR Pro",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56213"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 3.0 Whitepaper técnico",
    "power": "—",
    "sub": "Documento técnico da série",
    "year": "2021",
    "url": "https://www.afsiasolar.com/wp-content/uploads/2021/03/DeepBlue-3.0-Technical-White-Paper3.pdf"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0X JAM72D40 555-580/MB",
    "power": "555-580 Wp",
    "sub": "N-TOPCon bifacial 144 cél. Bycium+",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/58937"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0X JAM72D40 555-580/GB",
    "power": "555-580 Wp",
    "sub": "N-TOPCon GB (all-black) 144 cél.",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56654"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM72D40 580-605/MB",
    "power": "580-605 Wp",
    "sub": "N-TOPCon bifacial Bycium+ SMBB",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/66275"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM72D40 580-605/LB utility",
    "power": "580-605 Wp",
    "sub": "N-TOPCon utility-scale",
    "year": "2024",
    "url": "https://www.jasolar.eu/en/products/jam72d40-lb"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM72D40 590-615/LB",
    "power": "590-615 Wp",
    "sub": "N-TOPCon upgrade utility 2025",
    "year": "2025",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/66271"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM66D42 MB 605W",
    "power": "—",
    "sub": "N-TOPCon residencial 132 cél.",
    "year": "2024",
    "url": "https://www.jasolar.com/index.php?m=content&c=index&a=lists&catid=453"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM66D45 LB 640W",
    "power": "640 Wp",
    "sub": "N-TOPCon utility retangular",
    "year": "2024",
    "url": "https://www.jasolar.com/index.php?m=content&c=index&a=lists&catid=453"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM54D40 LB 460W",
    "power": "460 Wp",
    "sub": "N-TOPCon residencial 108 cél.",
    "year": "2024",
    "url": "https://www.jasolar.com/index.php?m=content&c=index&a=lists&catid=453"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro JAM72D40 MB 605W",
    "power": "605 Wp",
    "sub": "N-TOPCon C&I/rooftop comercial",
    "year": "2024",
    "url": "https://www.jasolar.eu/en/products/jam72d40-mb"
  },
  {
    "brand": "JA Solar",
    "title": "DeepBlue 4.0 Pro (página oficial EU)",
    "power": "—",
    "sub": "Catálogo geral DeepBlue 4.0",
    "year": "2025",
    "url": "https://www.jasolar.eu/en/products/deep-blue-40"
  },
  {
    "brand": "Astronergy",
    "title": "ASTRO N5 CHSM72N(DG)/F-BH 560-580W",
    "power": "560-580 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2023",
    "url": "https://www.astronergy.com/wp-content/uploads/2023/05/182560580ASTRO-N5_CHSM72NDGF-BH_2278x1134x30_EN_20230801.pdf"
  },
  {
    "brand": "Astronergy",
    "title": "ASTRO N5 CHSM72N(DG)/F-BH 570-595W",
    "power": "570-595 Wp",
    "sub": "N-TOPCon bifacial atualizado",
    "year": "2024",
    "url": "https://www.scribd.com/document/718507508/1-570-595-ASTRO-N5-CHSM72N-DG-F-BH-2278x1134x30-30x28-frame-EN-20240105"
  },
  {
    "brand": "Astronergy",
    "title": "ASTRO N5 CHSM72N(DG)/F-HC 565-585W",
    "power": "565-585 Wp",
    "sub": "N-TOPCon HC bifacial",
    "year": "2023",
    "url": "https://www.astronergy.com/wp-content/uploads/2023/08/182565585ASTRO-N5_CHSM72NDGF-HC_2278x1134x30__EN_20230830.pdf"
  },
  {
    "brand": "Astronergy",
    "title": "ASTRO N5 CHSM72N(DG)/F-BH 585-605W",
    "power": "585-605 Wp",
    "sub": "N-TOPCon bifacial 144 cél. 2024",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/58760"
  },
  {
    "brand": "Astronergy",
    "title": "ASTRO N5 CHSM72N-HC 585-605W monofacial",
    "power": "585-605 Wp",
    "sub": "N-TOPCon monofacial",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/66121"
  },
  {
    "brand": "Astronergy",
    "title": "Download Center (catálogo)",
    "power": "—",
    "sub": "Todos os datasheets atuais",
    "year": "2025",
    "url": "https://www.astronergy.com/download-center/"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-690-715BHDG HJT",
    "power": "690-715 Wp",
    "sub": "HJT bifacial 132 cél.",
    "year": "2023",
    "url": "https://www.scribd.com/document/714900311/RSM132-8-690-715BHDG-IEC1500V-33mm-2023H2-4-EN"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-700-725BHDG",
    "power": "700-725 Wp",
    "sub": "HJT bifacial 132 cél. 2024",
    "year": "2024",
    "url": "https://risenenergy.com.au/storage/RSM132-8-700-725BHDG-IEC1500V-33mm-2024H1-1-EN.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-675-700BHDG",
    "power": "675-700 Wp",
    "sub": "HJT bifacial 210mm thin wafer",
    "year": "2022",
    "url": "https://www.hdt.energy/wp-content/uploads/2022/12/RSM132-8-675-700BHDG-IEC1500V-35mm-2022H2-1-EN_220819_212551.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Titan RSM132-8 BHDG (catálogo 2024)",
    "power": "650-705 Wp",
    "sub": "TOPCon/HJT bifacial",
    "year": "2024",
    "url": "https://en.risen.com/uploads/20240416/18a91b4e377649f92d5645ffbd98b5d2.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Lanergy distributor catalog",
    "power": "—",
    "sub": "Catálogo completo atual",
    "year": "2024",
    "url": "https://lanergy-solar.com/risenenergy.html"
  },
  {
    "brand": "BYD Solar",
    "title": "MLK-36 530-555W Mono PERC",
    "power": "530-555 Wp",
    "sub": "Mono PERC half-cell 144 cél.",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/61573"
  },
  {
    "brand": "BYD Solar",
    "title": "MLTK-36 520-545W Bifacial",
    "power": "520-545 Wp",
    "sub": "Mono PERC bifacial",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/61574"
  },
  {
    "brand": "BYD Solar",
    "title": "NLBK-36 555-580W N-type",
    "power": "555-580 Wp",
    "sub": "N-TOPCon 144 cél.",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/59531"
  },
  {
    "brand": "BYD Solar",
    "title": "Site oficial BR (BYD Energia)",
    "power": "—",
    "sub": "Catálogo BR completo",
    "year": "2025",
    "url": "https://bydenergia.com/en/produtos/modulos-fotovoltaicos/"
  },
  {
    "brand": "BYD Solar",
    "title": "MHK-36-5BB (legado)",
    "power": "—",
    "sub": "Mono PERC 5BB descontinuado",
    "year": "2020",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/42679"
  },
  {
    "brand": "Seraphim",
    "title": "S4 N-TOPCon Bifacial 425-440W",
    "power": "425-440 Wp",
    "sub": "N-TOPCon bifacial 108 cél.",
    "year": "2024",
    "url": "https://www.luxcoenergy.com.au/pdf/seraphim/Seraphim-S4-N-Topcon-Series-Bifacial-440W-Black-Frame-(SRP-440-BTD-BG).pdf"
  },
  {
    "brand": "Seraphim",
    "title": "Sable TOPCon 595-610W bifacial",
    "power": "595-610 Wp",
    "sub": "N-TOPCon bifacial 132 cél.",
    "year": "2024",
    "url": "https://www.solar-europe.co.za/wp-content/uploads/2024/05/Seraphim-600W-Sable-TOPcon-Bifacial-Black-Frame-Brochure.pdf"
  },
  {
    "brand": "Seraphim",
    "title": "SRP-440-BTD-BG lightweight",
    "power": "425-440 Wp",
    "sub": "Lightweight TOPCon bifacial",
    "year": "2024",
    "url": "https://www.seraphim-energy.com/uploads/upload/files/20240914/acaa76a33744a1c16df83ec6b5114531.pdf"
  },
  {
    "brand": "Seraphim",
    "title": "Seco Series SRP-540-555-BMA-HV",
    "power": "540-555 Wp",
    "sub": "Mono PERC half-cell legado",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/48182"
  },
  {
    "brand": "Waaree Energies",
    "title": "Elite Series BiN-08 570-600W",
    "power": "570-600 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2024",
    "url": "https://waaree.com/wp-content/uploads/2024/02/ELITE-SERIES-BiN-08-570-600-WEL-EPD-570-600-144-BiN-HC-08-20.06.2024_33mm.pdf"
  },
  {
    "brand": "Waaree Energies",
    "title": "AHNAY Mono PERC bifacial 520-550W",
    "power": "520-550 Wp",
    "sub": "Mono PERC bifacial",
    "year": "2024",
    "url": "https://waaree.com/wp-content/uploads/2024/03/Datasheet-Bi-55-520-550_11_22.06.2024.pdf"
  },
  {
    "brand": "Waaree Energies",
    "title": "Mono PERC M10 515-545W",
    "power": "515-545 Wp",
    "sub": "Mono PERC M10 144 cél.",
    "year": "2024",
    "url": "https://rooftopsolarindia.com/datasheet/waaree-energies/datasheet-waaree-solar-mono-perc-m10-515W-520W-525W-530W-535W-540W-545W.pdf"
  },
  {
    "brand": "Waaree Energies",
    "title": "Elite BiN-08 560-580W TOPCon",
    "power": "560-580 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2023",
    "url": "https://www.orianasolar.com/datasheet/Topcon%20N%20type%20Bifacial%20ELITE%20SERIES%20BiN-08-560-580%20WEL-E&PD-560-580-144-BiN-HC-00-19.08.2023.pdf"
  },
  {
    "brand": "Waaree Energies",
    "title": "Download Center",
    "power": "—",
    "sub": "Todos os datasheets",
    "year": "2025",
    "url": "https://waaree.com/download-center/"
  },
  {
    "brand": "Amerisolar",
    "title": "AS-7M144-HC 525-550W Mono PERC",
    "power": "525-550 Wp",
    "sub": "Mono PERC half-cell 144 cél.",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/50305"
  },
  {
    "brand": "Amerisolar",
    "title": "AS-7M144-BHC 530-550W Bifacial",
    "power": "530-550 Wp",
    "sub": "Mono PERC bifacial",
    "year": "2022",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/50307"
  },
  {
    "brand": "Amerisolar",
    "title": "AS-7M144N-BHC 550-575W N-TOPCon",
    "power": "550-575 Wp",
    "sub": "N-TOPCon bifacial",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/57893"
  },
  {
    "brand": "Amerisolar",
    "title": "AS-7M144-BHC 570-590W TOPCon (AP)",
    "power": "570-590 Wp",
    "sub": "N-TOPCon bifacial 2278mm",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/65422"
  },
  {
    "brand": "Leapton",
    "title": "LP182 série (catálogo)",
    "power": "—",
    "sub": "Mono PERC / N-TOPCon",
    "year": "2024",
    "url": "https://en.leapton.com/product/leapton-solar-panel/"
  },
  {
    "brand": "Leapton",
    "title": "ENF Directory",
    "power": "—",
    "sub": "Catálogo independente",
    "year": "2024",
    "url": "https://www.enfsolar.com/leapton-solar"
  },
  {
    "brand": "Leapton",
    "title": "Site oficial global",
    "power": "—",
    "sub": "Acesso aos PDFs",
    "year": "2025",
    "url": "https://en.leapton.com/"
  },
  {
    "brand": "ZNShine",
    "title": "ZXM7-UHLDD108 440W N-TOPCon Bifacial",
    "power": "440 Wp",
    "sub": "N-TOPCon bifacial 108 cél.",
    "year": "2024",
    "url": "https://solartown.com/solar-panels/seraphim-srp-440-btd-bg-440-w-n-type-topcon-bifacial-solar-panel/"
  },
  {
    "brand": "ZNShine",
    "title": "ZXM7-UHLDD144 585W N-TOPCon",
    "power": "585 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2024",
    "url": "https://www.znshinesolar.com/"
  },
  {
    "brand": "ZNShine",
    "title": "Site oficial",
    "power": "—",
    "sub": "Acesso ao catálogo completo",
    "year": "2025",
    "url": "http://www.znshinesolar.com/"
  },
  {
    "brand": "Vikram Solar",
    "title": "HYPERSOL + SOMERA (catálogo)",
    "power": "—",
    "sub": "Mono PERC / N-TOPCon",
    "year": "2025",
    "url": "https://www.vikramsolar.com/solar-pv-modules/"
  },
  {
    "brand": "Adani Solar",
    "title": "Catálogo oficial (N-TOPCon)",
    "power": "—",
    "sub": "Mono PERC / N-TOPCon bifacial",
    "year": "2025",
    "url": "https://www.adanisolar.com/our-products/solar-panels"
  },
  {
    "brand": "Tongwei",
    "title": "TWMND-66HS TOPCon",
    "power": "—",
    "sub": "N-TOPCon bifacial",
    "year": "2025",
    "url": "https://solar.tongwei.cn/products/"
  },
  {
    "brand": "GCL Solar",
    "title": "M10 / N-TOPCon",
    "power": "—",
    "sub": "N-TOPCon bifacial",
    "year": "2025",
    "url": "https://www.gclsi.com/products/"
  },
  {
    "brand": "Yingli",
    "title": "Página oficial (linha atual)",
    "power": "—",
    "sub": "Mono PERC mercado reduzido",
    "year": "2025",
    "url": "https://www.yinglisolar.com/en/products/"
  },
  {
    "brand": "Boviet Solar",
    "title": "Vega N-TOPCon 570-600W",
    "power": "570-600 Wp",
    "sub": "N-TOPCon bifacial 144 cél.",
    "year": "2024",
    "url": "https://bovietsolar.com/products/"
  },
  {
    "brand": "Silfab Solar",
    "title": "Prime / Elite N-TOPCon",
    "power": "—",
    "sub": "N-TOPCon HC premium (US/CA)",
    "year": "2025",
    "url": "https://silfabsolar.com/product/"
  },
  {
    "brand": "Solarwatt",
    "title": "Vision Glass-Glass",
    "power": "—",
    "sub": "Mono PERC vidro-vidro DE",
    "year": "2024",
    "url": "https://www.solarwatt.com/solar-panels"
  },
  {
    "brand": "Heckert Solar",
    "title": "NeMo 4.2 60M Mono PERC",
    "power": "—",
    "sub": "Mono PERC HC Made in Germany",
    "year": "2024",
    "url": "https://www.heckertsolar.com/en/products/"
  },
  {
    "brand": "Jolywood",
    "title": "Niwa PRO JW-HD108N N-TOPCon",
    "power": "—",
    "sub": "N-TOPCon bifacial",
    "year": "2024",
    "url": "https://www.jolywood.us/solar-modules/"
  },
  {
    "brand": "Aleo Solar",
    "title": "Leo / Orion / Sirius / X75",
    "power": "—",
    "sub": "N-TOPCon / Mono PERC EU",
    "year": "2025",
    "url": "https://www.aleo-solar.com/products/"
  },
  {
    "brand": "Heliene",
    "title": "144 HC N-TOPCon bifacial",
    "power": "—",
    "sub": "N-TOPCon HC 144 cél. (CA)",
    "year": "2024",
    "url": "https://heliene.com/product-category/solar-panels/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 1S54 Mono-Glass 430-450W (Gen 1)",
    "power": "430-450 W",
    "sub": "N-type ABC Gen 1 mono-glass",
    "year": "2023",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 1S54 Mono-Glass 445-460W",
    "power": "445-460 W",
    "sub": "N-type ABC Gen 1 mono-glass",
    "year": "2024",
    "url": "https://aikosolar.com/wp-content/uploads/2024/02/AIKO-A-MAH54Mb-445-460W-35-frame-EN-V5.3.pdf"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 1P54 Mono-Glass 450-465W",
    "power": "450-465 W",
    "sub": "N-type ABC Gen 1 mono-glass",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 1S+54 Dual-Glass 440-455W",
    "power": "440-455 W",
    "sub": "N-type ABC Gen 1 dual-glass",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 2S54 Mono-Glass 450-470W (Gen 2 Full Black)",
    "power": "450-470 W",
    "sub": "N-type ABC Gen 2 full black 23.3%",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/60717"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 2P54 Mono-Glass 450-485W",
    "power": "450-485 W",
    "sub": "N-type ABC Gen 2 black frame",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 2P+54 Dual-Glass 455-475W",
    "power": "455-475 W",
    "sub": "N-type ABC Gen 2 dual-glass",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 2S60 Mono-Glass 500-520W",
    "power": "500-520 W",
    "sub": "N-type ABC Gen 2 60-cell",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 3P+60 540W Dual-Glass (Gen 3 24.4%)",
    "power": "530-545 W",
    "sub": "N-type ABC Gen 3 dual-glass bifacial",
    "year": "2025",
    "url": "https://www.itstechnologies.shop/collections/aikosolarpanels"
  },
  {
    "brand": "Aiko Solar",
    "title": "NEOSTAR 3S+54 Dual-Glass 460-475W",
    "power": "460-475 W",
    "sub": "N-type ABC Gen 3 dual-glass",
    "year": "2025",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "COMET 2U72 Mono-Glass 640-670W (C&I Gen 2)",
    "power": "640-670 W",
    "sub": "N-type ABC C&I 144-cell",
    "year": "2024",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Aiko Solar",
    "title": "COMET 3N72 Mono-Glass 660-690W (C&I Gen 3)",
    "power": "660-690 W",
    "sub": "N-type ABC C&I Gen 3",
    "year": "2025",
    "url": "https://aikosolar.com/en/products/"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-54HB 420-430W (108 cells 182mm)",
    "power": "420-430 W",
    "sub": "N-type TOPCon residencial 108c",
    "year": "2023",
    "url": "https://synapsun.com/en/pv-modules/product-detail/TWMND-54HB-20230515"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-54HS 415-435W",
    "power": "415-435 W",
    "sub": "N-type TOPCon residencial half-cell",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/58099"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-60HS 475-495W",
    "power": "475-495 W",
    "sub": "N-type TOPCon 120 cells 182mm",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/64096"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-72HS (144 cells)",
    "power": "555-585 W",
    "sub": "N-type TOPCon C&I 182mm",
    "year": "2023",
    "url": "https://synapsun.com/en/modules-pv/produit-detail/TWMND-72HS-20230515"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-72HD 555-575W (bifacial)",
    "power": "555-575 W",
    "sub": "N-type TOPCon C&I bifacial",
    "year": "2023",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/58102"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-72HD 590-605W (bifacial)",
    "power": "590-605 W",
    "sub": "N-type TOPCon bifacial 72c",
    "year": "2024",
    "url": "https://synapsun.com/en/pv-modules/product-detail/TWMND-72HD"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TWMND-78HD 625-645W",
    "power": "625-645 W",
    "sub": "N-type TOPCon utility 78-cell",
    "year": "2024",
    "url": "https://en.tongwei.cn/uploads/2024/g/TNC-M10/TWMND-78HD-625~645W(30F).pdf"
  },
  {
    "brand": "Tongwei Solar",
    "title": "TNC 2.0 TWMNH-66HD 635-655W",
    "power": "635-655 W",
    "sub": "N-type half-cell bifacial C&I/utility",
    "year": "2025",
    "url": "https://manuals.plus/m/aa7d1f8690737322812174ae304a1151d44ccd2fc55e5ec3c836b876d8103853"
  },
  {
    "brand": "Tongwei Solar",
    "title": "Catálogo oficial módulos (en.tongwei.cn)",
    "power": "—",
    "sub": "Todos os modelos TNC/TNH",
    "year": "2025",
    "url": "https://en.tongwei.cn/module.html"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-690-715BHDG (HJT bifacial)",
    "power": "690-715 W",
    "sub": "HJT n-type bifacial 132 cells",
    "year": "2023",
    "url": "https://www.scribd.com/document/714900311/RSM132-8-690-715BHDG-IEC1500V-33mm-2023H2-4-EN"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-675-700BHDG (thin wafers)",
    "power": "675-700 W",
    "sub": "HJT n-type 210mm thin wafer",
    "year": "2022",
    "url": "https://www.hdt.energy/wp-content/uploads/2022/12/RSM132-8-675-700BHDG-IEC1500V-35mm-2022H2-1-EN_220819_212551.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-700-725BHDG (2024 H1)",
    "power": "700-725 W",
    "sub": "HJT n-type 23.3% bifacial",
    "year": "2024",
    "url": "https://risenenergy.com.au/storage/RSM132-8-700-725BHDG-IEC1500V-33mm-2024H1-1-EN.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Hyper-ion RSM132-8-720-740BHDG Steel Frame",
    "power": "720-740 W",
    "sub": "HJT steel frame (enf: 65593)",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/65593"
  },
  {
    "brand": "Risen Energy",
    "title": "TOPCon RSM144-10-590-615BNDG",
    "power": "590-615 W",
    "sub": "N-type TOPCon 144 half-cell",
    "year": "2024",
    "url": "https://www.enfsolar.com/pv/panel-datasheet/crystalline/63319"
  },
  {
    "brand": "Risen Energy",
    "title": "2024 Product Brochure (catálogo completo)",
    "power": "—",
    "sub": "Brochure oficial 2024 linhas",
    "year": "2024",
    "url": "https://en.risen.com/uploads/20240520/2024%20Risen%20Product%20Brochure.pdf"
  },
  {
    "brand": "Risen Energy",
    "title": "Assembly/TOPCon (página catálogo)",
    "power": "—",
    "sub": "TOPCon module series oficial",
    "year": "2025",
    "url": "https://en.risen.com/assembly/topc"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 JKM645-670N-66QL6-BDV",
    "power": "645-670 W",
    "sub": "N-type TOPCon 3.0 quad-layer 66 cells",
    "year": "2025",
    "url": "https://jinkosolartiger.com/tiger-neo-3-0-bifacial-645-670-watt/"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 JKM590-615N-60HL4-BDV",
    "power": "590-615 W",
    "sub": "N-type TOPCon 3.0 60-cell bifacial",
    "year": "2025",
    "url": "https://www.jinkosolar.com/en/site/tigerneo"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 JKM475-495N-54HL4-BDV residencial",
    "power": "475-495 W",
    "sub": "N-type TOPCon 3.0 residencial",
    "year": "2025",
    "url": "https://www.jinkosolar.com/en/site/tigerneo"
  },
  {
    "brand": "Jinko Solar",
    "title": "Tiger Neo 3.0 JKM710-740N-72HL4-BDV utility",
    "power": "710-740 W",
    "sub": "N-type TOPCon 3.0 utility 72c",
    "year": "2025",
    "url": "https://www.jinkosolar.com/en/site/tigerneo"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex N TSM-NEG19RC.20 625-660W (utility)",
    "power": "625-660 W",
    "sub": "N-type TOPCon 210mm utility",
    "year": "2024",
    "url": "https://www.trinasolar.com/en-glb/product/vertex-n"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex N TSM-NEG21C.20 725W+ (Performance)",
    "power": "715-745 W",
    "sub": "N-type TOPCon 210mm bifacial",
    "year": "2025",
    "url": "https://www.trinasolar.com/en-glb/product/vertex-n"
  },
  {
    "brand": "Trina Solar",
    "title": "Vertex S+ NEG9RC.27 445-470W (residencial)",
    "power": "445-470 W",
    "sub": "N-type TOPCon 54-cell residencial",
    "year": "2025",
    "url": "https://www.trinasolar.com/en-glb/product/vertex-s-plus"
  }
];
