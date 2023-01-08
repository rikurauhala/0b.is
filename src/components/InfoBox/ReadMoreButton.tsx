import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ReadMoreIcon from '@mui/icons-material/ReadMore';

interface ReadMoreButtonProps {
  system: string
}

const ReadMoreButton = ({ system }: ReadMoreButtonProps): JSX.Element => (
  <Box sx={{ bottom: 0, position: 'absolute' }}>
    <Button
      color="primary"
      href={`https://en.wikipedia.org/wiki/${system}`}
      startIcon={<ReadMoreIcon />}
      target="_blank"
      sx={{ marginBottom: '10px' }}
    >
      Read more
    </Button>
  </Box>
);

export default ReadMoreButton;
