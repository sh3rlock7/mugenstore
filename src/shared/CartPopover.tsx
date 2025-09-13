import { Delete } from "@mui/icons-material";
import { Box, Button, Divider, Grid, IconButton, Popover, Typography, useTheme } from "@mui/material"
import { useShoppingStore } from "../store/useShoppingStore";
import emptyCart from '../../public/images/EmptyCart.png'
import {  useNavigate } from "react-router-dom";


interface Props {
  anchorEl: HTMLElement | null;
  id: string | undefined;
  open: boolean;
  handleClose: () => void;
}

export const CartPopover = ( {anchorEl, id, open, handleClose}: Props ) => {
  
  const cartProducts = useShoppingStore(state => state.products);
  const deleteProduct = useShoppingStore(state => state.removeProduct);
  const cartTotal = useShoppingStore(state => state.total);
  const theme = useTheme();

  const navigate = useNavigate()

  const handleCheckOut = () => {
    navigate("checkout")
    handleClose()
  }



    return (
     <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiPaper-root': {
                bgcolor:"white",
                width: 450,  // ancho fijo
                height: 400,// alto fijo
                display: "flex",
                flexDirection: "column"
              }
            }}
          >
            <Box  sx={{flex: 1, overflowY: "auto"}}>
                <Grid container direction="row" size={12} sx={{mt: 2, textAlign: "center"}}>
                  <Grid size={12}>
                    <Typography variant="h1">Your Order</Typography>
                  </Grid>
                  <Grid size={3} sx={{mt: 1}}></Grid>
                  <Grid size={3}>
                    <Typography variant="h3" sx={{mt: 1}}>{cartProducts.length === 0 ? "" : "Qty"}</Typography>
                  </Grid>
                  <Grid size={3} >
                    <Typography variant="h3" sx={{mt: 1}}>{cartProducts.length === 0 ? "" : "Price"}</Typography>
                  </Grid>
                  <Grid size={3} sx={{mt: 1}}></Grid>
                </Grid>

              {
                 cartProducts.length === 0 ? (
                  <Box
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
                  >
                    <Box
                      component="img"
                      height={240}
                      width={260}
                      src={emptyCart}
                      sx={{mt: 5}}
                    />
                  </Box>
                ) : ( 
                      cartProducts.map( products => (
                          <Grid container direction="row" size={12} sx={{textAlign: "center"}}>
                            <Grid size={3}>
                              <Box 
                                component="img"
                                src={products.images[0]}
                                height={90}
                                width={90}
                              />
                            </Grid>
                            <Grid size={3}>
                              <Typography variant="h4" sx={{mt: 5}}>1</Typography>
                            </Grid>
                            <Grid size={3}>
                              <Typography variant="h4" sx={{mt: 5}}>{products.price}</Typography>
                            </Grid>
                            <Grid size={3} sx={{color: "red", mt: 3}}> 
                              <IconButton onClick={() => deleteProduct(products.id)} sx={{color: "red", "&:focus": { outline: "none" },"&:focus-visible": { outline: "none", boxShadow: "none" }}} disableFocusRipple> 
                                <Delete fontSize="large"/> 
                              </IconButton>  
                            </Grid>
                            <Divider sx={{ width:"50%", my: 1, mx: "auto"}} />
                          </Grid> 
                        )     
                ))
              }
            </Box>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h3">{cartProducts.length === 0 ? "" : `Total Payment: € ${cartTotal.toFixed(2)}` }  </Typography>
                {
                  cartProducts.length === 0
                   ? ""
                   :
                  
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      sx={{fontSize: theme.typography.h3, bgcolor: theme.palette.secondary.main, padding: 1, mt: 1 }}
                      onClick={handleCheckOut}
                    >
                      
                      Procede to checkout
                    </Button>
                }
                
              </Box>              
          </Popover>
  )
}


