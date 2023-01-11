import { NumeralSystem } from '../types';

/**
 * Validates a binary number.
 *
 * @param {string} binary The number to be validated.
 * @return {boolean} Validity of the input number.
 */
const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^-?[01]+$');
  return regex.test(binary);
};

/**
 * Validates an octal number.
 *
 * @param {string} octal The number to be validated.
 * @return {boolean} Validity of the input number.
 */
const validateOctal = (octal: string): boolean => {
  const regex = new RegExp('^-?[0-7]+$');
  return regex.test(octal);
};

/**
 * Validates a decimal number.
 *
 * @param {string} decimal The number to be validated.
 * @return {boolean} Validity of the input number.
 */
const validateDecimal = (decimal: string): boolean => {
  const regex = new RegExp('^-?[0-9]+(\\.?[0-9]+)*$');
  return regex.test(decimal);
};

/**
 * Validates a hexadecimal number.
 *
 * @param {string} hexadecimal The number to be validated.
 * @return {boolean} Validity of the input number.
 */
const validateHexadecimal = (hexadecimal: string): boolean => {
  const regex = new RegExp('^-?[0-9A-F]+$');
  return regex.test(hexadecimal.toUpperCase());
};

/**
 * Validates a number.
 *
 * Supported systems:
 * - Base 2 (binary)
 * - Base 8 (octal)
 * - Base 10 (decimal)
 * - Base 16 (hexadecimal)
 * @param {string} number The number to be validated.
 * @param {NumeralSystem} inputSystem Input numeral system, base X.
 * @return {boolean} Validity of the input number.
 */
const validate = (number: string, inputSystem: NumeralSystem): boolean => {
  switch(inputSystem) {
    case NumeralSystem.Binary:
      return validateBinary(number);
    case NumeralSystem.Octal:
      return validateOctal(number);
    case NumeralSystem.Decimal:
      return validateDecimal(number);
    case NumeralSystem.Hexadecimal:
      return validateHexadecimal(number);
  }
};

export default validate;
