import '@testing-library/jest-dom/extend-expect';

import { Language } from '../types';

import { getNameByValue, numeralSystems } from './systems';

describe('systems', () => {
  test('list has correct number of items', () => {
    const actualItems = numeralSystems.length;
    const expectedItems = 4;
    expect(actualItems).toBe(expectedItems);
  });

  test('key can be retrieved by value', () => {
    const binary = getNameByValue(2, Language.English);
    expect(binary).toBe('2 (binary)');
    const octal = getNameByValue(8, Language.English);
    expect(octal).toBe('8 (octal)');
    const decimal = getNameByValue(10, Language.English);
    expect(decimal).toBe('10 (decimal)');
    const hexadecimal = getNameByValue(16, Language.English);
    expect(hexadecimal).toBe('16 (hexadecimal)');
  });
});
