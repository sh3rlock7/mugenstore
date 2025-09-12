import {useQuery} from "@tanstack/react-query"
import { getProducts } from "../actions/getProducts.action"
import type { Products } from "../interfaces/Product.interface"



export const useProducts = (limit: number, skip: number) => {
  return useQuery<Products>({
    queryKey: ["Products", limit, skip],
    queryFn: () => getProducts(limit, skip),
    staleTime: 1000 * 60 * 60,
  });
};

