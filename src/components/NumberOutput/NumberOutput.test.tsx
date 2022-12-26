import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import NumberOutput from './NumberOutput';

describe('<NumberOutput />', () => {
  test('test output with different inputs', () => {
    const inputs = {
      '0': '0',
      '1': '1',
      '01': '1',
      '10': '2',
      '-0': '0',
      '-1': '-1',
      '0000010100100010011000': '84120',
      '10000000000000000000000000000000': '2147483648',
      '2': 'Not a valid binary number!',
      'string': 'Not a valid binary number!',
      '123': 'Not a valid binary number!',
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
});
