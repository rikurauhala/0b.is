import { useRef } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { NumberInputProps, Ref } from '../../types/types';

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const { inputSystem, handleInputChange, handleInputSystemChange } = props;

  const numberInput = useRef<Ref>({ value: '' });

  const handleChange = (event: SelectChangeEvent) => {
    handleInputSystemChange(event.target.value);
  };

  return (
    <Box>
      <TextField
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
          <MenuItem value={'Binary'}>Binary</MenuItem>
          <MenuItem value={'Decimal'}>Decimal</MenuItem>
          <MenuItem value={'Hexadecimal'}>Hexadecimal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NumberInput;
