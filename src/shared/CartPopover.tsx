import {
  Box,
  Button,
  Grid,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import { useShoppingStore } from "../store/useShoppingStore";
import emptyCart from "../../public/images/EmptyCart.png";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

interface Props {
  anchorEl: HTMLElement | null;
  id: string | undefined;
  open: boolean;
  handleClose: () => void;
}

export const CartPopover = ({ anchorEl, id, open, handleClose }: Props) => {
  const cartProducts = useShoppingStore((state) => state.products);
  const cartTotal = useShoppingStore((state) => state.total);
  

  const theme = useTheme();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("checkout");
    handleClose();
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "white",
          width: "450px", // ancho fijo
          height: "450px", // alto fijo
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Grid
          container
          direction="row"
          size={12}
          sx={{ mt: 2, textAlign: "center" }}
        >
          <Grid size={12}>
            <Typography variant="h1">Your Order</Typography>
          </Grid>
        </Grid>
        {cartProducts.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              height={240}
              width={260}
              src={emptyCart}
              sx={{ mt: 5 }}
            />
          </Box>
        ) : (
          cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
          ))
        )}
      </Box>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h3">
          {cartProducts.length === 0
            ? ""
            : `Total Payment: € ${cartTotal.toFixed(2)}`}{" "}
        </Typography>
        {cartProducts.length === 0 ? (
          ""
        ) : (
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontSize: theme.typography.h3,
              bgcolor: theme.palette.secondary.main,
              padding: 1,
              mt: 1,
            }}
            onClick={handleCheckOut}
          >
            Procede to checkout
          </Button>
        )}
      </Box>
    </Popover>
  );
};
