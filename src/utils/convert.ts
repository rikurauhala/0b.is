const binaryToDecimal = (binary: string): string => {
  const decimal: string = parseInt(binary, 2).toString();
  return decimal;
};

const decimalToBinary = (decimal: string): string => {
  const binary: string = parseInt(decimal).toString(2);
  return binary;
};

const binaryToHexadecimal = (binary: string): string => {
  const hexadecimal: string = parseInt(binary, 2).toString(16).toUpperCase();
  return hexadecimal;
};

const hexadecimalToBinary = (hexadecimal: string): string => {
  const binary: string = hexadecimal.split('').map(i => parseInt(i, 16).toString(2).padStart(4, '0')).join('');
  return binary;
};

const convert = (number: string, mode: string): string => {
  switch(mode) {
    case 'BinToDec':
      return binaryToDecimal(number);
    case 'BinToHex':
      return binaryToHexadecimal(number);
    case 'DecToBin':
      return decimalToBinary(number);
    case 'DecToHex':
      return binaryToHexadecimal(decimalToBinary(number));
    case 'HexToBin':
      return hexadecimalToBinary(number);
    case 'HexToDec':
      return binaryToDecimal(hexadecimalToBinary(number));
    default:
      return 'Error';
  }
};

export default convert;
