import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { languages } from '../../languages';

import { Language, NumeralSystem } from '../../types';

import { getNameByValue, numeralSystems } from '../../utils/systems';

interface OutputSystemSelectProps {
  handleOutputSystemChange: (arg0: NumeralSystem) => void
  inputSystem: NumeralSystem
  language: Language
  outputSystem: NumeralSystem
}

const OutputSystemSelect = (props: OutputSystemSelectProps): JSX.Element => {
  const { handleOutputSystemChange, inputSystem, language, outputSystem } = props;
  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  return (
    <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
      <InputLabel>{languages['To base'][language]}</InputLabel>
      <Select
        label={languages['To base'][language]}
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
              {getNameByValue(system, language)}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default OutputSystemSelect;
