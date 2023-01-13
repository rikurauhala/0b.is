import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ReadMoreIcon from '@mui/icons-material/ReadMore';

import { languages, wikiLink } from '../../../languages';
import { Language, NumeralSystem } from '../../../types';

interface ReadMoreButtonProps {
  language: Language
  system: NumeralSystem
}

const ReadMoreButton = ({ language, system }: ReadMoreButtonProps): JSX.Element => (
  <Box sx={{ bottom: 0, position: 'absolute' }}>
    <Button
      color="primary"
      href={wikiLink[system][language]}
      startIcon={<ReadMoreIcon />}
      sx={{ marginBottom: '10px' }}
      target="_blank"
    >
      {languages['Read more'][language]}
    </Button>
  </Box>
);

export default ReadMoreButton;
