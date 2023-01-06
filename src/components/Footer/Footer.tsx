import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { FooterLinkProps } from '../../types/types';

const FooterLink = ({ url, text, icon }: FooterLinkProps) => {
  return (
    <Button
      color='secondary'
      href={url}
      size='small'
      startIcon={icon}
      target='_blank'
    >
      {text}
    </Button>
  );
};

const Footer = () => {
  const urlSourceCode = 'https://github.com/rikurauhala/0b.is';
  const urlDocumentation = `${urlSourceCode}/wiki`;
  const urlContributing = `${urlSourceCode}/blob/main/CONTRIBUTING.md`;
  const urlChangelog = `${urlSourceCode}/wiki/Changelog`;

  return (
    <Container
      sx={{
        bottom: '0',
        left: '0',
        padding: '15px',
        position: 'relative',
      }}
    >
      <Divider sx={{ marginBottom: '20px' }} />
      <Stack
        alignItems='center'
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider flexItem orientation='vertical' />}
        justifyContent='center'
        spacing={{ xs: 0.5, sm: 1, md: 2 }}
      >
        <FooterLink
          url={urlSourceCode}
          text='Source code'
          icon={<GitHubIcon />}
        />
        <FooterLink
          url={urlDocumentation}
          text='Documentation'
          icon={<ArticleIcon />}
        />
        <FooterLink
          url={urlContributing}
          text='Contributing'
          icon={<InfoIcon />}
        />
        <FooterLink
          url={urlChangelog}
          text='Version 1.0.0'
          icon={<LogoDevIcon />}
        />
      </Stack>
    </Container>
  );
};

export default Footer;
