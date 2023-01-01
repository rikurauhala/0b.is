import '@testing-library/jest-dom/extend-expect';

import { NumeralSystem } from '../types/types';

import convert from './convert';

describe('convert', () => {
  const testGeneral = (inputs: {[key: string]: string}, from: NumeralSystem, to: NumeralSystem) => {
    for (const [input, output] of Object.entries(inputs)) {
      const positive = convert(input, from, to);
      expect(positive).toBe(output);
      const negative = convert('-'.concat(input), from, to);
      expect(negative).toBe('-'.concat(output));
    }
  };

  const testZero = (from: NumeralSystem, to: NumeralSystem) => {
    const positive = convert('0', from, to);
    expect(positive).toBe('0');
    const negative = convert('-0', from, to);
    expect(negative).toBe('0');
  };

  test('binary to decimal', () => {
    const inputs = {
      '1': '1',
      '01': '1',
      '10': '2',
      '11': '3',
      '100': '4',
      '101': '5',
      '110': '6',
      '111': '7',
      '1000': '8',
      '0000010100100010011000': '84120',
      '10000000000000000000000000000000': '2147483648',
    };
    testZero(NumeralSystem.Binary, NumeralSystem.Decimal);
    testGeneral(inputs, NumeralSystem.Binary, NumeralSystem.Decimal);
  });

  test('decimal to binary', () => {
    const inputs = {
      '1': '1',
      '2': '10',
      '3': '11',
      '4': '100',
      '5': '101',
      '6': '110',
      '7': '111',
      '8': '1000',
      '99': '1100011',
      '123456789': '111010110111100110100010101',
    };
    testZero(NumeralSystem.Decimal, NumeralSystem.Binary);
    testGeneral(inputs, NumeralSystem.Decimal, NumeralSystem.Binary);
  });

  test('decimal to hexadecimal', () => {
    const inputs = {
      '1': '1',
      '2': '2',
      '3': '3',
      '9': '9',
      '10': 'A',
      '11': 'B',
      '12': 'C',
      '13': 'D',
      '14': 'E',
      '15': 'F',
      '16': '10',
      '17': '11',
      '31': '1F',
      '32': '20',
      '123456789': '75BCD15',
    };
    testZero(NumeralSystem.Decimal, NumeralSystem.Hexadecimal);
    testGeneral(inputs, NumeralSystem.Decimal, NumeralSystem.Hexadecimal);
  });
});
