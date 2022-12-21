import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { binaryToDecimal } from '../../utils/converter';

const NumberOutput = ({ input }: { input: string }) => {
  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '45px',
    margin: '30px 5px',
    padding: '2px 4px'
  };

  const decimal = binaryToDecimal(input);

  return (
    <Paper component='form' style={style}>
      <Typography style={{ marginLeft: '10px' }}>
        {
          input.length > 0
            ? decimal
            : 'Decimal'
        }
      </Typography>
    </Paper>
  );
};

export default NumberOutput;
