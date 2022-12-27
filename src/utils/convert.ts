const binaryToDecimal = (binary: string): string => {
  const decimal: string = parseInt(binary, 2).toString();
  return decimal;
};

const decimalToBinary = (decimal: string): string => {
  const binary: string = parseInt(decimal).toString(2);
  return binary;
};

const convert = (number: string, mode: string): string => {
  switch(mode) {
    case 'BinToDec':
      return binaryToDecimal(number);
    case 'DecToBin':
      return decimalToBinary(number);
    default:
      return 'Error';
  }
};

export default convert;
