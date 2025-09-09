import { Box, useTheme } from '@mui/material'


interface Props {
    src: string,
    alt?: string,
    sx?: object
}


export const CategoryItem = ({src, alt = "Special Discount", sx = {} }: Props) => {
    const theme = useTheme();  
    return (
    <Box
        component="img"
        src={src}
        alt={alt}
        sx={{display: "flex", mx:"auto",mt: 1 , height: "140px",width: "150px",boxShadow: theme.shadows[20], borderRadius: 2, ...sx}}  
    />       
    
  )
}
