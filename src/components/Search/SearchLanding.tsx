import { useParams } from "react-router-dom"
import { useSearchProduct } from "../../hooks/useSearchProduct"
import { Box, Typography } from "@mui/material";
import { ProductItem } from "../ProductItem";



export const SearchLanding = () => {

    const {product} = useParams<{product: string}>();
    const {data} = useSearchProduct(product!)
    console.log(data?.products)

  return (
    <Box sx={{display:"flex",flexDirection:"column", flexWrap:"wrap", }}>
        <Box sx={{textAlign:"center"}}>
          <Typography variant="h1" sx={{mt:2}}> Your Results </Typography>
        </Box>
        <Box sx={{display:"flex", flexWrap:"wrap", gap: 4, mt: 5, alignContent:"center", justifyContent:"center"}}>
          {
            data?.products.map(item =>(
              <ProductItem key={item.id} product={item}/>
            ))
          }
        </Box>
    </Box>
  )
}


