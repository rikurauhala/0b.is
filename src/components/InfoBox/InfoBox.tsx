import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import ReactMarkdown from 'react-markdown';

import { InfoBoxProps } from '../../types/types';

import ContentBinary from './content/binary.md';
import ContentOctal from './content/octal.md';
import ContentDecimal from './content/decimal.md';
import ContentHexadecimal from './content/hexadecimal.md';

const InfoBox = ({ system }: InfoBoxProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const options = {
      2: ContentBinary,
      8: ContentOctal,
      10: ContentDecimal,
      16: ContentHexadecimal,
    };
    fetch(options[system])
      .then(content => content.text())
      .then(text => setContent(text))
      .catch(error => console.error(error));
  }, [system]);

  return (
    <Paper variant='outlined' sx={{ 'padding': '0px 15px', 'width': '1', }}>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </Paper>
  );
};

export default InfoBox;
