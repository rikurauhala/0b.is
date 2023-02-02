import { Language } from '../types';

import links from './links.json';
import translations from './translations.json';

type Languages = {
  [key: string]: {
    [key in Language]: string
  }
};

export const languages: Languages = translations;
export const wikiLink: Languages = links;
