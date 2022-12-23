import { useRef } from 'react';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import ClearIcon from '@mui/icons-material/Clear';

import { NumberInputProps, Ref } from '../../types/types';

const NumberInput = ({ input, setNumberInput }: NumberInputProps): JSX.Element => {
  const numberInput = useRef<Ref>({ value: '' });

  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '100px',
    margin: '30px 5px 0px 5px',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style}>
      <InputBase
        inputRef={numberInput}
        onChange={event => setNumberInput(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        placeholder='Binary'
        sx={{ flex: 1, ml: 1 }}
      />
      { input.length > 0 &&
        <IconButton
          onClick={() => {
            numberInput.current.value = '';
            setNumberInput('');
          }}
        >
          <ClearIcon />
        </IconButton>
      }
    </Paper>
  );
};

export default NumberInput;
