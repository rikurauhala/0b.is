import { useEffect, useRef, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import ClearIcon from '@mui/icons-material/Clear';

import { NumeralSystem, Ref } from '../../types';
import { getKeyByValue } from '../../utils/systems';

import validate from '../../utils/validate';

interface InputTextFieldProps {
  input: string
  inputSystem: NumeralSystem
  handleChange: (arg0: string) => void
}

const InputTextField = ({ input, inputSystem, handleChange }: InputTextFieldProps): JSX.Element => {
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
      helperText={error ? `Not a valid ${getKeyByValue(inputSystem).toLowerCase()} number!` : ' '}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            {
              input.length > 0 &&
              <Tooltip placement="left" title="Clear">
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
      label="Input"
      onChange={event => handleChange(event.target.value)}
      onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
      sx={{ width: { sm: '100%', md: '70%' } }}
    />
  );
};

export default InputTextField;
