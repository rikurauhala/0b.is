import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { languages } from '../../../languages';

import { numeralSystems, getNameByValue } from '../../../utils/systems';

import { Language, NumeralSystem } from '../../../types';

interface InputSystemSelectProps {
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  language: Language
  handleInputSystemChange: (arg0: NumeralSystem) => void
}

const InputSystemSelect = (props: InputSystemSelectProps): JSX.Element => {
  const { inputSystem, outputSystem, language, handleInputSystemChange } = props;

  const handleChange = (event: SelectChangeEvent) => {
    handleInputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  return (
    <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
      <InputLabel>{languages['From base'][language]}</InputLabel>
      <Select
        label={languages['From base'][language]}
        onChange={handleChange}
        value={inputSystem.toString()}
      >
        {numeralSystems.map(system => (
          <MenuItem
            disabled={system === outputSystem ? true : false}
            key={system}
            value={system}
          >
            {getNameByValue(system, language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSystemSelect;
