import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AppName from './AppName';
import LogoPlaceholder from './LogoPlaceholder';
import ModeToggleButton from './ModeToggleButton';
import UserManualButton from './UserManualButton';

interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

const MenuBar = ({ darkMode, handleThemeChange }: MenuBarProps): JSX.Element => (
  <AppBar enableColorOnDark color="primary" position="static">
    <Toolbar>
      <LogoPlaceholder />
      <AppName />
      <ModeToggleButton darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <UserManualButton />
    </Toolbar>
  </AppBar>
);

export default MenuBar;
