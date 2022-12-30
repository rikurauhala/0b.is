import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';

import { lightTheme, darkTheme } from './themes/themes';

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [input, setInput] = useState<string>('');
  const [inputSystem, setInputSystem] = useState('Binary');
  const [outputSystem, setOutputSystem] = useState('Decimal');

  const handleInputChange = (input: string): void => {
    setInput(input);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleInputSystemChange = (input: string): void => {
    setInputSystem(input);
  };

  const handleOutputSystemChange = (input: string): void => {
    setOutputSystem(input);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MenuBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth='md'>
        <Stack justifyContent='center' marginTop='50px' spacing={3}>
          <NumberInput
            inputSystem={inputSystem}
            handleInputChange={handleInputChange}
            handleInputSystemChange={handleInputSystemChange}
          />
          <NumberOutput
            input={input}
            outputSystem={outputSystem}
            handleOutputSystemChange={handleOutputSystemChange}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};



export default App;
