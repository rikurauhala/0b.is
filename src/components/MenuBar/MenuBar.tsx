import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AppName from './AppName';
import LanguageButton from './LanguageButton';
import LogoPlaceholder from './LogoPlaceholder';
import ModeToggleButton from './ModeToggleButton';
import UserManualButton from './UserManualButton';

import { LanguageCode } from '../../types';

interface MenuBarProps {
  darkMode: boolean
  handleLanguageChange: (arg0: LanguageCode) => void
  handleThemeChange: () => void
  language: LanguageCode
}

const MenuBar = (props: MenuBarProps): JSX.Element => {
  const { darkMode, handleLanguageChange, handleThemeChange, language } = props;
  return (
    <AppBar enableColorOnDark color="primary" position="static">
      <Toolbar>
        <LogoPlaceholder />
        <AppName />
        <ModeToggleButton
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          language={language}
        />
        <LanguageButton
          handleLanguageChange={handleLanguageChange}
          language={language}
        />
        <UserManualButton
          language={language}
        />
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
