import { NumeralSystem } from '../types/types';

const convert = (number: string, input: NumeralSystem, output: NumeralSystem): string => {
  return parseInt(number, input).toString(output).toUpperCase();
};

export default convert;
