import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
import ModeSelect from './components/ModeSelect';
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';

import { lightTheme, darkTheme } from './themes/themes';

const App = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [converterMode, setConverterMode] = useState<string>('BinToDec');

  const handleInputChange = (input: string): void => {
    setInput(input);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleConverterModeChange = (mode: string): void => {
    setConverterMode(mode);
  };

  console.log(converterMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MenuBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth='sm'>
        <Stack justifyContent='center' marginTop='50px'>
          <ModeSelect
            converterMode={converterMode}
            handleConverterModeChange={handleConverterModeChange}
          />
          <NumberInput
            input={input}
            handleInputChange={handleInputChange}
          />
          <NumberOutput
            input={input}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
