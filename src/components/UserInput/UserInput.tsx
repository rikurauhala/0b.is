import { useRef } from 'react';

import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import { UserInputProps, Ref } from '../../types/types';

const UserInput = ({ setUserInput }: UserInputProps) => {
  const userInput = useRef<Ref>({ value: '' });

  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '45px',
    margin: '30px 5px',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style}>
      <InputBase
        inputRef={userInput}
        onChange={event => setUserInput(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        placeholder='Binary'
        sx={{ color: '#fff', flex: 1, ml: 1 }}
      />
    </Paper>
  );
};

export default UserInput;
