const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^-?[01]+$');
  return regex.test(binary);
};

const validateDecimal = (decimal: string): boolean => {
  const regex = new RegExp('^-?[0-9]+(\\.?[0-9]+)*$');
  return regex.test(decimal);
};

const validateHexadecimal = (hexadecimal: string): boolean => {
  const regex = new RegExp('[0-9A-Fa-f]');
  return regex.test(hexadecimal);
};

const validate = (number: string, mode: string): boolean => {
  switch(mode) {
    case 'BinToDec':
      return validateBinary(number);
    case 'BinToHex':
      return validateBinary(number);
    case 'DecToBin':
      return validateDecimal(number);
    case 'DecToHex':
      return validateDecimal(number);
    case 'HexToBin':
      return validateHexadecimal(number);
    case 'HexToDec':
      return validateHexadecimal(number);
    default:
      return false;
  }
};

export default validate;
