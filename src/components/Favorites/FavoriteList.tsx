import { Box, Typography } from "@mui/material"
import { useShoppingStore } from "../../store/useShoppingStore"
import { ProductItem } from "../ProductItem"


export const FavoriteList = () => {
  const favorite = useShoppingStore(state => state.favorites)
  
  return (
    <Box sx={{ height: "100%", width: "100%",}}>
      <Typography variant="h2" sx={{textAlign:"center", mt:4}}>My Favourites</Typography>
       <Box sx={{display:"flex",flexDirection:{xs: "column", sm: "row"}, flexWrap:"wrap",alignContent:"center", gap: 4, p:3, ml: {xs:"auto", sm:4}}}>
       {
         favorite?.map( p => (
           <ProductItem product={p}  key={p.id} />
          ))
        }
        </Box>
    </Box>
  )
}


