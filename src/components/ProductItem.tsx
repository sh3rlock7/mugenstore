import {
  Box,
  Button,
  darken,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useState } from "react";
import type { Product } from "../interfaces/Product.interface";
import { useShoppingStore } from "../store/useShoppingStore";
import { CustomSnackbar } from "./PaginatedStore/CustomSnackbar";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  const theme = useTheme();
  
  const favorites = useShoppingStore((state) => state.favorites);
  const addProduct  = useShoppingStore( state => state.addProduct );
  const addFavorite = useShoppingStore(state => state.addFavorite);
  const removeFavorite = useShoppingStore(state => state.removeFavorite);
  
  const isFavorite = favorites.some((p) => p.id === product.id);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleAdd = () => {
    addProduct(product)
    setSnackbarOpen(true)
  }
  
  const handleFavoriteToggle = () => {
  if (isFavorite) {
    removeFavorite(product.id);
  } else {
    addFavorite(product);
  }
};



  return (
    <Paper
      elevation={20}
      sx={{
        width: "350px",
        borderRadius: "25px",
        justifyContent: "center",
        color: theme.palette.text.primary,
        background: theme.palette.background.gradient,
        p: 0
      }}
    >
      <IconButton
        disableFocusRipple
        sx={{
          p: "5px",
          position: "relative",
          right: "-280px",
          mt: 2,
          border: "none",
          "&:focus": { outline: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? (
          <Favorite sx={{ fontSize: 45, color: "red" }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: 45, color: "white" }} />
        )}
      </IconButton>

      <Box
        sx={{ display: "block", mx: "auto", height: "190px" }}
        component="img"
        src={product.images[0]}
      />
      <Box
        sx={{
          height: "auto",
          bgcolor: theme.palette.background.box,
          borderRadius: "25px 25px 25px 25px",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 , height: "250px"}}>
          <Typography variant="h2">{product.title}</Typography>
          <Stack direction="row" sx={{ mt: 1, gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                border: "1px solid black",
                padding: 0.5,
                borderRadius: 0.5,
              }}
            >
              {product.tags[0]}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                border: "1px solid black",
                padding: 0.5,
                borderRadius: 0.5,
              }}
            >
              {product.tags[1]}
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ my: "20px" }}>
            {product.description}
          </Typography>
        </Box>

        <Stack direction="row" sx={{ justifyContent: "space-between", mt: 2}}>
          <Stack direction="column">
            <Typography variant="h4">Price</Typography>
            <Typography variant="h4">€ {product.price}</Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              mt: 1,
              fontSize: 18,
              color: "white",
              width: "150px",
              bgcolor: theme.palette.secondary.main,
              ":hover": { bgcolor: darken(theme.palette.secondary.main, 0.2) },
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </Box>
      <CustomSnackbar  open={snackbarOpen} setOpen={setSnackbarOpen}/>
    </Paper>
  );
};
