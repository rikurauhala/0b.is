import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import { Language, NumeralSystem } from '../../types';

import ContentBinary from './content/binary.md';
import ContentOctal from './content/octal.md';
import ContentDecimal from './content/decimal.md';
import ContentHexadecimal from './content/hexadecimal.md';

import InfoBoxContent from './InfoBoxContent';
import ReadMoreButton from './ReadMoreButton';

interface InfoBoxProps {
  language: Language
  system: NumeralSystem
}

const InfoBox = ({ language, system }: InfoBoxProps): JSX.Element => {
  const [content, setContent] = useState('');

  const options = {
    2: ContentBinary,
    8: ContentOctal,
    10: ContentDecimal,
    16: ContentHexadecimal,
  };

  useEffect(() => {
    fetch(options[system])
      .then(content => content.text())
      .then(text => setContent(text))
      .catch(error => console.error(error));
  }, [system]);

  return (
    <Paper
      sx={{ padding: '0px 15px 35px 15px', position: 'relative', width: '1' }}
      variant="outlined"
    >
      <InfoBoxContent content={content} />
      <ReadMoreButton language={language} system={system} />
    </Paper>
  );
};

export default InfoBox;
