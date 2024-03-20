import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './components/AppLayout';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;