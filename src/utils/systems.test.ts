import '@testing-library/jest-dom/extend-expect';

import { getKeyByValue, numeralSystems } from './systems';

describe('systems', () => {
  test('list has correct number of items', () => {
    const actualItems = numeralSystems.length;
    const expectedItems = 3;
    expect(actualItems).toBe(expectedItems);
  });

  test('key can be retrieved by value', () => {
    const binary = getKeyByValue(2);
    expect(binary).toBe('Binary');
    const decimal = getKeyByValue(10);
    expect(decimal).toBe('Decimal');
    const hexadecimal = getKeyByValue(16);
    expect(hexadecimal).toBe('Hexadecimal');
  });
});
