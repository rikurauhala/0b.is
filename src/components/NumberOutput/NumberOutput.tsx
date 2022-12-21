import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const NumberOutput = ({ input }: { input: string }) => {
  const style = {
    alignItems: 'center',
    display: 'flex',
    height: '45px',
    margin: '30px 5px',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style}>
      <Typography style={{ marginLeft: '10px' }}>
        {
          input.length > 0
            ? input
            : 'Decimal'
        }
      </Typography>
    </Paper>
  );
};

export default NumberOutput;
