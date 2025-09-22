import { Grid, Typography } from "@mui/material"

import home from '/images/home.jpg';
import gaming from '/images/gaming.jpg';
import sports from '/images/sports.jpg';
import trip from '/images/trip.jpg';
import tools from '/images/tools.jpg';
import toys from '/images/toys.jpg';
import { CategoryItem } from "./CategoryItem";


export const CategoryList = () => {
  return (
    <Grid container spacing={2} sx={{mb: 3, mt:3}} id="discover">
        <Grid size={12}>
            <Typography variant="h1" sx={{ml: 3}}>Discover</Typography>
        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}} >
            <CategoryItem src={home} />
            <Typography sx={{ typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }}>Home Deco</Typography>
        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={ gaming } />
            <Typography sx={{ typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }}>Gaming</Typography>

        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={tools} />
            <Typography sx={{ typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }} >Tools</Typography>

        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{mt:{ lg:3 }, transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem  src={ toys }/>
            <Typography sx={{ typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }} >Toys</Typography>
        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{mt:{ lg:3 }, transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={sports} />
            <Typography sx={{typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }} >Sports</Typography>
        </Grid>
        <Grid size={{xs: 6, lg: 4}} sx={{mt:{ lg:3 }, transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={trip} />
            <Typography sx={{ typography:{xs: "h6", sm:"h2"}, textAlign:"center", mt: 1 }}>Travel</Typography>
        </Grid>
    </Grid>
  )
}

