/* eslint-disable max-len */
import { NumeralSystem } from '../types/types';

const convert = (number: string, inputSystem: NumeralSystem, outputSystem: NumeralSystem): string => {
  return parseInt(number, inputSystem).toString(outputSystem);
};

export default convert;
