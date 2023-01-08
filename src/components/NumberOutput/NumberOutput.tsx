import Stack from '@mui/material/Stack';

import { NumeralSystem } from '../../types/types';

import OutputTextField from './OutputTextField';
import OutputSystemSelect from './OutputSystemSelect';

interface NumberOutputProps {
  input: string
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  handleOutputSystemChange: (arg0: NumeralSystem) => void
}

const NumberOutput = (props: NumberOutputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleOutputSystemChange } = props;

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
      <OutputTextField
        input={input}
        inputSystem={inputSystem}
        outputSystem={outputSystem}
      />
      <OutputSystemSelect
        inputSystem={inputSystem}
        outputSystem={outputSystem}
        handleOutputSystemChange={handleOutputSystemChange}
      />
    </Stack>
  );
};

export default NumberOutput;
