import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { FooterLinkProps } from '../../types/types';

const FooterLink = ({ url, text, }: FooterLinkProps) => {
  return (
    <Chip
      clickable
      color='primary'
      component='a'
      href={url}
      label={text}
      icon={
        text === 'Source code'
          ? <GitHubIcon fontSize='small' />
          : text === 'Contributing'
            ? <InfoIcon fontSize='small' />
            : text === 'Documentation'
              ? <ArticleIcon fontSize='small' />
              : <LogoDevIcon fontSize='small' />
      }
      target='_blank'
      variant='outlined'
    />
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
        divider={<Divider orientation='vertical' flexItem />}
        justifyContent='center'
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0.5, sm: 1, md: 2 }}
      >
        <FooterLink url={urlSourceCode} text='Source code' />
        <FooterLink url={urlDocumentation} text='Documentation' />
        <FooterLink url={urlContributing} text='Contributing' />
        <FooterLink url={urlChangelog} text='Version 1.0.0' />
      </Stack>
    </Container>
  );
};

export default Footer;
