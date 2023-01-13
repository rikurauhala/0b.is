import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

import ReactCountryFlag from 'react-country-flag';

import { Language } from '../../../../types';

interface LanguageOptionProps {
  flag: string
  handleClose: (arg0: Language) => void
  language: string
  languageCode: Language
  languageText: string
}

const LanguageOption = (props: LanguageOptionProps): JSX.Element => {
  const { flag, handleClose, language, languageCode, languageText } = props;
  return (
    <MenuItem
      key={languageCode}
      onClick={() => handleClose(languageCode)}
      selected={language === languageCode ? true : false}
    >
      <ListItemIcon>
        <ReactCountryFlag countryCode={flag} />
      </ListItemIcon>
      <ListItemText>
        {languageText}
      </ListItemText>
    </MenuItem>
  );
};

export default LanguageOption;
