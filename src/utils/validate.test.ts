import '@testing-library/jest-dom/extend-expect';

import { NumeralSystem } from '../types/types';

import validate from './validate';

describe('validate', () => {
  const testGeneral = (inputs: {[key: string]: boolean}, system: NumeralSystem) => {
    for (const [input, expectedValidity] of Object.entries(inputs)) {
      const validity = validate(input, system);
      expect(validity).toBe(expectedValidity);
    }
  };

  test('binary numbers', () => {
    const inputs = {
      '0': true,
      '1': true,
      '01': true,
      '10': true,
      '-0': true,
      '-1': true,
      '0000010100100010011000': true,
      '10000000000000000000000000000000': true,
      '2': false,
      'string': false,
      '123': false,
      ' ': false,
    };
    testGeneral(inputs, NumeralSystem.Binary);
  });

  test('decimal numbers', () => {
    const inputs = {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '99': true,
      '-0': true,
      '-1': true,
      'abc': false,
      '1a2': false,
      '1.': false,
      '-1.': false,
      '-1a': false,
      ' ': false,
    };
    testGeneral(inputs, NumeralSystem.Decimal);
  });
});
