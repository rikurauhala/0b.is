import { useRef } from 'react';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import ClearIcon from '@mui/icons-material/Clear';

import { NumberInputProps, Ref } from '../../types/types';

const getPlaceholder = (mode: string): string => {
  const placeholders: { [id: string]: string } = {};
  placeholders['BinToDec'] = 'Binary';
  placeholders['DecToBin'] = 'Decimal';
  return placeholders[mode];
};

const NumberInput = ({ input, mode, handleInputChange }: NumberInputProps): JSX.Element => {
  const numberInput = useRef<Ref>({ value: '' });

  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '70px',
    margin: '30px 0px 0px 0px',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style}>
      <InputBase
        inputRef={numberInput}
        onChange={event => handleInputChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        placeholder={getPlaceholder(mode)}
        sx={{ flex: 1, ml: 1 }}
      />
      {
        input.length > 0 &&
        <IconButton
          onClick={() => {
            numberInput.current.value = '';
            handleInputChange('');
          }}
        >
          <ClearIcon />
        </IconButton>
      }
    </Paper>
  );
};

export default NumberInput;
