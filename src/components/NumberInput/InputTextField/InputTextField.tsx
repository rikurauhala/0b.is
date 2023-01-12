import { useEffect, useRef, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import ClearIcon from '@mui/icons-material/Clear';

import { languages } from '../../../languages';

import { Language, NumeralSystem } from '../../../types';

import validate from '../../../utils/validate';

interface InputTextFieldProps {
  input: string
  inputSystem: NumeralSystem
  language: Language
  handleChange: (arg0: string) => void
}

interface Ref {
  value: string
}

const InputTextField = (props: InputTextFieldProps): JSX.Element => {
  const { input, inputSystem, language, handleChange } = props;
  const [error, setError] = useState<boolean>(false);

  const numberInput = useRef<Ref>({ value: '' });

  const valid = validate(input, inputSystem);

  useEffect(() => {
    if ((input.length > 0) && !(valid)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [input]);

  return (
    <TextField
      error={error}
      helperText={error ? languages['Not a valid number!'][language] : ' '}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            {
              input.length > 0 &&
              <Tooltip placement="left" title={languages['Clear'][language]}>
                <IconButton
                  onClick={() => {
                    numberInput.current.value = '';
                    handleChange('');
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            }
          </InputAdornment>,
      }}
      inputRef={numberInput}
      label={languages['Input'][language]}
      onChange={event => handleChange(event.target.value)}
      onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
      sx={{ width: { sm: '100%', md: '70%' } }}
    />
  );
};

export default InputTextField;
