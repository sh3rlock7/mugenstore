import { Accordion, AccordionDetails, AccordionSummary, Box,  TextField, useTheme } from "@mui/material"

export const CheckoutShipping = () => {
    const theme = useTheme();
    return (
     <Box >
          <Accordion defaultExpanded sx={{bgcolor: theme.palette.primary.main }}>
              <AccordionSummary 
                sx={{
                  borderTop:"none", 
                  "&:focus": { outline: "none" },
                  "&:focus-visible": {
                      outline: "none",
                      boxShadow: "none",
                    }
                  }}>
                    Shipping information
                  </AccordionSummary>
              <AccordionDetails sx={{bgcolor:"#f1f1f1"}}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2, // espacio entre campos
                  }}
                >
                  <TextField sx={{mt:2, boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}} label="Name" variant="outlined" fullWidth autoComplete="nein"/>
                  <TextField sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}} label="Last Name" variant="outlined" fullWidth autoComplete="nein"/>
                  <TextField sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}} label="Address" variant="outlined" fullWidth autoComplete="nein" />
                  <TextField sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}} label="City" variant="outlined" fullWidth autoComplete="nein"/>
                  <TextField sx={{boxShadow: "0px  0px 15px rgba(0,0,0,0.2)", borderRadius: 1}} label="Postal Code" variant="outlined" fullWidth autoComplete="nein"/>
                </Box>
              </AccordionDetails>
          </Accordion>
        </Box>
  )
}


