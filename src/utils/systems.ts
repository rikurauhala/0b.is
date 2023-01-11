import { NumeralSystem } from '../types';

export const getKeyByValue = (value: NumeralSystem): string => {
  return NumeralSystem[value];
};

export const numeralSystems: NumeralSystem[] = [
  NumeralSystem.Binary,
  NumeralSystem.Octal,
  NumeralSystem.Decimal,
  NumeralSystem.Hexadecimal,
];
