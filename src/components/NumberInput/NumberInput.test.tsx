import {render, screen} from '@testing-library/react'
import { NumeralSystem } from '../../types/types'
import NumberInput from './NumberInput'

const inputLabel = 'Input'
const errorBinaryLabel = 'Not a valid binary number!'
const errorDecimalLabel = 'Not a valid decimal number!'
const errorHexadecimalLabel = 'Not a valid hexadecimal number!'
const mockHandleInputChange = (arg0: string) => {}
const mockHandleInputSystemChange = (arg0: NumeralSystem) => {}

describe('Render NumberInput - validation tests', () => {
	test('Validate binary number - invalid value', async () => {
		render(
			<NumberInput
				input={'1234'}
				inputSystem={2}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.getByText(errorBinaryLabel)).toBeInTheDocument()
	})

	test('Validate binary number - valid value', async () => {
		render(
			<NumberInput
				input={'1111'}
				inputSystem={2}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.queryByText(errorBinaryLabel)).not.toBeInTheDocument()
	})

	test('Validate decimal number - invalid value', async () => {
		render(
			<NumberInput
				input={'1F'}
				inputSystem={10}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.getByText(errorDecimalLabel)).toBeInTheDocument()
	})

	test('Validate decimal number - valid value', async () => {
		render(
			<NumberInput
				input={'10'}
				inputSystem={10}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.queryByText(errorDecimalLabel)).not.toBeInTheDocument()
	})

	test('Validate hexadecimal number - invalid value', async () => {
		render(
			<NumberInput
				input={'1T'}
				inputSystem={16}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.getByText(errorHexadecimalLabel)).toBeInTheDocument()
	})

	test('Validate hexadecimal number - valid value', async () => {
		render(
			<NumberInput
				input={'1'}
				inputSystem={16}
				handleInputChange={mockHandleInputChange}
				handleInputSystemChange={mockHandleInputSystemChange}
			/>
		)
		expect(screen.getByLabelText(inputLabel)).toBeInTheDocument()
		expect(screen.queryByText(errorHexadecimalLabel)).not.toBeInTheDocument()
	})
})