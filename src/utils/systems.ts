import { NumeralSystem } from '../types/types';

export const getKeyByValue = (value: NumeralSystem): string => {
  return NumeralSystem[value];
};

export const numeralSystems: NumeralSystem[] = [
  NumeralSystem.Binary,
  NumeralSystem.Decimal,
  NumeralSystem.Hexadecimal,
];
