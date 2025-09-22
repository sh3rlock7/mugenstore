import { useParams } from "react-router-dom"
import { useSearchProduct } from "../../hooks/useSearchProduct"
import { Box } from "@mui/material";
import { ProductItem } from "../ProductItem";



export const SearchLanding = () => {

    const {product} = useParams<{product: string}>();
    const {data} = useSearchProduct(product!)
    console.log(data?.products)

  return (
    <Box>
        {
            data?.products.map(item =>(
                <ProductItem key={item.id} product={item}/>
            ))
        }
    </Box>
  )
}


