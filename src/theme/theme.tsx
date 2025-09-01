
import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

type Mode = "light" | "dark";

/** Tokens compartidos */
const tokens = {
  primary:    { light: "#1976d2", dark: "#90caf9" },
  secondary:  { light: "#9c27b0", dark: "#ce93d8" },
  error:      { light: "#d32f2f", dark: "#ef9a9a" },
  warning:    { light: "#ed6c02", dark: "#ffb74d" },
  info:       { light: "#0288d1", dark: "#81d4fa" },
  success:    { light: "#2e7d32", dark: "#a5d6a7" },
  bgDefault:  { light: "#f5f5f5", dark: "#121212" },
  bgPaper:    { light: "#ffffff", dark: "#1e1e1e" },
  textPri:    { light: "#1a1a1a", dark: "#ffffff" },
  textSec:    { light: "#4d4d4d", dark: "#b3b3b3" },
  divider:    { light: "#e0e0e0", dark: "#2a2a2a" },
  radius: 8,
};

export function createAppTheme(mode: Mode) {

  const options: ThemeOptions  = {
    palette: {
      mode,
      primary:   { main: tokens.primary[mode] },
      secondary: { main: tokens.secondary[mode] },
      error:     { main: tokens.error[mode] },
      warning:   { main: tokens.warning[mode] },
      info:      { main: tokens.info[mode] },
      success:   { main: tokens.success[mode] },
      background: {
        default: tokens.bgDefault[mode],
        paper: tokens.bgPaper[mode],
      },
      text: {
        primary: tokens.textPri[mode],
        secondary: tokens.textSec[mode],
      },
      divider: tokens.divider[mode],
    },
    shape: { borderRadius: tokens.radius },
    typography: {
      fontFamily: "'Inter','Roboto',system-ui,-apple-system,Segoe UI,Arial,sans-serif",
      h1: { fontSize: "2.2rem", fontWeight: 700, letterSpacing: "-.02em" },
      h2: { fontSize: "1.8rem", fontWeight: 600, letterSpacing: "-.01em" },
      h3: { fontSize: "1.4rem", fontWeight: 600 },
      h4: {fontSize: "1.2rem", fontWeight: 700},
      body1: { fontSize: "1rem", lineHeight: 1.6 },
      button: { textTransform: "none", fontWeight: 600 },
    }
  };

  return createTheme(options);
}