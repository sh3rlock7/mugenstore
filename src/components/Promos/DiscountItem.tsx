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
      sx={{
        display: "flex",
        mt: 3,
        width: {xs: "90%", sm: "90%", lg: "80"},
        maxWidth: "100%",
        ml: {xs:1 , lg: 2},
        mr: {xs: 1, lg: 50},
        height: { xs: "280px", sm: "400px", md: "450px", lg: "375px" },
        borderRadius: 2,
        objectFit: "fill",
        ...sx
      }}
    />
  );
}
