import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';

import { darkTheme } from './themes/themes';

const App = (): JSX.Element => {
  const [input, setInput] = useState('');

  const setInputState = (input: string): void => {
    setInput(input);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Grid container spacing={1} justifyContent="center">
          <Grid item style={{ width: '50%' }}>
            <NumberInput
              setNumberInput={setInputState}
            />
          </Grid>
          <Grid item style={{ width: '50%' }}>
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
