const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^-?[01]+$');
  return regex.test(binary);
};

const validate = (number: string, mode: string): boolean => {
  switch(mode) {
    case 'BinToDec':
      return validateBinary(number);
    default:
      return false;
  }
};

export default validate;
