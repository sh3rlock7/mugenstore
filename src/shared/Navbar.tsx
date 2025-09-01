import { AppBar, Toolbar } from "@mui/material"


export const Navbar = () => {

  return (
      <AppBar position="static" sx={{bgcolor: 'blue', minHeight: '80px', mb:0}}>
          <Toolbar>
            Navbar
          </Toolbar>
      </AppBar>
  )
}
