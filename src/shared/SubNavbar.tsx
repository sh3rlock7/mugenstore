import { Search } from "@mui/icons-material";
import { AppBar, darken, InputAdornment, TextField, Toolbar, useTheme } from "@mui/material";

export const SubNavbar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{  bgcolor: darken( theme.palette.secondary.main, 0.5), overflowX: "hidden", width: "100vw", }}
    >
      <Toolbar>
        <TextField
          placeholder="Buscar productos..."
          variant="outlined"
          size="small"
          autoComplete="off"
          sx={{
            width: "90%",
            borderRadius: "12px",
            bgcolor: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Search
                    sx={{
                      position: "absolute",
                      bgcolor: "orange",
                      fontSize: 40,
                      borderRadius: "0px 12px 12px 0px",
                      ':hover': {bgcolor: "blue"} //Corregir con colores del theme
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
