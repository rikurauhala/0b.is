type NumberType = 'Binary' | 'Decimal';

export const getInputPlaceholder = (mode: string): NumberType => {
  const placeholders: { [id: string]: NumberType } = {};
  placeholders['BinToDec'] = 'Binary';
  placeholders['DecToBin'] = 'Decimal';
  return placeholders[mode];
};

export const getOutputPlaceholder = (mode: string): string => {
  const placeholders: { [id: string]: string } = {};
  placeholders['BinToDec'] = 'Decimal';
  placeholders['DecToBin'] = 'Binary';
  return placeholders[mode];
};
