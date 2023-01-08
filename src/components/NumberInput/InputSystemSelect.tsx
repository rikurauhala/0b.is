import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { numeralSystems, getKeyByValue } from '../../utils/systems';

import { NumeralSystem } from '../../types/types';

interface InputSystemSelectProps {
  inputSystem: NumeralSystem
  handleInputSystemChange: (arg0: NumeralSystem) => void
}

const InputSystemSelect = (props: InputSystemSelectProps): JSX.Element => {
  const { inputSystem, handleInputSystemChange } = props;

  const handleChange = (event: SelectChangeEvent) => {
    handleInputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  return (
    <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
      <InputLabel>From</InputLabel>
      <Select
        label="From"
        onChange={handleChange}
        value={inputSystem.toString()}
      >
        {numeralSystems.map(system => (
          <MenuItem key={system} value={system}>
            {getKeyByValue(system)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSystemSelect;
