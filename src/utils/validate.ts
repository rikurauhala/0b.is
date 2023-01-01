import { NumeralSystem } from '../types/types';

const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^-?[01]+$');
  return regex.test(binary);
};

const validateDecimal = (decimal: string): boolean => {
  const regex = new RegExp('^-?[0-9]+(\\.?[0-9]+)*$');
  return regex.test(decimal);
};

const validateHexadecimal = (hexadecimal: string): boolean => {
  const regex = new RegExp('^[0-9A-Fa-f]+$');
  return regex.test(hexadecimal);
};

const validate = (number: string, inputSystem: NumeralSystem): boolean => {
  switch(inputSystem) {
    case NumeralSystem.Binary:
      return validateBinary(number);
    case NumeralSystem.Decimal:
      return validateDecimal(number);
    case NumeralSystem.Hexadecimal:
      return validateHexadecimal(number);
  }
};

export default validate;
