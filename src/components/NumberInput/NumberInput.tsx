import Stack from '@mui/material/Stack';

import { Language, NumeralSystem } from '../../types';

import InputSystemSelect from './InputSystemSelect';
import InputTextField from './InputTextField';

interface NumberInputProps {
  handleInputChange: (arg0: string) => void
  handleInputSystemChange: (arg0: NumeralSystem) => void
  input: string
  inputSystem: NumeralSystem
  language: Language
  outputSystem: NumeralSystem
}

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const {
    handleInputChange,
    handleInputSystemChange,
    input,
    inputSystem,
    language,
    outputSystem,
  } = props;

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
      <InputTextField
        handleChange={handleInputChange}
        input={input}
        inputSystem={inputSystem}
        language={language}
      />
      <InputSystemSelect
        handleInputSystemChange={handleInputSystemChange}
        inputSystem={inputSystem}
        language={language}
        outputSystem={outputSystem}
      />
    </Stack>
  );
};

export default NumberInput;
