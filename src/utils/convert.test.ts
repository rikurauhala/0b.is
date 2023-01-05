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

  test('binary to octal', () => {
    const inputs = {
      '1': '1',
      '01': '1',
      '10': '2',
      '11': '3',
      '100': '4',
      '101': '5',
      '110': '6',
      '111': '7',
      '1000': '10',
      '1001': '11',
      '1010': '12',
      '1011': '13',
      '1100': '14',
      '1101': '15',
      '1110': '16',
      '1111': '17',
      '10000': '20',
      '100000': '40',
      '1000000': '100',
      '0000010100100010011000': '244230',
      '10000000000000000000000000000000': '20000000000',
    };
    testZero(NumeralSystem.Binary, NumeralSystem.Octal);
    testGeneral(inputs, NumeralSystem.Binary, NumeralSystem.Octal);
  });

  test('binary to hexadecimal', () => {
    const inputs = {
      '1': '1',
      '10': '2',
      '11': '3',
      '1001': '9',
      '1010': 'A',
      '1011': 'B',
      '1100': 'C',
      '1101': 'D',
      '1110': 'E',
      '1111': 'F',
      '10000': '10',
      '10001': '11',
      '11111': '1F',
      '100000': '20',
      '111010110111100110100010101': '75BCD15',
    };
    testZero(NumeralSystem.Binary, NumeralSystem.Hexadecimal);
    testGeneral(inputs, NumeralSystem.Binary, NumeralSystem.Hexadecimal);
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

  test('decimal to octal', () => {
    const inputs = {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '10',
      '9': '11',
      '10': '12',
      '11': '13',
      '12': '14',
      '13': '15',
      '14': '16',
      '15': '17',
      '16': '20',
      '17': '21',
      '99': '143',
      '123456789': '726746425',
    };
    testZero(NumeralSystem.Decimal, NumeralSystem.Octal);
    testGeneral(inputs, NumeralSystem.Decimal, NumeralSystem.Octal);
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

  test('hexadecimal to binary', () => {
    const inputs = {
      '1': '1',
      '2': '10',
      '3': '11',
      '9': '1001',
      'A': '1010',
      'B': '1011',
      'C': '1100',
      'D': '1101',
      'E': '1110',
      'F': '1111',
      '10': '10000',
      '11': '10001',
      '1F': '11111',
      '20': '100000',
      '75BCD15': '111010110111100110100010101',
    };
    testZero(NumeralSystem.Hexadecimal, NumeralSystem.Binary);
    testGeneral(inputs, NumeralSystem.Hexadecimal, NumeralSystem.Binary);
  });

  test('hexadecimal to octal', () => {
    const inputs = {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '10',
      '9': '11',
      'A': '12',
      'B': '13',
      'C': '14',
      'D': '15',
      'E': '16',
      'F': '17',
      '10': '20',
      '11': '21',
    };
    testZero(NumeralSystem.Hexadecimal, NumeralSystem.Octal);
    testGeneral(inputs, NumeralSystem.Hexadecimal, NumeralSystem.Octal);
  });

  test('hexadecimal to decimal', () => {
    const inputs = {
      '1': '1',
      '2': '2',
      '3': '3',
      '9': '9',
      'A': '10',
      'B': '11',
      'C': '12',
      'D': '13',
      'E': '14',
      'F': '15',
      '10': '16',
      '11': '17',
      '1F': '31',
      '20': '32',
      '75BCD15': '123456789',
    };
    testZero(NumeralSystem.Hexadecimal, NumeralSystem.Decimal);
    testGeneral(inputs, NumeralSystem.Hexadecimal, NumeralSystem.Decimal);
  });
});
