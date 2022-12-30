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

const validate = (number: string, inputSystem: string): boolean => {
  switch(inputSystem) {
    case 'Binary':
      return validateBinary(number);
    case 'Decimal':
      return validateDecimal(number);
    case 'Hexadecimal':
      return validateHexadecimal(number);
    default:
      return false;
  }
};

export default validate;
