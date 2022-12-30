import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { numeralSystems } from '../../utils/systems';

import { NumberInputProps, Ref } from '../../types/types';

import validate from '../../utils/validate';

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const { input, inputSystem, handleInputChange, handleInputSystemChange } = props;

  const [error, setError] = useState<boolean>(false);

  const numberInput = useRef<Ref>({ value: '' });

  const handleChange = (event: SelectChangeEvent) => {
    handleInputSystemChange(event.target.value);
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
    <Box>
      <TextField
        error={error}
        inputRef={numberInput}
        label='Input'
        onChange={event => handleInputChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        sx={{ width: '70%' }}
      />
      <FormControl sx={{ width: '30%' }}>
        <InputLabel>From</InputLabel>
        <Select
          label='From'
          onChange={handleChange}
          value={inputSystem}
        >
          {
            numeralSystems.map(system => (
              <MenuItem key={system} value={system}>{system}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default NumberInput;
