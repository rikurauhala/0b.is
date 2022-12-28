import { NumberType } from '../types/types';

export const getPlaceholder = (mode: string): NumberType[] => {
  const placeholders: { [id: string]: NumberType[] } = {};
  placeholders['BinToDec'] = ['Binary', 'Decimal'];
  placeholders['DecToBin'] = ['Decimal', 'Binary'];
  return placeholders[mode];
};
