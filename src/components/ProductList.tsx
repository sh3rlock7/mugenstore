import { Box } from "@mui/material"
import { ProductItem } from "./ProductItem"

const productos = [
    {
        id: 1,
        name: 'Kevin'
    },
    {
        id: 2,
        name: 'Emma'
    },
    {
        id: 3,
        name: 'Carla'
    }
]


export const ProductList = () => {
    
  
    return (
    <Box  sx={{
        display: "flex",
        flexWrap: "wrap",         // 👈 permite que los items hagan wrap
        justifyContent: "center", // 👈 centra los items
        gap: 2,                   // 👈 espacio entre items
        flexGrow: 1,              // 👈 ocupa espacio disponible y no empuja el footer
        p: 2, 
    }}>                 
        {
            productos.map( p => (
                <ProductItem name={p.name}  key={p.id} />
            ))
        }

    </Box>
  )
}
