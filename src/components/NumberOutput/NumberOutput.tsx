import Stack from '@mui/material/Stack';

import { Language, NumeralSystem } from '../../types';

import OutputTextField from './OutputTextField';
import OutputSystemSelect from './OutputSystemSelect';

interface NumberOutputProps {
  input: string
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  handleOutputSystemChange: (arg0: NumeralSystem) => void
  language: Language
}

const NumberOutput = (props: NumberOutputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleOutputSystemChange, language } = props;

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
      <OutputTextField
        input={input}
        inputSystem={inputSystem}
        language={language}
        outputSystem={outputSystem}
      />
      <OutputSystemSelect
        inputSystem={inputSystem}
        outputSystem={outputSystem}
        language={language}
        handleOutputSystemChange={handleOutputSystemChange}
      />
    </Stack>
  );
};

export default NumberOutput;
