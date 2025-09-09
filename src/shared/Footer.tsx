import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { Box, Typography, useTheme, Link, Grid, Stack } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        mt: 4,
        pt: 4,
        pb: 2,
        px: { xs: 2, sm: 6, md: 12 },
        width: "100%"
      }}
    >
      {/* Footer Sections */}
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ml:2}}>
            Shop
          </Typography>
          <Box sx={{ml:2}}>
            <Link href="#" underline="hover" color="inherit" display="block">
              Men
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Women
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Kids
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Sale
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="inherit" display="block">
              About Us
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Contact
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              FAQ
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Shipping & Returns
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ml:2}}>
            Legal
          </Typography>
          <Box sx={{ml:2}}>
            <Link href="#" underline="hover" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Terms & Conditions
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Cookie Policy
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="inherit" display="block">
              Help Center
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Track Order
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Payment Methods
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Warranty
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={3} sx={{ justifyContent: "center" }}>
            <Link href="#" underline="hover" color="inherit" display="block" sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.2)"}}}>
              <Facebook sx={{ fontSize: 40 }} />
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block" sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus ': {transform: "scale(1.2)",color:  "#dd2a7b"}}}>
              <Instagram sx={{ fontSize: 40 }} />
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block" sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.2)", color: "black"}}}>
              <X sx={{ fontSize: 40 }} />
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block" sx={{transition: 'transform 0.3s ease-in-out', '&:hover, &:active, &:focus': {transform: "scale(1.2)", color:"red"}}}>
              <YouTube sx={{ fontSize: 40 }} />
            </Link>
          </Stack>
        </Grid>
      </Grid>

      {/* Bottom line */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`,
          mt: 4,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          © {year} Mugen Store. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
