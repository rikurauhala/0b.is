import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';

import { lightTheme, darkTheme } from './themes/themes';

import { NumeralSystem } from './types/types';

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [input, setInput] = useState<string>('');
  const [inputSystem, setInputSystem] = useState<NumeralSystem>('Binary');
  const [outputSystem, setOutputSystem] = useState<NumeralSystem>('Decimal');

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
      <MenuBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth='md'>
        <Stack justifyContent='center' marginTop='50px' spacing={3}>
          <NumberInput
            input={input}
            inputSystem={inputSystem}
            handleInputChange={handleInputChange}
            handleInputSystemChange={handleInputSystemChange}
          />
          <NumberOutput
            input={input}
            inputSystem={inputSystem}
            outputSystem={outputSystem}
            handleOutputSystemChange={handleOutputSystemChange}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
