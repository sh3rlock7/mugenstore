import { Outlet } from "react-router-dom"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import { Box } from "@mui/material"


export const StoreLayout = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: "center", minHeight: "100vh"}}>
        <Navbar />
      <Box sx={{flex: 1}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
