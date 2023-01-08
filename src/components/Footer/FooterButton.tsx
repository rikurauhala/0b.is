import { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export interface FooterButtonProps {
  url: string
  text: string
  icon: ReactElement
}

const FooterButton = ({ url, text, icon }: FooterButtonProps): JSX.Element => (
  <Grid item xs={6} md={3} textAlign="center">
    <Button
      color="secondary"
      href={url}
      size="small"
      startIcon={icon}
      target="_blank"
    >
      {text}
    </Button>
  </Grid>
);

export default FooterButton;
