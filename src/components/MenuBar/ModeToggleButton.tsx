import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface ModeToggleButtonProps {
  darkMode: boolean
  handleThemeChange: () => void
}

const ModeToggleButton = ({ darkMode, handleThemeChange }: ModeToggleButtonProps): JSX.Element => (
  <IconButton
    color="inherit"
    edge="end"
    onClick={handleThemeChange}
    size="large"
    sx={{ mr: 0 }}
  >
    <Tooltip title={darkMode ? 'Use light theme' : 'Use dark theme'}>
      {darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
    </Tooltip>
  </IconButton>
);

export default ModeToggleButton;
