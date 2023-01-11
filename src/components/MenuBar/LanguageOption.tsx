import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

interface LanguageOptionProps {
  handleClose: (arg0: string) => void
  language: string
  languageCode: string
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
