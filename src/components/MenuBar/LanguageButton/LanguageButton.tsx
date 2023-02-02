import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import LanguageIcon from '@mui/icons-material/Language';

import { languages } from '../../../languages';

import { Language } from '../../../types';

import LanguageOption from './LanguageOption';

interface LanguageButtonProps {
  handleLanguageChange: (arg0: Language) => void
  language: Language
}

const LanguageButton = ({ handleLanguageChange, language }: LanguageButtonProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (languageCode: Language) => {
    if (Object.values(Language).includes(languageCode)) {
      handleLanguageChange(languageCode);
    }
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
          flag="US"
          handleClose={handleClose}
          language={language}
          languageCode={Language.English}
          languageText="English"
        />
        <LanguageOption
          flag="FI"
          handleClose={handleClose}
          language={language}
          languageCode={Language.Finnish}
          languageText="suomi"
        />
        <LanguageOption
          flag="IT"
          handleClose={handleClose}
          language={language}
          languageCode={Language.Italian}
          languageText="Italiano"
        />
        <LanguageOption
          flag="KR"
          handleClose={handleClose}
          language={language}
          languageCode={Language.Korean}
          languageText="한국어"
        />
        <LanguageOption
          flag="SE"
          handleClose={handleClose}
          language={language}
          languageCode={Language.Swedish}
          languageText="svenska"
        />
      </Menu>
    </>
  );
};

export default LanguageButton;
