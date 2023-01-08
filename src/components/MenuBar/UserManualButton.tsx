import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import HelpIcon from '@mui/icons-material/Help';

const UserManualButton = (): JSX.Element => (
  <IconButton
    color="inherit"
    edge="end"
    href="https://github.com/rikurauhala/0b.is/wiki/User-Manual"
    size="large"
    target="_blank"
  >
    <Tooltip title="User manual">
      <HelpIcon />
    </Tooltip>
  </IconButton>
);

export default UserManualButton;
