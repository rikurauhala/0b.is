import { LanguageCode } from '../types/types';

type LanguagesType = {
  [key: string]: {
    [key in LanguageCode]: string
  }
};

export const languages: LanguagesType = {
  'Change language': {
    'enUS': 'Change language',
    'fiFI': 'Vaihda kieli',
  },
  'Contributing': {
    'enUS': 'Contributing',
    'fiFI': 'Osallistuminen',
  },
  'Documentation': {
    'enUS': 'Documentation',
    'fiFI': 'Dokumentaatio',
  },
  'English': {
    'enUS': 'English',
    'fiFI': 'englanti',
  },
  'Finnish': {
    'enUS': 'Finnish',
    'fiFI': 'suomi',
  },
  'Source code': {
    'enUS': 'Source code',
    'fiFI': 'Lähdekoodi',
  },
  'Use light theme': {
    'enUS': 'Use light theme',
    'fiFI': 'Käytä vaaleaa teemaa',
  },
  'Use dark theme': {
    'enUS': 'Use dark theme',
    'fiFI': 'Käytä tummaa teemaa',
  },
  'User manual': {
    'enUS': 'User manual',
    'fiFI': 'Käyttöohje',
  },
  'Version': {
    'enUS': 'Version',
    'fiFI': 'Versio',
  },
};
