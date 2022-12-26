import { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ModeSelect = (): JSX.Element => {
  const [mode, setMode] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Mode</InputLabel>
        <Select
          label='Mode'
          onChange={handleChange}
          value={mode}
        >
          <MenuItem value={'BinToDec'}>Binary to Decimal</MenuItem>
          <MenuItem value={'DecToBin'}>Decimal to Binary</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModeSelect;
