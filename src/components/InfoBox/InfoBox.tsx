import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import { Language, NumeralSystem } from '../../types';

import en2 from './content/2/en.md';
import fi2 from './content/2/fi.md';
import it2 from './content/2/it.md';
import ko2 from './content/2/ko.md';

import en8 from './content/8/en.md';
import fi8 from './content/8/fi.md';
import it8 from './content/8/it.md';
import ko8 from './content/8/ko.md';

import en10 from './content/10/en.md';
import fi10 from './content/10/fi.md';
import it10 from './content/10/it.md';
import ko10 from './content/10/ko.md';

import en16 from './content/16/en.md';
import fi16 from './content/16/fi.md';
import it16 from './content/16/it.md';
import ko16 from './content/16/ko.md';

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
      'en': en2,
      'fi': fi2,
      'it': it2,
      'ko': ko2,
    },
    8: {
      'en': en8,
      'fi': fi8,
      'it': it8,
      'ko': ko8,
    },
    10: {
      'en': en10,
      'fi': fi10,
      'it': it10,
      'ko': ko10,
    },
    16: {
      'en': en16,
      'fi': fi16,
      'it': it16,
      'ko': ko16,
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
