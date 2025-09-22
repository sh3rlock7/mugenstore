import { Box } from "@mui/material"
import { ProductList } from "./ProductList"
import {DiscountList} from "./Promos/DiscountList"
import { CategoryList } from "./Explore/CategoryList"
import { PaginatedStoreList } from "./PaginatedStore/PaginatedStoreList"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"



export const ProductLanding = () => {

    const location = useLocation();


    useEffect(() => {
      if (location.state?.scrollTo) {
        console.log(location)
        const id = location.state.scrollTo;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location.state]);

    return (
    <Box sx={{height: '100%',minHeight: '100vh', bgcolor: "#f5f5f5"}}>
      <DiscountList /> 
      <PaginatedStoreList />
      <ProductList />
      <CategoryList />
    </Box>
  )
}
