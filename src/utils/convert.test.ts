import '@testing-library/jest-dom/extend-expect';

import convert from './convert';

describe('convert', () => {
  test('binary to decimal', () => {
    const inputs = {
      '0': '0',
      '1': '1',
      '01': '1',
      '10': '2',
      '-0': '0',
      '-1': '-1',
      '0000010100100010011000': '84120',
      '10000000000000000000000000000000': '2147483648',
    };

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const valid = convert(input, 'Binary', 'Decimal');
      expect(valid).toBe(expectedOutput);
    }
  });

  test('decimal to binary', () => {
    const inputs = {
      '0': '0',
      '1': '1',
      '2': '10',
      '3': '11',
      '4': '100',
      '5': '101',
      '6': '110',
      '7': '111',
      '99': '1100011',
      '-0': '0',
      '-1': '-1',
    };

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const valid = convert(input, 'Decimal', 'Binary');
      expect(valid).toBe(expectedOutput);
    }
  });
});
