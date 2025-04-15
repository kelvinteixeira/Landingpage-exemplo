import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Cria o tema base com paleta de cores personalizada
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#000080", // Navy Blue - Azul marinho
      light: "#1A1A8B", // Navy Blue claro
      dark: "#000066", // Navy Blue escuro
      contrastText: "#FFFFFF", // Texto branco
    },
    secondary: {
      main: "#DAA520", // Golden Rod - Dourado terroso
      light: "#E6B949", // Golden Rod claro
      dark: "#B8860B", // Golden Rod escuro
      contrastText: "#121212", // Texto preto
    },
    background: {
      default: "#F5F5F5", // Cinza claro de fundo
      paper: "#FFFFFF", // Branco para superfícies
    },
    text: {
      primary: "#ffffff", // Cinza chumbo (dark slate gray) para texto primário
      secondary: "#000000", // Cinza chumbo mais claro (slate gray)
      disabled: "#A9A9A9", // Cinza escuro para texto desabilitado
    },
    grey: {
      50: "#F8F8F8", // Cinza super claro
      100: "#E8E8E8",
      200: "#D8D8D8",
      300: "#C0C0C0", // Cinza médio
      400: "#A9A9A9", // Dark gray
      500: "#808080", // Gray
      600: "#696969", // Dim gray
      700: "#4F4F4F", // Dark slate gray
      800: "#363636", // Quase preto
      900: "#212121", // Preto
    },
    success: {
      main: "#2E7D32", // Verde mantido para sucesso
    },
    warning: {
      main: "#DAA520", // Golden Rod para avisos
    },
    info: {
      main: "#000080", // Navy Blue para informações
    },
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
      fontSize: "5rem",
      fontWeight: 700,
      color: "#ffffff", // Cinza chumbo
      [createTheme().breakpoints.up("md")]: {
        fontSize: "3.5rem",
      },
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#000080", // Navy Blue
      [createTheme().breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      color: "#ffffff", // Cinza chumbo
      [createTheme().breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff", // Cinza chumbo
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1.1rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 22px",
          fontSize: "1rem",
          [createTheme().breakpoints.up("md")]: {
            padding: "10px 24px",
            fontSize: "1.05rem",
          },
        },
        containedPrimary: {
          backgroundColor: "#000080", // Navy Blue
          "&:hover": {
            backgroundColor: "#000066", // Navy Blue escuro
            boxShadow: "0 2px 4px rgba(0, 0, 128, 0.3)",
          },
        },
        containedSecondary: {
          backgroundColor: "#DAA520", // Golden Rod
          color: "#121212",
          "&:hover": {
            backgroundColor: "#B8860B", // Golden Rod escuro
            boxShadow: "0 2px 4px rgba(218, 165, 32, 0.3)",
          },
        },
        outlinedPrimary: {
          borderColor: "#000080", // Navy Blue
          color: "#000080",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 128, 0.04)",
          },
        },
        outlinedSecondary: {
          borderColor: "#DAA520", // Golden Rod
          color: "#DAA520",
          "&:hover": {
            backgroundColor: "rgba(218, 165, 32, 0.04)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          padding: "16px",
          backgroundColor: "#FFFFFF", // Branco puro
          border: "1px solid #E8E8E8", // Borda sutil
          [createTheme().breakpoints.up("sm")]: {
            padding: "20px",
          },
          [createTheme().breakpoints.up("md")]: {
            padding: "24px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000080", // Navy Blue para AppBar
          color: "#FFFFFF",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          [createTheme().breakpoints.up("sm")]: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#DAA520", // Golden Rod para divisores
          height: "2px",
        },
      },
    },
  },
});

// Aplica responsiveFontSizes ao tema
export const theme = responsiveFontSizes(customTheme);
