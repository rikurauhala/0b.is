import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AppName from './AppName';
import LanguageButton from './LanguageButton';
import LogoPlaceholder from './LogoPlaceholder';
import ModeToggleButton from './ModeToggleButton';
import UserManualButton from './UserManualButton';

import { Language } from '../../types';

interface MenuBarProps {
  darkMode: boolean
  handleLanguageChange: (arg0: Language) => void
  handleThemeChange: () => void
  language: Language
}

const MenuBar = (props: MenuBarProps): JSX.Element => {
  const { darkMode, handleLanguageChange, handleThemeChange, language } = props;
  return (
    <AppBar color="primary" enableColorOnDark position="static">
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
