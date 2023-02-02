import { Language } from '../types';

type Languages = {
  [key: string]: {
    [key in Language]: string
  }
};

export const languages: Languages = {
  'Binary': {
    'en': '2 (binary)',
    'fi': '2 (binääri)',
    'it': '2 (binario)',
    'ko': '2 (2진법)',
    'sv': '2 (binär)',
  },
  'Change language': {
    'en': 'Change language',
    'fi': 'Vaihda kieli',
    'it': 'Cambia lingua',
    'ko': '언어 변환',
    'sv': 'Ändra språk',
  },
  'Clear': {
    'en': 'Clear',
    'fi': 'Tyhjennä',
    'it': 'Pulisci',
    'ko': '초기화',
    'sv': 'Rensa',
  },
  'Contributing': {
    'en': 'Contributing',
    'fi': 'Osallistuminen',
    'it': 'Contribuisci',
    'ko': '컨트리뷰트',
    'sv': 'Bidragande',
  },
  'Copy': {
    'en': 'Copy',
    'fi': 'Kopioi',
    'it': 'Copia',
    'ko': '복사',
    'sv': 'Kopiera',
  },
  'Decimal': {
    'en': '10 (decimal)',
    'fi': '10 (desimaali)',
    'it': '10 (decimale)',
    'ko': '10 (십진법)',
    'sv': '10 (decimal)',
  },
  'Documentation': {
    'en': 'Documentation',
    'fi': 'Dokumentaatio',
    'it': 'Documentazione',
    'ko': '문서',
    'sv': 'Dokumentation',
  },
  'From base': {
    'en': 'From base',
    'fi': 'Kantaluvusta',
    'it': 'Base iniziale',
    'ko': '입력',
    'sv': 'Från bas',
  },
  'Hexadecimal': {
    'en': '16 (hexadecimal)',
    'fi': '16 (heksadesimaali)',
    'it': '16 (esadecimale)',
    'ko': '16 (16진법)',
    'sv': '16 (hexadecimal)',
  },
  'Input': {
    'en': 'Input',
    'fi': 'Syöte',
    'it': 'Input',
    'ko': '입력값',
    'sv': 'Indata',
  },
  'Number copied to clipboard!': {
    'en': 'Number copied to clipboard!',
    'fi': 'Numero kopioitu leikepöydälle!',
    'it': 'Numero copiato negli appunti!',
    'ko': '복사 완료',
    'sv': 'Numret kopierades till urklipp!',
  },
  'Not a valid number!': {
    'en': 'Not a valid number!',
    'fi': 'Numero ei ole kelvollinen!',
    'it': 'Numero non valido',
    'ko': '유효한 숫자가 아닙니다.',
    'sv': 'Inte ett giltigt nummer!',
  },
  'Octal': {
    'en': '8 (octal)',
    'fi': '8 (oktaali)',
    'it': '8 (ottale)',
    'ko': '8 (8진법)',
    'sv': '8 (oktal)',
  },
  'Output': {
    'en': 'Output',
    'fi': 'Tuloste',
    'it': 'Output',
    'ko': '결과값',
    'sv': 'Utdata',
  },
  'Page title': {
    'en': 'The simple number converter',
    'fi': 'Yksinkertainen lukujärjestelmämuunnin',
    'it': 'Semlice convertitore di numeri',
    'ko': '진법 변환기',
    'sv': 'Den enkla nummerkonverteraren',
  },
  'Read more': {
    'en': 'Read more',
    'fi': 'Lue lisää',
    'it': 'Leggi di più',
    'ko': '더보기',
    'sv': 'Läs mer',
  },
  'Source code': {
    'en': 'Source code',
    'fi': 'Lähdekoodi',
    'it': 'Source code',
    'ko': '소스 코드',
    'sv': 'Källkod',
  },
  'To base': {
    'en': 'To base',
    'fi': 'Kantalukuun',
    'it': 'In base',
    'ko': '결과',
    'sv': 'Till bas',
  },
  'Use light theme': {
    'en': 'Use light theme',
    'fi': 'Käytä vaaleaa teemaa',
    'it': 'Tema chiaro',
    'ko': '라이트 모드',
    'sv': 'Använd ljust tema',
  },
  'Use dark theme': {
    'en': 'Use dark theme',
    'fi': 'Käytä tummaa teemaa',
    'it': 'Tema scuro',
    'ko': '나이트 모드',
    'sv': 'Använd mörkt tema',
  },
  'User manual': {
    'en': 'User manual',
    'fi': 'Käyttöohje',
    'it': 'Manuale d\'uso',
    'ko': '메뉴얼',
    'sv': 'Användarmanual',
  },
  'Version': {
    'en': 'Version',
    'fi': 'Versio',
    'it': 'veersione',
    'ko': '버전',
    'sv': 'Version',
  },
};

export const wikiLink: Languages = {
  '2': {
    'en': 'https://en.wikipedia.org/wiki/Binary_number',
    'fi': 'https://fi.wikipedia.org/wiki/Binäärijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_binario',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84%EB%B2%95',
    'sv': 'https://sv.wikipedia.org/wiki/Bin%C3%A4ra_talsystemet',
  },
  '8': {
    'en': 'https://en.wikipedia.org/wiki/Octal',
    'fi': 'https://fi.wikipedia.org/wiki/Oktaalijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_ottale',
    'ko': 'https://ko.wikipedia.org/wiki/%ED%8C%94%EC%A7%84%EB%B2%95',
    'sv': 'https://sv.wikipedia.org/wiki/Oktala_talsystemet',
  },
  '10': {
    'en': 'https://en.wikipedia.org/wiki/Decimal',
    'fi': 'https://fi.wikipedia.org/wiki/Kymmenjärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_decimale',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%A7%84%EB%B2%95',
    'sv': 'https://sv.wikipedia.org/wiki/Decimala_talsystemet',
  },
  '16': {
    'en': 'https://en.wikipedia.org/wiki/Hexadecimal',
    'fi': 'https://fi.wikipedia.org/wiki/Heksadesimaalijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_esadecimale',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95',
    'sv': 'https://sv.wikipedia.org/wiki/Hexadecimala_talsystemet',
  },
};
