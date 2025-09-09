import {useQuery} from "@tanstack/react-query"
import { getProducts } from "../actions/getProducts.action"
import type { Products } from "../interfaces/Product.interface"



export const useProducts = (limit: number) => {
  return useQuery<Products>({
    queryKey: ["Products", limit],
    queryFn: () => getProducts(limit),
    staleTime: 1000 * 60 * 60,
  });
};

