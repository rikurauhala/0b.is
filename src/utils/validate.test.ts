import '@testing-library/jest-dom';

import { NumeralSystem } from '../types';

import validate from './validate';

import { inputs } from './testInputs';

describe('validate', () => {
  const testGeneral = (system: NumeralSystem) => {
    for (const [input, output] of Object.entries(inputs)) {
      const expectedValidity = output[system];
      const positive = validate(input, system);
      expect(positive).toBe(expectedValidity);
      const negative = validate(`-${input}`, system);
      expect(negative).toBe(expectedValidity);
    }
  };

  test('binary', () => {
    testGeneral(NumeralSystem.Binary);
  });

  test('octal', () => {
    testGeneral(NumeralSystem.Octal);
  });

  test('decimal', () => {
    testGeneral(NumeralSystem.Decimal);
  });

  test('hexadecimal', () => {
    testGeneral(NumeralSystem.Hexadecimal);
  });
});
