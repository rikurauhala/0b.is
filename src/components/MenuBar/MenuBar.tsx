import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import CodeIcon from '@mui/icons-material/Code';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { MenuBarProps } from '../../types/types';

const MenuBar = ({ darkMode, handleThemeChange }: MenuBarProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CodeIcon sx={{ mr: 2 }}/>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            0b.is
          </Typography>
          <IconButton
            color='inherit'
            edge='end'
            onClick={handleThemeChange}
            size='large'
          >
            <Tooltip title={darkMode ? 'Use light theme' : 'Use dark theme'}>
              {
                darkMode
                  ? <LightModeIcon />
                  : <DarkModeIcon />
              }
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
