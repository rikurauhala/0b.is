import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

import { LanguageCode } from '../../types';

interface LanguageOptionProps {
  handleClose: (arg0: LanguageCode) => void
  language: string
  languageCode: LanguageCode
  languageText: string
}

const LanguageOption = (props: LanguageOptionProps): JSX.Element => {
  const { handleClose, language, languageCode, languageText } = props;
  return (
    <MenuItem
      key={languageCode}
      onClick={() => handleClose(languageCode)}
      selected={language === languageCode ? true : false}
    >
      <ListItemText>
        {languageText}
      </ListItemText>
    </MenuItem>
  );
};

export default LanguageOption;
