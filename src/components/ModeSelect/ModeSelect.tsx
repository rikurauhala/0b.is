import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ConverterModeCode, ModeSelectProps } from '../../types/types';

const ModeSelect = ({ converterMode, handleConverterModeChange }: ModeSelectProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    handleConverterModeChange(event.target.value as ConverterModeCode);
  };

  return (
    <Box>
      <FormControl variant='filled' fullWidth>
        <InputLabel>Mode</InputLabel>
        <Select
          label='Mode'
          onChange={handleChange}
          value={converterMode}
        >
          <MenuItem value={'BinToDec'}>Binary to Decimal</MenuItem>
          <MenuItem value={'BinToHex'}>Binary to Hexadecimal</MenuItem>
          <MenuItem value={'DecToBin'}>Decimal to Binary</MenuItem>
          <MenuItem value={'DecToHex'}>Decimal to Hexadecimal</MenuItem>
          <MenuItem value={'HexToBin'}>Hexadecimal to Binary</MenuItem>
          <MenuItem value={'HexToDec'}>Hexadecimal to Decimal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModeSelect;
