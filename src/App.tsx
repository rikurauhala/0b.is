import { useState } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import UserInput from './components/UserInput';
import darkTheme from './themes/themes';

const App = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState('');

  const setInputState = (input: string): void => {
    setInput(input);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <UserInput
              setUserInput={setInputState}
            />
          </Grid>
          <Grid item>
            <UserInput
              setUserInput={setInputState}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
