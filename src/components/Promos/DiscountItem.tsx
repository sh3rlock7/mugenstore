import { Box } from '@mui/material'


interface Props {
    src: string,
    alt?: string,
    sx?: object
}


export const DiscountItem = ({src, alt = "Special Discount", sx = {} }: Props) => {
  
  return (
    <Box
        component="img"
        src={src}
        alt={alt}
        sx={{display: "flex", mx:"auto",mt: 3, mr: 4, height: "350px",width: "350px",borderRadius: 2, ...sx}}
        
    />        
    
  )
}
