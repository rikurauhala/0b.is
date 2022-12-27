import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import convert from '../../utils/convert';
import validate from '../../utils/validate';

import CopyButton from './CopyButton';

import { NumberOutputProps } from '../../types/types';

import { getOutputPlaceholder } from '../../utils/placeholder';

const NumberOutput = ({ input, mode }: NumberOutputProps): JSX.Element => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const valid = validate(input, mode);
  const number = convert(input, mode);

  useEffect(() => {
    setMessage(getOutputPlaceholder(mode));
  }, [mode]);

  useEffect(() => {
    if (input.length > 0) {
      if (valid) {
        setMessage(number.toString());
        setError(false);
      } else {
        setMessage('Not a valid binary number!');
        setError(true);
      }
    } else {
      setMessage(getOutputPlaceholder(mode));
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
