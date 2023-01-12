import { useState } from 'react';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { languages } from '../../languages';

import { Language } from '../../types';

interface CopyButtonProps {
  output: string
  language: Language
}

const CopyButton = ({ output, language }: CopyButtonProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    void navigator.clipboard.writeText(output);
  };

  return (
    <>
      <Tooltip placement="left" title={languages['Copy'][language]}>
        <IconButton onClick={handleClick}>
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          {languages['Number copied to clipboard!'][language]}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CopyButton;
