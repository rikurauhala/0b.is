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
  },
  'Change language': {
    'en': 'Change language',
    'fi': 'Vaihda kieli',
  },
  'Clear': {
    'en': 'Clear',
    'fi': 'Tyhjennä',
  },
  'Contributing': {
    'en': 'Contributing',
    'fi': 'Osallistuminen',
  },
  'Copy': {
    'en': 'Copy',
    'fi': 'Kopioi',
  },
  'Decimal': {
    'en': '10 (decimal)',
    'fi': '10 (desimaali)',
  },
  'Documentation': {
    'en': 'Documentation',
    'fi': 'Dokumentaatio',
  },
  'English': {
    'en': 'English',
    'fi': 'englanti',
  },
  'Finnish': {
    'en': 'Finnish',
    'fi': 'suomi',
  },
  'From base': {
    'en': 'From base',
    'fi': 'Kantaluvusta',
  },
  'Hexadecimal': {
    'en': '16 (hexadecimal)',
    'fi': '16 (heksadesimaali)',
  },
  'Input': {
    'en': 'Input',
    'fi': 'Syöte',
  },
  'Number copied to clipboard!': {
    'en': 'Number copied to clipboard!',
    'fi': 'Numero kopioitu leikepöydälle!'
  },
  'Not a valid number!': {
    'en': 'Not a valid number!',
    'fi': 'Numero ei ole kelvollinen!'
  },
  'Octal': {
    'en': '8 (octal)',
    'fi': '8 (oktaali)',
  },
  'Output': {
    'en': 'Output',
    'fi': 'Tuloste',
  },
  'Page title': {
    'en': 'The simple number converter',
    'fi': 'Yksinkertainen lukujärjestelmämuunnin',
  },
  'Read more': {
    'en': 'Read more',
    'fi': 'Lue lisää',
  },
  'Source code': {
    'en': 'Source code',
    'fi': 'Lähdekoodi',
  },
  'To base': {
    'en': 'To base',
    'fi': 'Kantalukuun',
  },
  'Use light theme': {
    'en': 'Use light theme',
    'fi': 'Käytä vaaleaa teemaa',
  },
  'Use dark theme': {
    'en': 'Use dark theme',
    'fi': 'Käytä tummaa teemaa',
  },
  'User manual': {
    'en': 'User manual',
    'fi': 'Käyttöohje',
  },
  'Version': {
    'en': 'Version',
    'fi': 'Versio',
  },
};

export const wikiLink: Languages = {
  '2': {
    'en': 'https://en.wikipedia.org/wiki/Binary_number',
    'fi': 'https://fi.wikipedia.org/wiki/Binäärijärjestelmä',
  },
  '8': {
    'en': 'https://en.wikipedia.org/wiki/Octal',
    'fi': 'https://fi.wikipedia.org/wiki/Oktaalijärjestelmä',
  },
  '10': {
    'en': 'https://en.wikipedia.org/wiki/Decimal',
    'fi': 'https://fi.wikipedia.org/wiki/Kymmenjärjestelmä',
  },
  '16': {
    'en': 'https://en.wikipedia.org/wiki/Hexadecimal',
    'fi': 'https://fi.wikipedia.org/wiki/Heksadesimaalijärjestelmä',
  },
};
