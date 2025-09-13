import { CheckCircle } from "@mui/icons-material";
import { Alert, Snackbar, Typography, useTheme, type SnackbarCloseReason } from "@mui/material"


interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}


export const CustomSnackbar = ({open, setOpen}: Props) => {

    const theme = useTheme();

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };


  return (
    <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
    >
        <Alert
            icon={<CheckCircle fontSize="medium"/>}
            variant="filled"
            severity="success"
            onClose={handleClose}
            sx={{width: "100%", color: "white", bgcolor: theme.palette.secondary.main}}
        >
            <Typography variant="h6">
               Added to your basket
            </Typography>
        </Alert>
    </Snackbar>
  )
}


