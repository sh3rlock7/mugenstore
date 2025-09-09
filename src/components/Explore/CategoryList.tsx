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
    <Grid container spacing={1} sx={{mb: 3, mt:3}}>
        <Grid size={12}>
            <Typography variant="h1" sx={{ml: 3}}>Discover</Typography>
        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}} >
            <CategoryItem src={home} />
            <Typography sx={{ml: 3}} variant="h6">Home Deco</Typography>
        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={ gaming } />
            <Typography sx={{ml: 3}} variant="h6">Gaming</Typography>

        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={tools} />
            <Typography sx={{ml: 3}} variant="h6">Tools</Typography>

        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem  src={ toys }/>
            <Typography sx={{ml: 3}} variant="h6">Toys</Typography>
        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={sports} />
            <Typography sx={{ml: 3}} variant="h6">Sports</Typography>
        </Grid>
        <Grid size={6} sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.05)"}}}>
            <CategoryItem src={trip} />
            <Typography sx={{ml: 3}} variant="h6">Travel</Typography>
        </Grid>
    </Grid>
  )
}

