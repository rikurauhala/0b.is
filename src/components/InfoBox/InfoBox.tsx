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
    2: [ContentBinary, 'Binary_number'],
    8: [ContentOctal, 'Octal'],
    10: [ContentDecimal, 'Decimal'],
    16: [ContentHexadecimal, 'Hexadecimal'],
  };

  useEffect(() => {
    fetch(options[system][0])
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
      <ReadMoreButton language={language} system={options[system][1]} />
    </Paper>
  );
};

export default InfoBox;
