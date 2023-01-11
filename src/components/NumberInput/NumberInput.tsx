import Stack from '@mui/material/Stack';

import { NumeralSystem } from '../../types';

import InputSystemSelect from './InputSystemSelect';
import InputTextField from './InputTextField';

interface NumberInputProps {
  input: string
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  handleInputChange: (arg0: string) => void
  handleInputSystemChange: (arg0: NumeralSystem) => void
}

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleInputChange, handleInputSystemChange } = props;

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
      <InputTextField
        input={input}
        inputSystem={inputSystem}
        handleChange={handleInputChange}
      />
      <InputSystemSelect
        inputSystem={inputSystem}
        outputSystem={outputSystem}
        handleInputSystemChange={handleInputSystemChange}
      />
    </Stack>
  );
};

export default NumberInput;
