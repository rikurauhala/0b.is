import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

import CopyButton from './CopyButton';

import { NumberOutputProps } from '../../types/types';

import { getPlaceholder } from '../../utils/placeholder';

const NumberOutput = ({ input, mode }: NumberOutputProps): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const valid = validate(input, mode);
  const number = convert(input, mode);

  useEffect(() => {
    setMessage(getPlaceholder(mode)[1]);
    setError(false);
  }, [mode]);

  useEffect(() => {
    if (input.length > 0) {
      if (valid) {
        setMessage(number);
        setError(false);
      } else {
        setMessage(`Not a valid ${getPlaceholder(mode)[0].toLowerCase()} number!`);
        setError(true);
      }
    } else {
      setMessage(getPlaceholder(mode)[1]);
      setError(false);
    }
  }, [input]);

  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '70px',
    margin: '30px 0px 0px 0px',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style} className='output'>
      <Typography color={error ? 'error' : ''} style={{ flex: '1', marginLeft: '10px' }}>
        {
          message
        }
      </Typography>
      {
        input.length > 0 && valid && <CopyButton output={number} />
      }
    </Paper>
  );
};

export default NumberOutput;
