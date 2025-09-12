import { Box, Paper, Typography } from "@mui/material";
import type { Product } from "../../interfaces/Product.interface";


interface Props {
  product: Product;
}


const PaginatedItem = ({product}: Props) => {
  return (
    <Paper elevation={12} sx={{bgcolor: "white",display: "flex", height: "170px", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box 
            component="img"
            src={product.images[0]}
            height={100}
            width={100}
        />
        <Typography variant="h6"> {product.title} </Typography>
        <Typography variant="h6"> {product.price} </Typography>
    </Paper>
  )
}

export default PaginatedItem
