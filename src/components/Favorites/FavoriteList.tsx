import { Box, Typography } from "@mui/material"
import { useShoppingStore } from "../../store/useShoppingStore"
import { ProductItem } from "../ProductItem"


export const FavoriteList = () => {
  const favorite = useShoppingStore(state => state.favorites)
  
  return (
    <Box sx={{ height: "100%", width: "100%",}}>
      <Typography variant="h2" sx={{textAlign:"center", mt:4}}>My Favourites</Typography>
       <Box sx={{display:"flex", gap: 5, p:3, ml: 3}}>
       {
         favorite?.map( p => (
           <ProductItem product={p}  key={p.id} />
          ))
        }
        </Box>
    </Box>
  )
}


