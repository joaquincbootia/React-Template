import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import AppRouter from './router';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
  );
}

export default App;