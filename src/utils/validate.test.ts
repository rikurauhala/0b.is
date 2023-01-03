import '@testing-library/jest-dom/extend-expect';

import { NumeralSystem } from '../types/types';

import validate from './validate';

describe('validate', () => {
  const testGeneral = (system: NumeralSystem) => {
    for (const [input, expectedValidity] of Object.entries(inputs)) {
      const positive = validate(input, system);
      expect(positive).toBe(expectedValidity[system]);
      const negative = validate(`-${input}`, system);
      expect(negative).toBe(expectedValidity[system]);
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

const inputs = {
  '0': {
    '2': true,
    '8': true,
    '10': true,
    '16': true,
  },
  '1': {
    '2': true,
    '8': true,
    '10': true,
    '16': true,
  },
  '2': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '3': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '4': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '5': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '6': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '7': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '8': {
    '2': false,
    '8': false,
    '10': true,
    '16': true,
  },
  '9': {
    '2': false,
    '8': false,
    '10': true,
    '16': true,
  },
  '10': {
    '2': true,
    '8': true,
    '10': true,
    '16': true,
  },
  '11': {
    '2': true,
    '8': true,
    '10': true,
    '16': true,
  },
  '12': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '13': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '14': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '15': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '16': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '17': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  '18': {
    '2': false,
    '8': false,
    '10': true,
    '16': true,
  },
  '19': {
    '2': false,
    '8': false,
    '10': true,
    '16': true,
  },
  '20': {
    '2': false,
    '8': true,
    '10': true,
    '16': true,
  },
  'A': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'B': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'C': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'D': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'E': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'F': {
    '2': false,
    '8': false,
    '10': false,
    '16': true,
  },
  'G': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'H': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'I': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'J': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'K': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'L': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'M': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'N': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'O': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'P': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'Q': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'R': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'S': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'T': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'U': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'V': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'W': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'X': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'Y': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
  'Z': {
    '2': false,
    '8': false,
    '10': false,
    '16': false,
  },
};
