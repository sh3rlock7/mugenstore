import { Box, Divider, IconButton, Typography } from '@mui/material'
import { useShoppingStore } from '../store/useShoppingStore';
import { Add, Delete, Remove } from '@mui/icons-material';
import type { Product } from '../interfaces/Product.interface';

interface CartItemProps {
    product: Product & {quantity: number}
}


const CartItem = ({product}: CartItemProps) => {
        
        const deleteProduct = useShoppingStore((state) => state.removeProduct);
        const decreaseProduct = useShoppingStore((state) => state.decreaseProduct);
        const addProduct = useShoppingStore((state) => state.addProduct);
  return (
   <Box
              key={product.id}
              sx={{
                display: "flex",
                mt: 3,
                width: "100%",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {/* Imagen */}
              <Box
                component="img"
                src={product.images[0]}
                sx={{
                  boxShadow: 4,
                  borderRadius: 1,
                  flexShrink: 0,
                  height: 110,
                  width: 120,
                  ml: 2,
                }}
              />

              {/* Contenido del producto */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  ml: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      width: "70%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Typography>

                  <IconButton
                    onClick={() => deleteProduct(product.id)}
                    sx={{
                      color: "red",
                      "&:focus": { outline: "none" },
                      "&:focus-visible": { outline: "none", boxShadow: "none" },
                    }}
                    disableFocusRipple
                  >
                    <Delete fontSize="medium" />
                  </IconButton>
                </Box>
                {/* Precio y controles de cantidad */}
                <Typography variant='body2' color='gray'>€ {product.price} each</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt:1
                  }}
                >
                  <Typography variant="body1">
                    € { (product.price * product.quantity).toFixed(2)}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => decreaseProduct(product.id)}>
                      <Remove sx={{ color: "red" }} />
                    </IconButton>

                    <Typography variant="body1" sx={{ px: 1 }}>
                      {product.quantity}
                    </Typography>

                    <IconButton
                      onClick={() => addProduct(product)}
                      sx={{
                        "&:focus": { outline: "none" },
                        "&:focus-visible": {
                          outline: "none",
                          boxShadow: "none",
                        },
                      }}
                      disableFocusRipple
                    >
                      <Add sx={{ color: "blue" }} />
                    </IconButton>
                  </Box>
                </Box>

                <Divider sx={{ width: "90%", my: 2 }} />
              </Box>
            </Box>
  )
}

export default CartItem
