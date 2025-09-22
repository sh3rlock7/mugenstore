import { Box, Stack, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"



export const NavbarLinks = () => {
    const navigate = useNavigate();

    const handleScroll = (id: string) => {
        navigate('/', { state: { scrollTo: id } });
    } 

  return (
    <Box sx={{display:{xs: "none", md:"flex"}, flex: 1}}>
        <Stack direction="row" spacing={3} sx={{color: "#F1F1F1", textWrap: "nowrap"}}>
             <Typography 
                component="a" 
                onClick={() => handleScroll("top_products")}
                variant="h6"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Top Products
            </Typography> 
            
            <Typography 
                component="a" 
                onClick={()=> handleScroll("recomendations")}
                variant="h6"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Recomendations
            </Typography> 
            
            <Typography 
                component="a" 
                onClick={()=> handleScroll("discover")} 
                variant="h6"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Discover
            </Typography> 
            <Typography 
                component={NavLink} 
                to={"/favorites"} 
                variant="h6"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Favorites
            </Typography>
            <Typography 
                component="a" 
                onClick={()=> handleScroll("support")}
                variant="h6"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Support
            </Typography>
        </Stack>
    </Box>
  )
}
