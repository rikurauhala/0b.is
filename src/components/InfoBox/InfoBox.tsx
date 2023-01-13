/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import { Language, NumeralSystem } from '../../types';

import enUS2 from './content/2/enUS.md';
import fiFI2 from './content/2/fiFI.md';
import enUS8 from './content/8/enUS.md';
import fiFI8 from './content/8/fiFI.md';
import enUS10 from './content/10/enUS.md';
import fiFI10 from './content/10/fiFI.md';
import enUS16 from './content/16/enUS.md';
import fiFI16 from './content/16/fiFI.md';

import InfoBoxContent from './InfoBoxContent';
import ReadMoreButton from './ReadMoreButton';

interface InfoBoxProps {
  language: Language
  system: NumeralSystem
}

const InfoBox = ({ language, system }: InfoBoxProps): JSX.Element => {
  const [content, setContent] = useState('');

  type FileDictionary = {
    [key in NumeralSystem]: {
      [key in Language]: string
    }
  };

  const file: FileDictionary = {
    2: {
      'enUS': enUS2,
      'fiFI': fiFI2,
    },
    8: {
      'enUS': enUS8,
      'fiFI': fiFI8,
    },
    10: {
      'enUS': enUS10,
      'fiFI': fiFI10,
    },
    16: {
      'enUS': enUS16,
      'fiFI': fiFI16,
    },
  };

  useEffect(() => {
    fetch(file[system][language])
      .then(content => content.text())
      .then(text => setContent(text))
      .catch(error => console.error(error));
  }, [language, system]);

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
