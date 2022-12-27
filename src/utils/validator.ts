const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^-?[01]+$');
  return regex.test(binary);
};

const validateDecimal = (decimal: string): boolean => {
  const regex = new RegExp('^-?[0-9]*.?[0-9]*$');
  return regex.test(decimal);
};

const validate = (number: string, mode: string): boolean => {
  switch(mode) {
    case 'BinToDec':
      return validateBinary(number);
    case 'DecToBin':
      return validateDecimal(number);
    default:
      return false;
  }
};

export default validate;
