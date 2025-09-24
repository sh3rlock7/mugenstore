
import { Box, darken, Stack, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const DrawerMenu = ({ open, onClose }: Props) => {
    
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        if(window.location.pathname !== "/"){
            navigate('/')
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150);
        }else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        onClose();
    };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: open ? 0 : "-300px",
        width: 300,
        height: "100vh",
        bgcolor:  darken(theme.palette.secondary.main, 0.5),
        transition: "left 0.3s ease",
        zIndex: 1300,
        p: 2,
      }}
    >
       <Stack direction="column" spacing={3} sx={{color: "#F1F1F1", textWrap: "nowrap", mt: 5}}>
             <Typography 
                component="a" 
                onClick={() => handleClick("top_products")}
                variant="h2"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Top Products
            </Typography> 
            
            <Typography 
                component="a" 
                onClick={()=> handleClick("recomendations")}
                variant="h2"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Recomendations
            </Typography> 
            
            <Typography 
                component="a" 
                onClick={()=> handleClick("discover")} 
                variant="h2"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Discover
            </Typography> 
            <Typography 
                component={NavLink} 
                onClick={onClose}
                to={"/favorites"} 
                variant="h2"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Favorites
            </Typography>
            <Typography 
                component="a" 
                onClick={()=> handleClick("support")}
                variant="h2"
                sx={{color: "#F1F1F1", cursor: "pointer"}}
            >
                Support
            </Typography>
        </Stack>
      <Typography  variant="h4" sx={{ color: "#F1F1F1", mt: 4, cursor: "pointer" }} onClick={onClose}>
        Close
      </Typography>
    </Box>
  );
};
