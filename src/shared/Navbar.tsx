import { Login, Menu, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, darken, Stack, Toolbar, Typography, useTheme} from "@mui/material";

import Logo from '/images/logo.png';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { CartPopover } from "./CartPopover";
import { useShoppingStore } from "../store/useShoppingStore";

export const Navbar = () => {
  const theme = useTheme();
  
  const {  anchorEl,  id,  open, handleClose, handleCartClick } = useShoppingCart()
  const cartLength = useShoppingStore(state => state.products.length)

  return (
    <AppBar position="static" sx={{ bgcolor: darken(theme.palette.secondary.main, 0.5), minHeight: '80px' }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", boxShadow: "none", borderBottom: "none" }}>
        <Menu sx={{ fontSize: 40, mt: 2.5, color: "white" }} />
        <Box
          component="img"
          src={Logo}
          sx={{ position: "relative", top: 10, height: "80px", width: "100px", mr: 7 }}
        />
        <Stack direction="row" sx={{ color: "white", mt: 2.5 }}>
          <Typography variant="body2" sx={{ mt: 1, textWrap:"nowrap" }}>Sign In</Typography>
          <Login sx={{ fontSize: 40 }} />
          <Button size="small" sx={{position:"relative", color: "white", ml: 2 }} onClick={handleCartClick}>
            <Badge badgeContent={Number(cartLength)} color="primary" showZero>
              <ShoppingCart  sx={{ fontSize: 40}}   />
            </Badge>
          </Button>
        </Stack>
      </Toolbar>

      <CartPopover 
        anchorEl={anchorEl}
        id={id}
        open={open}
        handleClose={handleClose}
      />
      
    </AppBar>
  );
};