import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Stack, TextField, useTheme } from "@mui/material"
import { useState } from "react";
import PaymentDragon from '/images/payment.png';

export const CheckoutCreditCard = () => {
    const theme = useTheme();
  const [fullname, setFullname] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({
    fullname: false,
    creditCard: false,
    expiry: false,
    cvc: false,
  });

  const handlePayment = () => {
    const newErrors = {
      fullname: fullname.trim() === "",
      creditCard: creditCard.trim() === "",
      expiry: expiry.trim() === "",
      cvc: cvc.trim() === "",
    };
    setErrors(newErrors);
  }


  return (
   <Box  sx={{ py: 6 }}>
          <Accordion sx={{bgcolor: theme.palette.primary.main, borderRadius: 1 }} defaultExpanded>
            <AccordionSummary sx={{"&:focus": { outline: "none" },
                  "&:focus-visible": {
                      outline: "none",
                      boxShadow: "none",
                    }}}>Payment information</AccordionSummary>
            <AccordionDetails sx={{bgcolor:"#f1f1f1"}}>
                
               <Box sx={{display:"flex",flexDirection:{xs:"column-reverse", sm:"row"}, justifyContent:"space-between"}}> 
                  <Box 
                    component="img"
                    src={PaymentDragon}
                    sx={{ mx: "auto", height:{xs:"200px", lg: "260px"}, width:{lg: "320px"} }}
                    />

                  <Box
                sx={{
                  p: 4,
                  bgcolor:"#f1f1f1"
                }}
                >
          

                <Stack spacing={3}>
                  {/* Fullname */}
                  <TextField
                    fullWidth
                    label="Fullname"
                    autoComplete="nein"
                    value={fullname}
                    variant="outlined"
                    onChange={(e) => setFullname(e.target.value)}
                    sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}}
                    error={errors.fullname}
                    helperText={errors.fullname ? "Fullname is required" : ""}
                    
                    />

                  {/* Credit Card */}
                  <TextField
                    fullWidth
                    label="Credit Card Number"
                    value={creditCard}
                    onChange={(e) => setCreditCard(e.target.value)}
                    sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}}
                    error={errors.creditCard}
                    helperText={errors.creditCard ? "Credit Card is required" : ""}
                    />

                  {/* Expiry + CVC */}
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      error={errors.expiry}
                      helperText={errors.expiry ? "Expiry date is required" : ""}
                      sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}}
                      />

                    <TextField
                      fullWidth
                      label="Security Code"
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      error={errors.cvc}
                      helperText={errors.cvc ? "CVC is required" : ""}
                      sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}}
                    />
                  </Stack>
                </Stack>
              </Box>
            </Box> 
            </AccordionDetails>
          </Accordion>
            <Container sx={{display:"flex", justifyContent:"center"}}>
          <Button variant="contained" sx={{p:2, width:"50%", mt:5}}>Complete my order</Button>        
        </Container>
    </Box>
  )
}


