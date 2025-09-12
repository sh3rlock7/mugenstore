import { ProductApi } from "../api/ProductsApi"
import type {  Products } from "../interfaces/Product.interface"



export const getProducts = async( productLimit: number, productSkip: number ):Promise<Products> => {
  
  const { data } = await ProductApi.get<Products>(`?limit=${productLimit}&skip=${productSkip}`)

  return data 
}


