
import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    box?: string,
    gradient?: string
  }
}



/** Tokens solo dark */
const tokens = {
  primary:   "#90caf9",
  secondary: "#9c27b0",
  error:     "#ef9a9a",
  warning:   "#ffb74d",
  info:      "#81d4fa",
  success:   "#a5d6a7",
  bgDefault: "#121212",
  bgPaper:   "#1e1e1e",
  bgBox:     "#F8F9FA",
  bgGrad:    "radial-gradient(circle, #90caf9 0%, #9c27b0 100%)", 
  textPri:   "#000000",
  textSec:   "#b3b3b3",
  divider:   "#2a2a2a",
  radius: 8,
};

export function createAppTheme() {
  const options: ThemeOptions = {
    palette: {
      mode: "dark", // 👈 fijo en dark
      primary:   { main: tokens.primary },
      secondary: { main: tokens.secondary },
      error:     { main: tokens.error },
      warning:   { main: tokens.warning },
      info:      { main: tokens.info },
      success:   { main: tokens.success },
      background: {
        default: tokens.bgDefault,
        paper: tokens.bgPaper,
        box: tokens.bgBox,
        gradient: tokens.bgGrad
      },
      text: {
        primary: tokens.textPri,
        secondary: tokens.textSec,
      },
      divider: tokens.divider,
    },
    shape: { borderRadius: tokens.radius },
    typography: {
      fontFamily:
        "'Roboto',system-ui,-apple-system,Segoe UI,Arial,sans-serif",
      h1: { fontSize: "2.2rem", fontWeight: 700, letterSpacing: "-.02em" },
      h2: { fontSize: "1.8rem", fontWeight: 600, letterSpacing: "-.01em" },
      h3: { fontSize: "1.4rem", fontWeight: 600 },
      h4: { fontSize: "1.2rem", fontWeight: 700 },
      h6: { fontSize: "0.9rem", fontWeight: 600 },
      body1: { fontSize: "1rem", lineHeight: 1.6, fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
  };

  return createTheme(options);
}