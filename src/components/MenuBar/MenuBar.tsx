import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import CodeIcon from '@mui/icons-material/Code';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';

import { MenuBarProps } from '../../types/types';

const MenuBar = ({ darkMode, handleThemeChange }: MenuBarProps): JSX.Element => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <LogoPlaceholder />
          <PageTitle />
          <ModeToggleButton darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <UserManualButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LogoPlaceholder = (): JSX.Element => (
  <CodeIcon sx={{ mr: 2 }}/>
);

const PageTitle = (): JSX.Element => (
  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
    0b.is
  </Typography>
);

const ModeToggleButton = ({ darkMode, handleThemeChange }: MenuBarProps): JSX.Element => (
  <IconButton
    color='inherit'
    edge='end'
    onClick={handleThemeChange}
    size='large'
    sx={{ mr: 0 }}
  >
    <Tooltip title={darkMode ? 'Use light theme' : 'Use dark theme'}>
      {
        darkMode
          ? <LightModeIcon />
          : <DarkModeIcon />
      }
    </Tooltip>
  </IconButton>
);

const UserManualButton = (): JSX.Element => (
  <IconButton
    color='inherit'
    edge='end'
    href='https://github.com/rikurauhala/0b.is/wiki/User-Manual'
    size='large'
    target='_blank'
  >
    <Tooltip title='User manual'>
      <HelpIcon />
    </Tooltip>
  </IconButton>
);

export default MenuBar;
