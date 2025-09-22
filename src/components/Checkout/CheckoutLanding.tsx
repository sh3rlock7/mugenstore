import { Box,   Container, Typography } from "@mui/material"
import {CheckoutProductList} from "./CheckoutProductList";
import {CheckoutShipping} from "./CheckoutShipping";

import { CheckoutCreditCard } from "./CheckoutCreditCard";








export const CheckoutLanding = () => {
  


  return (
    <Container sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
      <Typography variant="h2" sx={{textAlign: "center", mt:2}}>Order Summary </Typography>
      <Box>
        {/* Lista de Productos */}
        <CheckoutProductList />
        {/* Direccion de envio */}
        <CheckoutShipping />
        <CheckoutCreditCard />
      </Box>
        
    </Container>
  )
}


