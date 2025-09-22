import { create, type StateCreator } from "zustand";
import type { Product } from "../interfaces/Product.interface";
import { devtools, persist } from "zustand/middleware";

interface CartProduct extends Product {
  quantity: number;
}

interface ShoppingState {
  products: CartProduct[];
  favorites: Product[]
  total: number;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  addFavorite:( product: Product ) => void;
  removeFavorite: (id: number) => void;
}

const productsApi: StateCreator<ShoppingState> = (set) => ({
  products: [],
  favorites: [],
  total: 0,

  addFavorite: (favorite) =>
    set((state) => {
      if (state.favorites.some((f) => f.id === favorite.id)) {
        return state;
      }
      return { favorites: [...state.favorites, favorite] };
    }),

    removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f.id !== id)
    })),


  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);
      console.log(existingProduct);
      let updatedProducts: CartProduct[];

      if (existingProduct) {
        // aumentar cantidad si el producto ya existe
        updatedProducts = state.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // agregar nuevo con cantidad inicial = 1
        updatedProducts = [...state.products, { ...product, quantity: 1 }];
      }

      const updatedTotal = updatedProducts.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );

      return { products: updatedProducts, total: updatedTotal };
    }),

  decreaseProduct: (id) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === id);

      if (!existingProduct) return state;

      let updatedProducts: CartProduct[];

      if (existingProduct.quantity > 1) {
        // disminuir cantidad
        updatedProducts = state.products.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        // eliminar si la cantidad llega a 0
        updatedProducts = state.products.filter((p) => p.id !== id);
      }

      const updatedTotal = updatedProducts.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );

      return { products: updatedProducts, total: updatedTotal };
    }),

  removeProduct: (id) =>
    set((state) => {
      const updatedProducts = state.products.filter((p) => p.id !== id);
      const updatedTotal = updatedProducts.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
      return { products: updatedProducts, total: updatedTotal };
    }),



});









export const useShoppingStore = create<ShoppingState>()(
  devtools(
    persist(
      productsApi, { name: "shopping-cart" }
    ))
);
