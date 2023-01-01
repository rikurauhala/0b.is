import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { InfoBoxProps } from '../../types/types';

import { getKeyByValue } from '../../utils/systems';

const InfoBox = ({ system }: InfoBoxProps) => {
  const style = {
    'margin': 'auto',
    'padding': '15px',
    'width': '1',
  };

  return (
    <Paper elevation={1} variant='outlined' sx={style}>
      <Typography variant='h5'>
        {getKeyByValue(system)}
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tellus augue.
        Integer ultrices justo sollicitudin sapien consectetur, nec sagittis purus imperdiet.
        Maecenas pellentesque ornare odio, quis ornare lacus aliquam non. Aliquam a rhoncus lectus.
        Quisque aliquet libero nec imperdiet cursus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras in dolor quis metus interdum lacinia. Quisque id lobortis diam,
        porta laoreet sapien. Vivamus quis arcu porta, tristique metus at, fermentum magna.
        Sed laoreet posuere mattis. Aliquam sed mauris non turpis pretium molestie mattis nec nisl.
        Integer a nibh maximus, iaculis diam ac, vehicula lorem. Nulla facilisi.
      </Typography>
    </Paper>
  );
};

export default InfoBox;
