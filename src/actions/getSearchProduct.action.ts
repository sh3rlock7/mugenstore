
import { ProductApi } from "../api/ProductsApi"
import type { Products } from "../interfaces/Product.interface"



export const getSearchProduct = async( product: string ):Promise<Products> => {
    
    const { data }= await ProductApi.get<Products>(`/search?q=${product}`)

    return data
}


