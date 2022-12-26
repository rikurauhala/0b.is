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
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const setInputState = (input: string): void => {
    setInput(input);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MenuBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth='sm'>
        <Stack justifyContent='center' minHeight='50vh'>
          <ModeSelect />
          <NumberInput
            input={input}
            setNumberInput={setInputState}
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
