import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
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
      <Container maxWidth='lg'>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <NumberInput
              input={input}
              setNumberInput={setInputState}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberOutput
              input={input}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
