import { Outlet } from "react-router-dom"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import { Box } from "@mui/material"


export const StoreLayout = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: "100vh", width:"100vw"}}>
        <Navbar />
      <Box sx={{flex: 1, width:"100%"}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
