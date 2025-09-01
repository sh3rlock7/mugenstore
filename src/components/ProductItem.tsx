import { Box, Button,  Paper, Stack, Typography } from "@mui/material"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

interface Props {
    name: string
    id?: number
}


export const ProductItem = ({name}: Props) => {
  return (
    <Paper elevation={12} sx={{mt: 3, width: '350px', borderRadius:'25px', justifyContent: 'center'}}>
            <FavoriteBorder sx={{ fontSize:40, bgcolor:"purple",p: "5px", position: "absolute", right: "40px", mt:2, border:"0.7px solid gray", borderRadius: 3}} />     
            <Box
                sx={{ display: "block", mx: "auto", height: "auto" }}
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YyevXtkvXTQI59R7tzY14FkaukPiPkSAlA&s"
            />
                <Box sx={{bgcolor: 'blue', borderRadius:"15px 15px 25px 25px", p: 2 }}>
                    <Typography variant="h2">{name}</Typography>
                    <Stack direction="row" sx={{mt: 1, gap: 1}}>
                        <Typography variant="body2" sx={{border: "1px solid gray", padding: 0.5, borderRadius: 0.5}}>Tag1</Typography>
                        <Typography variant="body2" sx={{border: "1px solid gray", padding: 0.5, borderRadius: 0.5}}>Tag1adsasdasdasdsas</Typography>
                    </Stack>
                    <Typography variant="body1" sx={{mt: 2}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas nostrum totam magnam mollitia facere. </Typography>
                    <Stack direction="row" sx={{mt: 4, justifyContent: 'space-between'}}>
                        <Stack direction="column">
                            <Typography variant="h4">Price</Typography>
                            <Typography variant="h4">$100.00</Typography> 
                        </Stack>
                        <Button variant="contained" sx={{mt: 1, width: "150px"}}>Add to cart</Button>
                    </Stack>
                </Box>
    </Paper>
  )
}
