import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "2.2rem", fontWeight: 600 },
    h2: { fontSize: "1.8rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
