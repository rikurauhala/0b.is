import { languages } from '../languages';

import { Language, NumeralSystem } from '../types';

export const getNameByValue = (value: NumeralSystem, language: Language): string => {
  return languages[NumeralSystem[value]][language];
};

export const numeralSystems: NumeralSystem[] = [
  NumeralSystem.Binary,
  NumeralSystem.Octal,
  NumeralSystem.Decimal,
  NumeralSystem.Hexadecimal,
];
