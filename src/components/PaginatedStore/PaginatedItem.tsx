import { Box, Paper, Typography, IconButton } from "@mui/material";
import type { Product } from "../../interfaces/Product.interface";
import { Add } from "@mui/icons-material";
import { useShoppingStore } from "../../store/useShoppingStore";
import { useState } from "react";
import { CustomSnackbar } from "./CustomSnackbar";

interface Props {
  product: Product;
}

const PaginatedItem = ({ product }: Props) => {

  const addToCard = useShoppingStore(state => state.addProduct)
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAdd = () => {
    addToCard(product)
    setSnackbarOpen(true)
  }


  return (
    <Paper
      elevation={12}
      sx={{
        bgcolor: "white",
        display: "flex",
        height: "180px",
        width: {lg: "300px"},
        mx:{lg:"auto"},
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // para que los elementos absolutos se posicionen respecto a este Paper
        p: 1,
      }}
    >
      {/* Icono en la esquina */}
      <IconButton
        disableFocusRipple
        color="secondary"
        onClick={handleAdd}
        sx={{
          position: "absolute",
          top: "1px",
          right: "5px",
          "&:focus": { outline: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <Add  sx={{fontSize: 35}}/>
      </IconButton>
        <CustomSnackbar  open={snackbarOpen} setOpen={setSnackbarOpen}/>
      <Box
        component="img"
        src={product.images[0]}
        height={100}
        width={100}
        sx={{ mt: 2 }}
      />
      <Typography variant="h6" sx={{
        width: "100%",          
        whiteSpace: "nowrap",  
        overflow: "hidden",     
        textOverflow: "ellipsis", 
      }}
      >
        {product.title}
      </Typography>
      <Typography variant="h6">{product.price}</Typography>
    </Paper>
  );
};

export default PaginatedItem;