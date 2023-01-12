/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/require-await */

import { render, screen } from '@testing-library/react';

import NumberInput from './NumberInput';

import { Language, NumeralSystem } from '../../types';

const inputLabel = 'Input';
const errorLabel = 'Not a valid number!';
const mockHandleInputChange = (_arg0: string) => {};
const mockHandleInputSystemChange = (_arg0: NumeralSystem) => {};

describe('Render NumberInput - validation tests', () => {
  test('Validate binary number - invalid value', async () => {
    render(
      <NumberInput
        input={'1234'}
        inputSystem={2}
        outputSystem={10}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.getByText(errorLabel)).toBeInTheDocument();
  });

  test('Validate binary number - valid value', async () => {
    render(
      <NumberInput
        input={'1111'}
        inputSystem={2}
        outputSystem={10}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.queryByText(errorLabel)).not.toBeInTheDocument();
  });

  test('Validate decimal number - invalid value', async () => {
    render(
      <NumberInput
        input={'1F'}
        inputSystem={10}
        outputSystem={16}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.getByText(errorLabel)).toBeInTheDocument();
  });

  test('Validate decimal number - valid value', async () => {
    render(
      <NumberInput
        input={'10'}
        inputSystem={10}
        outputSystem={16}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.queryByText(errorLabel)).not.toBeInTheDocument();
  });

  test('Validate hexadecimal number - invalid value', async () => {
    render(
      <NumberInput
        input={'1T'}
        inputSystem={16}
        outputSystem={2}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.getByText(errorLabel)).toBeInTheDocument();
  });

  test('Validate hexadecimal number - valid value', async () => {
    render(
      <NumberInput
        input={'1'}
        inputSystem={16}
        outputSystem={2}
        language={Language.English}
        handleInputChange={mockHandleInputChange}
        handleInputSystemChange={mockHandleInputSystemChange}
      />
    );
    expect(screen.getByLabelText(inputLabel)).toBeInTheDocument();
    expect(screen.queryByText(errorLabel)).not.toBeInTheDocument();
  });
});
