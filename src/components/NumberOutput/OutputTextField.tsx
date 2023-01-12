import { useEffect, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { languages } from '../../languages';

import { Language, NumeralSystem } from '../../types';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

import CopyButton from './CopyButton';

interface OuputTextFieldProps {
  input: string
  inputSystem: NumeralSystem
  language: Language
  outputSystem: NumeralSystem
}

const OutputTextField = (props: OuputTextFieldProps): JSX.Element => {
  const { input, inputSystem, language, outputSystem } = props;
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
      setMessage(languages['Not a valid number!'][language]);
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
            {input.length > 0 && valid && <CopyButton language={language} output={number} />}
          </InputAdornment>,
        readOnly: true,
      }}
      label={languages['Output'][language]}
      sx={{ width: { sm: '100%', md: '70%' } }}
      value={message}
    />
  );
};

export default OutputTextField;
