import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const App = (): JSX.Element => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container maxWidth='lg'>
      <Grid container spacing={1} justifyContent="center" alignItems="center" >
        <Grid item>
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel>Decimal</InputLabel>
            <OutlinedInput
              id="outlined-adornment-decimal"
              label="Decimal"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl disabled fullWidth sx={{ m: 2 }}>
            <InputLabel>Binary</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Binary"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
);

export default App;
