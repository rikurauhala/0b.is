import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

interface LanguageOptionProps {
  handleClose: () => void
  language: string
  languageCode: string
  languageText: string
}

const LanguageOption = (props: LanguageOptionProps): JSX.Element => {
  const { handleClose, language, languageCode, languageText } = props;
  return (
    <MenuItem
      onClick={handleClose}
      selected={language === languageCode ? true : false}
      value={languageCode}
    >
      <ListItemText>
        {languageText}
      </ListItemText>
    </MenuItem>
  );
};

export default LanguageOption;
