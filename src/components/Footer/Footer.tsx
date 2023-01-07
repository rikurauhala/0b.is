import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { FooterLinkProps } from '../../types/types';

const FooterLink = ({ url, text, icon }: FooterLinkProps) => (
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

const Footer = () => {
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
        <FooterLink
          url={urlSourceCode}
          text="Source code"
          icon={<GitHubIcon />}
        />
        <FooterLink
          url={urlDocumentation}
          text="Documentation"
          icon={<ArticleIcon />}
        />
        <FooterLink
          url={urlContributing}
          text="Contributing"
          icon={<InfoIcon />}
        />
        <FooterLink
          url={urlChangelog}
          text="Version 1.0.0"
          icon={<LogoDevIcon />}
        />
      </Grid>
    </Container>
  );
};

export default Footer;
