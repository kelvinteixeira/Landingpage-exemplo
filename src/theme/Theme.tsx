import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Cria o tema base com paleta de cores personalizada
const darkBlueTheme = createTheme({
  palette: {
    primary: {
      main: "#2575fc",
    },
    secondary: {
      main: "#6a11cb",
    },
    text: {
      primary: '#000000',
      secondary: '#fcfcfc'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      [createTheme().breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
      [createTheme().breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
      [createTheme().breakpoints.up('lg')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1rem',
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.1rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 22px',
          fontSize: '1rem',
          [createTheme().breakpoints.up('md')]: {
            padding: '10px 24px',
            fontSize: '1.05rem',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#ae00ff'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          padding: '16px',
          [createTheme().breakpoints.up('sm')]: {
            padding: '20px',
          },
          [createTheme().breakpoints.up('md')]: {
            padding: '24px',
          },
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          [createTheme().breakpoints.up('sm')]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
        }
      }
    }
  }
});

// Aplica responsiveFontSizes ao tema
export const theme = responsiveFontSizes(darkBlueTheme);