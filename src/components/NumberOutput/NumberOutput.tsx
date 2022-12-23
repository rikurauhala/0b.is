import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { binaryToDecimal } from '../../utils/converter';
import { validateBinary } from '../../utils/validator';

import CopyButton from './CopyButton';

const NumberOutput = ({ input }: { input: string }): JSX.Element => {
  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '80px',
    margin: '30px 5px 0px 5px',
    padding: '2px 4px'
  };

  const valid = validateBinary(input);
  const decimal = binaryToDecimal(input);

  return (
    <Paper component='form' style={style} className='output'>
      <Typography style={{ flex: '1', marginLeft: '10px' }}>
        {
          input.length > 0
            ? valid
              ? decimal
              : 'Not a valid binary number!'
            : 'Decimal'
        }
      </Typography>
      {
        input.length > 0 && valid && <CopyButton output={decimal.toString()} />
      }
    </Paper>
  );
};

export default NumberOutput;
