import { NumeralSystem } from '../types';

/**
 * Converts a number from base X to base Y.
 *
 * Supported systems:
 * - Base 2 (binary)
 * - Base 8 (octal)
 * - Base 10 (decimal)
 * - Base 16 (hexadecimal)
 * @param {string} number The number to be converted.
 * @param {NumeralSystem} input Input numeral system, base X.
 * @param {NumeralSystem} output Output numeral system, base Y.
 * @return {string} The converted number.
 */
const convert = (number: string, input: NumeralSystem, output: NumeralSystem): string => {
  return parseInt(number, input).toString(output).toUpperCase();
};

export default convert;
