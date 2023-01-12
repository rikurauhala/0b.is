import { Helmet } from 'react-helmet';

import { languages } from './languages';

import { Language } from './types';

interface MetaProps {
  language: Language
}

const Meta = ({ language }: MetaProps): JSX.Element => (
  <Helmet>
    <title>0b.is | {languages['Page title'][language]}</title>
  </Helmet>
);

export default Meta;
