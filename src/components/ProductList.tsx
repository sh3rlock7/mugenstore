import { Box, Typography } from "@mui/material"
import { ProductItem } from "./ProductItem"
import { useProducts } from "../hooks/useProducts"


export const ProductList = () => {
    
    const {data} = useProducts(6, 0)

    return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column"}} >
        <Typography variant="h1" sx={{textAlign: "left", ml: 3, mt: 5}}>Recomendations</Typography>
        <Box  
        sx={{
            bgcolor: "#f5f5f5",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",         
            justifyContent: "center", 
            gap: 2,                   
            flexGrow: 1,          
            p: 2,
            mt: 2
        }}>                 

            {
                data?.products.map( p => (
                    <ProductItem product={p}  key={p.id} />
                ))
            }

        </Box>
    </Box>
  )
}
