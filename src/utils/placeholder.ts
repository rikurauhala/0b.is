import { ConverterModeCode, NumberType } from '../types/types';

export const getPlaceholder = (mode: ConverterModeCode): NumberType[] => {
  const placeholders: { [id in ConverterModeCode]: NumberType[] } = {
    BinToDec: ['Binary', 'Decimal'],
    BinToHex: ['Binary', 'Hexadecimal'],
    DecToBin: ['Decimal', 'Binary'],
    DecToHex: ['Decimal', 'Hexadecimal'],
    HexToBin: ['Hexadecimal', 'Binary'],
    HexToDec: ['Hexadecimal', 'Decimal']
  };
  return placeholders[mode];
};
