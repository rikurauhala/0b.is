import { useEffect, useRef, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import ClearIcon from '@mui/icons-material/Clear';

import { getKeyByValue, numeralSystems } from '../../utils/systems';

import { NumberInputProps, NumeralSystem, Ref } from '../../types/types';

import validate from '../../utils/validate';

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const { input, inputSystem, handleInputChange, handleInputSystemChange } = props;

  const [error, setError] = useState<boolean>(false);

  const numberInput = useRef<Ref>({ value: '' });

  const handleChange = (event: SelectChangeEvent) => {
    handleInputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  const valid = validate(input, inputSystem);

  useEffect(() => {
    if ((input.length > 0) && !(valid)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [input]);

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 1 }}>
      <TextField
        error={error}
        helperText={error ? `Not a valid ${getKeyByValue(inputSystem).toLowerCase()} number!` : ''}
        InputProps={{
          endAdornment:
            <InputAdornment position='end'>
              {
                input.length > 0 &&
                <IconButton
                  onClick={() => {
                    numberInput.current.value = '';
                    handleInputChange('');
                  }}
                >
                  <ClearIcon />
                </IconButton>
              }
            </InputAdornment>,
        }}
        inputRef={numberInput}
        label='Input'
        onChange={event => handleInputChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        sx={{ width: { sm: '100%', md: '70%' } }}
      />
      <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
        <InputLabel>From</InputLabel>
        <Select
          label='From'
          onChange={handleChange}
          value={inputSystem.toString()}
        >
          {
            numeralSystems.map(system => (
              <MenuItem key={system} value={system}>
                {getKeyByValue(system)}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Stack>
  );
};

export default NumberInput;
