import { Box, Button,  darken,  IconButton,  Paper, Stack, Typography, useTheme } from "@mui/material"
import {FavoriteBorder, Favorite} from '@mui/icons-material';
import { useState } from "react";


interface Props {
    name: string
    id?: number
}


export const ProductItem = ({name}: Props) => {
    const theme = useTheme();  
    const [isFavorite, setIsFavorite] = useState(false)
    
    return (
    <Paper elevation={24} sx={{mt: 3, width: '350px', borderRadius:'25px', justifyContent: 'center', color: theme.palette.text.primary, background: theme.palette.background.gradient }}>
                <IconButton 
                    disableFocusRipple
                    sx={{ p: "5px", position: "relative", right: "-280px", mt:2, border: "none", '&:focus': {outline: 'none'},'&:focus-visible': {outline: 'none',boxShadow: 'none'}}}
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    {isFavorite
                        ? <Favorite  sx={{ fontSize: 45, color: "red"}} />
                        : <FavoriteBorder sx={{ fontSize: 45, color: "white"}} />
                    }
                </IconButton>
            
            <Box
                sx={{ display: "block", mx: "auto", height: "190px" }}
                component="img"
                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            />
                <Box sx={{ height:"auto" ,bgcolor: theme.palette.background.box, borderRadius:"25px 25px 25px 25px", p: 2 }}>
                    <Typography variant="h2">{name}</Typography>
                    <Stack direction="row" sx={{mt: 1, gap: 1}}>
                        <Typography variant="body1" sx={{border: "1px solid black", padding: 0.5, borderRadius: 0.5}}>Tag1</Typography>
                        <Typography variant="body1" sx={{border: "1px solid black", padding: 0.5, borderRadius: 0.5}}>Tag1adsasdasdasdsas</Typography>
                    </Stack>
                    <Typography variant="body1" sx={{mt: 2}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas nostrum totam magnam mollitia facere. </Typography>
                    <Stack direction="row" sx={{mt: 4, justifyContent: 'space-between'}}>
                        <Stack direction="column">
                            <Typography variant="h4">Price</Typography>
                            <Typography variant="h4">$100.00</Typography> 
                        </Stack>
                        <Button variant="contained" sx={{mt: 1, fontSize: 18, color: "white"  ,width: "150px", bgcolor: theme.palette.secondary.main, ':hover': {bgcolor: darken( theme.palette.secondary.main, 0.2) }}}>Add to cart</Button>
                    </Stack>
                </Box>
    </Paper>
  )
}
