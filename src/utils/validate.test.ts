import '@testing-library/jest-dom/extend-expect';

import validate from './validate';

describe('validate', () => {
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
    };

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const valid = validate(input, 'Binary');
      expect(valid).toBe(expectedOutput);
    }
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

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const valid = validate(input, 'Decimal');
      expect(valid).toBe(expectedOutput);
    }
  });
});
