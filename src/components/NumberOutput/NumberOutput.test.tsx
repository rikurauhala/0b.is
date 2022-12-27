import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import NumberOutput from './NumberOutput';

describe('<NumberOutput />', () => {
  test('binary to decimal', () => {
    const errorMessage = 'Not a valid binary number!';
    const inputs = {
      '0': '0',
      '1': '1',
      '01': '1',
      '10': '2',
      '-0': '0',
      '-1': '-1',
      '0000010100100010011000': '84120',
      '10000000000000000000000000000000': '2147483648',
      '2': errorMessage,
      'string': errorMessage,
      '123': errorMessage,
    };

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const { container } = render(
        <NumberOutput input={input} mode='BinToDec' />
      );
      const div = container.querySelector('.output');
      expect(div).toBeDefined();
      expect(div).toHaveTextContent(expectedOutput);
    }
  });

  test('decimal to binary', () => {
    const errorMessage = 'Not a valid decimal number!';
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
      'abc': errorMessage,
    };

    for (const [input, expectedOutput] of Object.entries(inputs)) {
      const { container } = render(
        <NumberOutput input={input} mode='DecToBin' />
      );
      const div = container.querySelector('.output');
      expect(div).toBeDefined();
      expect(div).toHaveTextContent(expectedOutput);
    }
  });
});
