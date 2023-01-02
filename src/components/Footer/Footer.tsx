import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { FooterLinkProps } from '../../types/types';

const FooterLink = ({ url, text }: FooterLinkProps) => {
  return (
    <Link
      href={url}
      target='_blank'
      underline='hover'
    >
      {text}
    </Link>
  );
};

const Footer = () => {
  const urlSourceCode = 'https://github.com/rikurauhala/0b.is';
  const urlDocumentation = `${urlSourceCode}/wiki`;
  const urlContributing = `${urlSourceCode}/blob/main/CONTRIBUTING.md`;

  return (
    <Container
      style={{
        bottom: '0',
        left: '0',
        padding: '15px',
        position: 'relative',
      }}
    >
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
      </Stack>
    </Container>
  );
};

export default Footer;
