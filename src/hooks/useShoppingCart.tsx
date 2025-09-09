
import { useEffect, useState } from "react";


export const useShoppingCart = () => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

        const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
            console.log(event.currentTarget)
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'cart-popover' : undefined;
        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15) {
            handleClose();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
            }, [open]);  
        
  
  
  return {
    anchorEl,
    id,
    handleCartClick,
    handleClose,
    open
  }
}

