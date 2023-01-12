import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ReadMoreIcon from '@mui/icons-material/ReadMore';

import { languages } from '../../../languages';
import { Language } from '../../../types';

interface ReadMoreButtonProps {
  language: Language
  system: string
}

const ReadMoreButton = ({ language, system }: ReadMoreButtonProps): JSX.Element => (
  <Box sx={{ bottom: 0, position: 'absolute' }}>
    <Button
      color="primary"
      href={`https://en.wikipedia.org/wiki/${system}`}
      startIcon={<ReadMoreIcon />}
      sx={{ marginBottom: '10px' }}
      target="_blank"
    >
      {languages['Read more'][language]}
    </Button>
  </Box>
);

export default ReadMoreButton;
