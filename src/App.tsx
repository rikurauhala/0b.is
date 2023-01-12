import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThemeProvider } from '@mui/material/styles';

import Footer from './components/Footer';
import InfoBox from './components/InfoBox';
import MenuBar from './components/MenuBar';
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';

import { lightTheme, darkTheme } from './themes';

import { Language, NumeralSystem } from './types';

const App = (): JSX.Element => {
  const [language, setLanguage] = useState<Language>(Language.English);
  const [darkMode, setDarkMode] = useState<boolean>(useMediaQuery('(prefers-color-scheme: dark)'));
  const [input, setInput] = useState<string>('');
  const [inputSystem, setInputSystem] = useState<NumeralSystem>(NumeralSystem.Binary);
  const [outputSystem, setOutputSystem] = useState<NumeralSystem>(NumeralSystem.Decimal);

  const handleLanguageChange = (language: Language): void => {
    setLanguage(language);
  };

  const handleInputChange = (input: string): void => {
    setInput(input);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleInputSystemChange = (input: NumeralSystem): void => {
    setInputSystem(input);
  };

  const handleOutputSystemChange = (input: NumeralSystem): void => {
    setOutputSystem(input);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MenuBar
        darkMode={darkMode}
        handleLanguageChange={handleLanguageChange}
        handleThemeChange={handleThemeChange}
        language={language}
      />
      <Container disableGutters sx={{ minHeight: 'calc(100vh - 197px)' }}>
        <Container>
          <Stack margin="50px 0px" spacing={{ xs: 5, md: 2 }}>
            <NumberInput
              handleInputChange={handleInputChange}
              handleInputSystemChange={handleInputSystemChange}
              input={input}
              inputSystem={inputSystem}
              language={language}
              outputSystem={outputSystem}
            />
            <NumberOutput
              handleOutputSystemChange={handleOutputSystemChange}
              input={input}
              inputSystem={inputSystem}
              language={language}
              outputSystem={outputSystem}
            />
          </Stack>
        </Container>
        <Container>
          <Stack
            alignItems="stretch"
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
          >
            <InfoBox language={language} system={inputSystem} />
            <InfoBox language={language} system={outputSystem} />
          </Stack>
        </Container>
      </Container>
      <Footer language={language} />
    </ThemeProvider>
  );
};

export default App;
