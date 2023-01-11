import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { languages } from '../../languages';

import { LanguageCode } from '../../types';

interface ModeToggleButtonProps {
  darkMode: boolean
  handleThemeChange: () => void
  language: LanguageCode
}

const ModeToggleButton = (props: ModeToggleButtonProps): JSX.Element => {
  const { darkMode, handleThemeChange, language } = props;
  return (
    <IconButton
      color="inherit"
      edge="end"
      onClick={handleThemeChange}
      size="large"
      sx={{ marginRight: 0 }}
    >
      <Tooltip
        title={
          darkMode
            ? languages['Use light theme'][language]
            : languages['Use dark theme'][language]
        }
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
      </Tooltip>
    </IconButton>
  );
};

export default ModeToggleButton;
