import {create, type StateCreator} from 'zustand'
import type { Product } from '../interfaces/Product.interface'
import { devtools, persist } from "zustand/middleware";

interface ShoppingState {
    products: Product[];
    total: number;
    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void;
 
}



const productsApi: StateCreator<ShoppingState> = (set) => ({
    products: [],
    total: 0,
    addProduct: (product) => 
        set( (state) => ({ 
            products: [...state.products, product], 
            total: state.products.reduce((acc, p) => acc + p.price, product.price)
        })),
    
    removeProduct: (id) =>
        set((state) => {
        const updatedProducts = state.products.filter((p) => p.id !== id);
        const updatedTotal = updatedProducts.reduce((acc, p) => acc + p.price, 0);
        return { products: updatedProducts, total: updatedTotal };
        })
})





export const useShoppingStore = create<ShoppingState>()(
   devtools(
       persist(
        productsApi,
        {name: "shopping-cart"}
       )
   )

);


