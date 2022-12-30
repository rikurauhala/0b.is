import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { numeralSystems } from '../../utils/systems';

import { NumberOutputProps, NumeralSystem } from '../../types/types';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

const NumberOutput = (props: NumberOutputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleOutputSystemChange } = props;
  const [message, setMessage] = useState<string>('');

  const valid = validate(input, inputSystem);
  const number = convert(input, inputSystem, outputSystem);

  useEffect(() => {
    setMessage(outputSystem);
  }, [outputSystem]);

  useEffect(() => {
    if (input.length > 0) {
      if (valid) {
        setMessage(number);
      } else {
        setMessage(`Not a valid ${inputSystem.toLowerCase()} number!`);
      }
    } else {
      setMessage(outputSystem);
    }
  }, [input]);

  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value as NumeralSystem);
  };

  return (
    <Box>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        label='Output'
        sx={{ width: '70%' }}
        value={message}
      />
      <FormControl sx={{ width: '30%' }}>
        <InputLabel>To</InputLabel>
        <Select
          label='To'
          onChange={handleChange}
          value={outputSystem}
        >
          {
            numeralSystems.map(system => (
              <MenuItem
                disabled={system === inputSystem ? true : false}
                key={system}
                value={system}
              >
                {system}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default NumberOutput;
