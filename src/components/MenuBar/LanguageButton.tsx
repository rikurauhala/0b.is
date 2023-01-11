import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import LanguageIcon from '@mui/icons-material/Language';

import { languages } from '../../languages';

import { LanguageCode } from '../../types';

import LanguageOption from './LanguageOption';

interface LanguageButtonProps {
  handleLanguageChange: (arg0: LanguageCode) => void
  language: LanguageCode
}

const LanguageButton = ({ handleLanguageChange, language }: LanguageButtonProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (languageCode: LanguageCode) => {
    handleLanguageChange(languageCode);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        edge="end"
        onClick={handleClick}
        size="large"
        sx={{ mr: 0 }}
      >
        <Tooltip title={languages['Change language'][language]}>
          <LanguageIcon />
        </Tooltip>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        <LanguageOption
          handleClose={handleClose}
          language={language}
          languageCode={'enUS'}
          languageText={languages['English'][language]}
        />
        <LanguageOption
          handleClose={handleClose}
          language={language}
          languageCode={'fiFI'}
          languageText={languages['Finnish'][language]}
        />
      </Menu>
    </>
  );
};

export default LanguageButton;
