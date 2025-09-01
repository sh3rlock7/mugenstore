import { AppBar, Toolbar } from "@mui/material"

export const SubNavbar = () => {
  return (
    <AppBar position="static" sx={{bgcolor: 'gray', overflowX: 'hidden', width: '100vw'}}>
       <Toolbar>
            SubNavBar
        </Toolbar> 
    </AppBar>
  )
}
