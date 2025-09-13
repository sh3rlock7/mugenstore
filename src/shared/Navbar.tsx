import {  Menu, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, darken, Stack, Toolbar, useTheme} from "@mui/material";

import Logo from '/images/logo.png';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { CartPopover } from "./CartPopover";
import { useShoppingStore } from "../store/useShoppingStore";
import { SubNavbar } from "./SubNavbar";

export const Navbar = () => {
  const theme = useTheme();
  
  const {  anchorEl,  id,  open, handleClose, handleCartClick } = useShoppingCart()
  const cartLength = useShoppingStore(state => state.products.length)

  return (
    <AppBar position="static" sx={{ bgcolor: darken(theme.palette.secondary.main, 0.5), minHeight: '80px', mt: 0}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", boxShadow: "none", borderBottom: "none" }}>
        <Menu sx={{ fontSize: 40, mt: 2.5, color: "white" }} />
        <Box
          component="img"
          src={Logo}
          sx={{ justifyContent: "center", height: "80px", width: "100px", ml: "30px"}}
        />
        <Stack direction="row" sx={{ color: "white", mt: 2.5 }}>
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
      <SubNavbar />
    </AppBar>
  );
};