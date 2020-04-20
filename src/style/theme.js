import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#004481',
      dark: '#043263',
      light: '#1464A5',
    },
    secondary: {
      main: '#2DCCCD',
      dark: '#028484',
      light: '#5AC4C4',
    },
    type: 'light',
    text: {
      primary: '#101012',
      secondary: '#545456',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#28a745',
    },
  },
});
