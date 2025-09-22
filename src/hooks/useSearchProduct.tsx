import { useQuery } from "@tanstack/react-query"
import type { Products } from "../interfaces/Product.interface"
import { getSearchProduct } from "../actions/getSearchProduct.action"


export const useSearchProduct = (product: string ) => {
  
    return{ 
        ...useQuery<Products>({
            queryKey: ["SearchedProduct", product],
            queryFn: () => getSearchProduct(product),
            staleTime: 1000 * 60 * 60
        })}
}


