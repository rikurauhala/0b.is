import { useEffect, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { getKeyByValue, numeralSystems } from '../../utils/systems';

import { NumberOutputProps, NumeralSystem } from '../../types/types';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

import CopyButton from './CopyButton';

const NumberOutput = (props: NumberOutputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleOutputSystemChange } = props;
  const [message, setMessage] = useState<string>('');

  const valid = validate(input, inputSystem);
  const number = convert(input, inputSystem, outputSystem);

  useEffect(() => {
    return setMessage('');
  }, [outputSystem]);

  useEffect(() => {
    if (input.length > 0) {
      if (valid) {
        setMessage(number);
      } else {
        setMessage(`Not a valid ${getKeyByValue(inputSystem).toLowerCase()} number!`);
      }
    } else {
      setMessage('');
    }
  }, [input]);

  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 1 }}>
      <TextField
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
      <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
        <InputLabel>To</InputLabel>
        <Select
          label="To"
          onChange={handleChange}
          value={outputSystem.toString()}
        >
          {
            numeralSystems.map(system => (
              <MenuItem
                disabled={system === inputSystem ? true : false}
                key={system}
                value={system}
              >
                {getKeyByValue(system)}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Stack>
  );
};

export default NumberOutput;
