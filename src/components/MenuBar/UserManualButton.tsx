import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import HelpIcon from '@mui/icons-material/Help';

import { languages } from '../../languages';

import { LanguageCode } from '../../types';

interface UserManualButtonProps {
  language: LanguageCode
}

const UserManualButton = ({ language }: UserManualButtonProps): JSX.Element => (
  <IconButton
    color="inherit"
    edge="end"
    href="https://github.com/rikurauhala/0b.is/wiki/User-Manual"
    size="large"
    target="_blank"
  >
    <Tooltip title={languages['User manual'][language]}>
      <HelpIcon />
    </Tooltip>
  </IconButton>
);

export default UserManualButton;
