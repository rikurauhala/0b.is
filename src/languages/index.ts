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
    'ko': '2 (2진법)',
  },
  'Change language': {
    'en': 'Change language',
    'fi': 'Vaihda kieli',
    'ko': '언어 변환',
  },
  'Clear': {
    'en': 'Clear',
    'fi': 'Tyhjennä',
    'ko': '초기화',
  },
  'Contributing': {
    'en': 'Contributing',
    'fi': 'Osallistuminen',
    'ko': '컨트리뷰트',
  },
  'Copy': {
    'en': 'Copy',
    'fi': 'Kopioi',
    'ko': '복사',
  },
  'Decimal': {
    'en': '10 (decimal)',
    'fi': '10 (desimaali)',
    'ko': '10 (십진법)',
  },
  'Documentation': {
    'en': 'Documentation',
    'fi': 'Dokumentaatio',
    'ko': '문서',
  },
  'English': {
    'en': 'English',
    'fi': 'englanti',
    'ko': '영어',
  },
  'Finnish': {
    'en': 'Finnish',
    'fi': 'suomi',
    'ko': '핀란드어',
  },
  'From base': {
    'en': 'From base',
    'fi': 'Kantaluvusta',
    'ko': '입력',
  },
  'Hexadecimal': {
    'en': '16 (hexadecimal)',
    'fi': '16 (heksadesimaali)',
    'ko': '16 (16진법)',
  },
  'Input': {
    'en': 'Input',
    'fi': 'Syöte',
    'ko': '입력값',
  },
  'Number copied to clipboard!': {
    'en': 'Number copied to clipboard!',
    'fi': 'Numero kopioitu leikepöydälle!',
    'ko': '복사 완료',
  },
  'Not a valid number!': {
    'en': 'Not a valid number!',
    'fi': 'Numero ei ole kelvollinen!',
    'ko': '유효한 숫자가 아닙니다.',
  },
  'Octal': {
    'en': '8 (octal)',
    'fi': '8 (oktaali)',
    'ko': '8 (8진법)',
  },
  'Output': {
    'en': 'Output',
    'fi': 'Tuloste',
    'ko': '결과값',
  },
  'Page title': {
    'en': 'The simple number converter',
    'fi': 'Yksinkertainen lukujärjestelmämuunnin',
    'ko': '진법 변환기',
  },
  'Read more': {
    'en': 'Read more',
    'fi': 'Lue lisää',
    'ko': '더보기',
  },
  'Source code': {
    'en': 'Source code',
    'fi': 'Lähdekoodi',
    'ko': '소스 코드',
  },
  'To base': {
    'en': 'To base',
    'fi': 'Kantalukuun',
    'ko': '결과',
  },
  'Use light theme': {
    'en': 'Use light theme',
    'fi': 'Käytä vaaleaa teemaa',
    'ko': '라이트 모드',
  },
  'Use dark theme': {
    'en': 'Use dark theme',
    'fi': 'Käytä tummaa teemaa',
    'ko': '나이트 모드',
  },
  'User manual': {
    'en': 'User manual',
    'fi': 'Käyttöohje',
    'ko': '메뉴얼',
  },
  'Version': {
    'en': 'Version',
    'fi': 'Versio',
    'ko': '버전',
  },
};

export const wikiLink: Languages = {
  '2': {
    'en': 'https://en.wikipedia.org/wiki/Binary_number',
    'fi': 'https://fi.wikipedia.org/wiki/Binäärijärjestelmä',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84%EB%B2%95',
  },
  '8': {
    'en': 'https://en.wikipedia.org/wiki/Octal',
    'fi': 'https://fi.wikipedia.org/wiki/Oktaalijärjestelmä',
    'ko': 'https://ko.wikipedia.org/wiki/%ED%8C%94%EC%A7%84%EB%B2%95',
  },
  '10': {
    'en': 'https://en.wikipedia.org/wiki/Decimal',
    'fi': 'https://fi.wikipedia.org/wiki/Kymmenjärjestelmä',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%A7%84%EB%B2%95',
  },
  '16': {
    'en': 'https://en.wikipedia.org/wiki/Hexadecimal',
    'fi': 'https://fi.wikipedia.org/wiki/Heksadesimaalijärjestelmä',
    'ko': 'https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95',
  },
};
