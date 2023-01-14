import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import { languages } from '../../languages';

import { Language } from '../../types';

import FooterButton from './FooterButton';

interface FooterProps {
  language: Language
}

const Footer = ({ language }: FooterProps): JSX.Element => {
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
          icon={<GitHubIcon />}
          text={languages['Source code'][language]}
          url={urlSourceCode}
        />
        <FooterButton
          icon={<DescriptionIcon />}
          text={languages['Documentation'][language]}
          url={urlDocumentation}
        />
        <FooterButton
          icon={<VolunteerActivismIcon />}
          text={languages['Contributing'][language]}
          url={urlContributing}
        />
        <FooterButton
          icon={<InfoIcon />}
          text={`${languages['Version'][language]} 1.2.0`}
          url={urlChangelog}
        />
      </Grid>
    </Container>
  );
};

export default Footer;
