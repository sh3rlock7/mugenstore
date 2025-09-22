import { Search } from "@mui/icons-material";
import { AppBar, Box, darken, IconButton, InputAdornment, TextField, Toolbar, useTheme } from "@mui/material";
import { NavbarLinks } from "./NavbarLinks";
import { useState} from "react";

import { useNavigate } from "react-router-dom";

export const SubNavbar = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const [searchValue , setSearchValue] = useState("");
  

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  }


  return (
    <AppBar
      position="static"
      sx={{ display:"flex", justifyContent:{lg:"space-between"}, bgcolor: darken( theme.palette.secondary.main, 0.5)}}
    >
      <Toolbar sx={{ justifyContent: { xs: "center", lg: "space-between" },}}>
        <NavbarLinks />
        <Box component="form" onSubmit={handleSubmit}>
        <TextField
          placeholder="Buscar productos..."
          value={searchValue}
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={(e) => setSearchValue(e.target.value) }
          sx={{
            position:"relative",
            justifyContent: "end",
            width: {xs: "100%", lg:"450px"},
            borderRadius: "12px",
            mr: {xs: 3, lg: "20px"},
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
                  <IconButton type="submit" sx={{position:"absolute"}} >
                    <Search
                      sx={{
                        position: "absolute",
                        bgcolor: "orange",
                        fontSize: 40,
                        borderRadius: "0px 12px 12px 0px",
                        ':hover': {bgcolor: "blue"} //Corregir con colores del theme
                      }}
                      />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
