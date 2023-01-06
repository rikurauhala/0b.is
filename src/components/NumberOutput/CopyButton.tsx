import { useState } from 'react';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyButton = ({ output }: { output: string }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    void navigator.clipboard.writeText(output);
  };

  return (
    <>
      <Tooltip placement='left' title='Copy'>
        <IconButton onClick={handleClick}>
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Alert onClose={() => setOpen(false)} severity='success'>
          Number copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CopyButton;
