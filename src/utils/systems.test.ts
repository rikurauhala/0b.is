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
    expect(binary).toBe('Binary');
    const octal = getNameByValue(8, Language.English);
    expect(octal).toBe('Octal');
    const decimal = getNameByValue(10, Language.English);
    expect(decimal).toBe('Decimal');
    const hexadecimal = getNameByValue(16, Language.English);
    expect(hexadecimal).toBe('Hexadecimal');
  });
});
