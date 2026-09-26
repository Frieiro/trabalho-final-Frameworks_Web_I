import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#97ce4c' },
    secondary: { main: '#44c8e8' },
    background: {
      default: '#10131f',
      paper: '#1a1f30',
    },
    error: { main: '#e4665c' },
  },
  typography: {
    fontFamily: '"Nunito", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Bungee", "Impact", sans-serif' },
    h2: { fontFamily: '"Bungee", "Impact", sans-serif' },
    h3: { fontFamily: '"Bungee", "Impact", sans-serif' },
    h4: { fontFamily: '"Bungee", "Impact", sans-serif' },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 10 },
})

export default theme
