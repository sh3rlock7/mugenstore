import { ProductApi } from "../api/ProductsApi"
import type {  Products } from "../interfaces/Product.interface"



export const getProducts = async( productLimit: number ):Promise<Products> => {
  
  const { data } = await ProductApi.get<Products>(`?limit=${productLimit}`)

  return data 
}


