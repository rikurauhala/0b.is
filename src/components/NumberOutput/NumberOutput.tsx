import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { NumberOutputProps } from '../../types/types';

const NumberOutput = ({ input, outputSystem, handleOutputSystemChange }: NumberOutputProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value);
  };

  return (
    <Box>
      <TextField
        label='Output'
        sx={{width: '70%'}}
        value={input}
      />
      <FormControl sx={{width: '30%'}}>
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
