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

const convert = (number: string, inputSystem: string, outputSystem: string): string => {
  switch(inputSystem) {
    case 'Binary':
      switch(outputSystem) {
        case 'Decimal':
          return binaryToDecimal(number);
        case 'Hexadecimal':
          return binaryToHexadecimal(number);
        default:
          return 'Error';
      }
    case 'Decimal':
      switch(outputSystem) {
        case 'Binary':
          return decimalToBinary(number);
        case 'Hexadecimal':
          return binaryToHexadecimal(decimalToBinary(number));
        default:
          return 'Error';
      }
    case 'Hexadecimal':
      switch(outputSystem) {
        case 'Binary':
          return hexadecimalToBinary(number);
        case 'Decimal':
          return binaryToDecimal(hexadecimalToBinary(number));
        default:
          return 'Error';
      }
    default:
      return 'Error';
  }
};

export default convert;
