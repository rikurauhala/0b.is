import { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export interface FooterButtonProps {
  icon: ReactElement
  text: string
  url: string
}

const FooterButton = ({ icon, text, url }: FooterButtonProps): JSX.Element => (
  <Grid item md={3} textAlign="center" xs={6}>
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
