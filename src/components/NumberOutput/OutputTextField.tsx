import { useEffect, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { getKeyByValue } from '../../utils/systems';

import { NumeralSystem } from '../../types';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

import CopyButton from './CopyButton';

interface OuputTextFieldProps {
  input: string
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
}

const OutputTextField = (props: OuputTextFieldProps): JSX.Element => {
  const { input, inputSystem, outputSystem } = props;
  const [message, setMessage] = useState<string>('');

  const valid = validate(input, inputSystem);
  const number = convert(input, inputSystem, outputSystem);

  useEffect(() => {
    return setMessage('');
  }, [outputSystem]);

  useEffect(() => {
    if (input.length === 0) {
      setMessage('');
      return;
    }
    if (!valid) {
      setMessage(`Not a valid ${getKeyByValue(inputSystem).toLowerCase()} number!`);
      return;
    }
    setMessage(number);
  }, [input]);

  return (
    <TextField
      helperText=" "
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            {input.length > 0 && valid && <CopyButton output={number} />}
          </InputAdornment>,
        readOnly: true,
      }}
      label="Output"
      sx={{ width: { sm: '100%', md: '70%' } }}
      value={message}
    />
  );
};

export default OutputTextField;
