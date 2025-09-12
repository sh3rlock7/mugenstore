import { Box } from "@mui/material"
import { ProductList } from "./ProductList"
import {DiscountList} from "./Promos/DiscountList"
import { CategoryList } from "./Explore/CategoryList"
import { PaginatedStoreList } from "./PaginatedStore/PaginatedStoreList"



export const ProductLanding = () => {

    return (
    <Box sx={{height: '100%',minHeight: '100vh', bgcolor: "#f5f5f5"}}>
      <DiscountList /> 
      <PaginatedStoreList />
      <ProductList />
      <CategoryList />
    </Box>
  )
}
