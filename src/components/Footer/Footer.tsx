import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import FooterButton from './FooterButton';

const Footer = (): JSX.Element => {
  const urlSourceCode = 'https://github.com/rikurauhala/0b.is';
  const urlDocumentation = `${urlSourceCode}/wiki`;
  const urlContributing = `${urlSourceCode}/blob/main/CONTRIBUTING.md`;
  const urlChangelog = `${urlSourceCode}/wiki/Changelog`;

  return (
    <Container sx={{ bottom: '0', left: '0', padding: '15px', position: 'relative' }}>
      <Divider sx={{ marginBottom: '20px' }} />
      <Grid
        alignItems="center"
        container
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 0.5, md: 0 }}
      >
        <FooterButton
          url={urlSourceCode}
          text="Source code"
          icon={<GitHubIcon />}
        />
        <FooterButton
          url={urlDocumentation}
          text="Documentation"
          icon={<DescriptionIcon />}
        />
        <FooterButton
          url={urlContributing}
          text="Contributing"
          icon={<VolunteerActivismIcon />}
        />
        <FooterButton
          url={urlChangelog}
          text="Version 1.1.2"
          icon={<InfoIcon />}
        />
      </Grid>
    </Container>
  );
};

export default Footer;
