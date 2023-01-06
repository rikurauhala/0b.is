import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import ReactMarkdown from 'react-markdown';

import { InfoBoxProps } from '../../types/types';

import ContentBinary from './content/binary.md';
import ContentOctal from './content/octal.md';
import ContentDecimal from './content/decimal.md';
import ContentHexadecimal from './content/hexadecimal.md';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const InfoBox = ({ system }: InfoBoxProps): JSX.Element => {
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
    <Paper variant='outlined' sx={{ 'padding': '0px 15px 15px 15px', 'width': '1', }}>
      <Content content={content} />
      <ReadMoreLink system={options[system][1]} />
    </Paper>
  );
};

const Content = ({ content }: { content: string }): JSX.Element => (
  <ReactMarkdown>
    {content}
  </ReactMarkdown>
);

const ReadMoreLink = ({ system }: { system: string }): JSX.Element => (
  <Button
    color='primary'
    href={`https://en.wikipedia.org/wiki/${system}`}
    startIcon={<ReadMoreIcon />}
    target='_blank'
  >
    Read more
  </Button>
);

export default InfoBox;
