import { Box, List, ListItem } from '@mui/material'
import CartItem from '../../shared/CartItem'
import { useShoppingStore } from '../../store/useShoppingStore'
import emptyCart from "/images/EmptyCart.png";

export const CheckoutProductList = () => {

    const CartProducts = useShoppingStore(state => state.products)
  return (
     <Box sx={{mx:"auto", mb:{xs: 3}, mt:{xs:2}, borderRadius:2, bgcolor:"#f8e0e0ff", width: "100%"}}>
          {
             CartProducts.length === 0 ? (
               <Box
                component="img"
                height={240}
                width={260}
                src={emptyCart}
                sx={{position:"relative", left:"420px", mt: 4, mx: "auto" }}
                />
              
             ) 
             :
             (
                 <List>
                  {CartProducts.map(product => (
                    <ListItem key={product.id}>
                      <CartItem product={product} />
                    </ListItem>
                  ))}
                </List>
             )





          }
          
         
        </Box>
  )
}
