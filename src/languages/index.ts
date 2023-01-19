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
  },
  'Change language': {
    'en': 'Change language',
    'fi': 'Vaihda kieli',
    'it': 'Cambia lingua',
    'ko': '언어 변환',
  },
  'Clear': {
    'en': 'Clear',
    'fi': 'Tyhjennä',
    'it': 'Pulisci',
    'ko': '초기화',
  },
  'Contributing': {
    'en': 'Contributing',
    'fi': 'Osallistuminen',
    'it': 'Contribuisci',
    'ko': '컨트리뷰트',
  },
  'Copy': {
    'en': 'Copy',
    'fi': 'Kopioi',
    'it': 'Copia',
    'ko': '복사',
  },
  'Decimal': {
    'en': '10 (decimal)',
    'fi': '10 (desimaali)',
    'it': '10 (decimale)',
    'ko': '10 (십진법)',
  },
  'Documentation': {
    'en': 'Documentation',
    'fi': 'Dokumentaatio',
    'it': 'Documentazione',
    'ko': '문서',
  },
  'English': {
    'en': 'English',
    'fi': 'englanti',
    'it': 'Inglese',
    'ko': '영어',
  },
  'Finnish': {
    'en': 'Finnish',
    'fi': 'suomi',
    'it': 'Finnico',
    'ko': '핀란드어',
  },
  'From base': {
    'en': 'From base',
    'fi': 'Kantaluvusta',
    'it': 'Base iniziale',
    'ko': '입력',
  },
  'Hexadecimal': {
    'en': '16 (hexadecimal)',
    'fi': '16 (heksadesimaali)',
    'it': '16 (esadecimale)',
    'ko': '16 (16진법)',
  },
  'Input': {
    'en': 'Input',
    'fi': 'Syöte',
    'it': 'Input',
    'ko': '입력값',
  },
  'Italian': {
    'en': 'Inglese',
    'fi': 'Finnico',
    'it': 'Italiano',
    'ko': 'Coreano',
  },
  'Korean': {
    'en': 'Korean',
    'fi': 'korea',
    'it': 'Coreano',
    'ko': '한국어',
  },
  'Number copied to clipboard!': {
    'en': 'Number copied to clipboard!',
    'fi': 'Numero kopioitu leikepöydälle!',
    'it': 'Numero copiato negli appunti!',
    'ko': '복사 완료',
  },
  'Not a valid number!': {
    'en': 'Not a valid number!',
    'fi': 'Numero ei ole kelvollinen!',
    'it': 'Numero non valido',
    'ko': '유효한 숫자가 아닙니다.',
  },
  'Octal': {
    'en': '8 (octal)',
    'fi': '8 (oktaali)',
    'it': '8 (ottale)',
    'ko': '8 (8진법)',
  },
  'Output': {
    'en': 'Output',
    'fi': 'Tuloste',
    'it': 'Output',
    'ko': '결과값',
  },
  'Page title': {
    'en': 'The simple number converter',
    'fi': 'Yksinkertainen lukujärjestelmämuunnin',
    'it': 'Semlice convertitore di numeri',
    'ko': '진법 변환기',
  },
  'Read more': {
    'en': 'Read more',
    'fi': 'Lue lisää',
    'it': 'Leggi di più',
    'ko': '더보기',
  },
  'Source code': {
    'en': 'Source code',
    'fi': 'Lähdekoodi',
    'it': 'Source code',
    'ko': '소스 코드',
  },
  'To base': {
    'en': 'To base',
    'fi': 'Kantalukuun',
    'it': 'In base',
    'ko': '결과',
  },
  'Use light theme': {
    'en': 'Use light theme',
    'fi': 'Käytä vaaleaa teemaa',
    'it': 'Tema chiaro',
    'ko': '라이트 모드',
  },
  'Use dark theme': {
    'en': 'Use dark theme',
    'fi': 'Käytä tummaa teemaa',
    'it': 'Tema scuro',
    'ko': '나이트 모드',
  },
  'User manual': {
    'en': 'User manual',
    'fi': 'Käyttöohje',
    'it': 'Manuale d\'uso',
    'ko': '메뉴얼',
  },
  'Version': {
    'en': 'Version',
    'fi': 'Versio',
    'it': 'veersione',
    'ko': '버전',
  },
};

export const wikiLink: Languages = {
  '2': {
    'en': 'https://en.wikipedia.org/wiki/Binary_number',
    'fi': 'https://fi.wikipedia.org/wiki/Binäärijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_binario',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84%EB%B2%95',
  },
  '8': {
    'en': 'https://en.wikipedia.org/wiki/Octal',
    'fi': 'https://fi.wikipedia.org/wiki/Oktaalijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_ottale',
    'ko': 'https://ko.wikipedia.org/wiki/%ED%8C%94%EC%A7%84%EB%B2%95',
  },
  '10': {
    'en': 'https://en.wikipedia.org/wiki/Decimal',
    'fi': 'https://fi.wikipedia.org/wiki/Kymmenjärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_decimale',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%A7%84%EB%B2%95',
  },
  '16': {
    'en': 'https://en.wikipedia.org/wiki/Hexadecimal',
    'fi': 'https://fi.wikipedia.org/wiki/Heksadesimaalijärjestelmä',
    'it': 'https://it.wikipedia.org/wiki/Sistema_numerico_esadecimale',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95',
  },
};
