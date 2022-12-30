import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { NumberOutputProps } from '../../types/types';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

const NumberOutput = (props: NumberOutputProps): JSX.Element => {
  const { input, inputSystem, outputSystem, handleOutputSystemChange } = props;
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const valid = validate(input, inputSystem);
  const number = convert(input, inputSystem, outputSystem);

  useEffect(() => {
    setMessage(outputSystem);
    setError(false);
  }, [outputSystem]);

  useEffect(() => {
    if (input.length > 0) {
      if (valid) {
        setMessage(number);
        setError(false);
      } else {
        setMessage(`Not a valid ${inputSystem.toLowerCase()} number!`);
        setError(true);
      }
    } else {
      setMessage(outputSystem);
      setError(false);
    }
  }, [input]);

  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value);
  };

  return (
    <Box>
      <TextField
        error={error}
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
          <MenuItem value={'Binary'}>Binary</MenuItem>
          <MenuItem value={'Decimal'}>Decimal</MenuItem>
          <MenuItem value={'Hexadecimal'}>Hexadecimal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NumberOutput;
