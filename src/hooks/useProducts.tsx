import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../actions/getProducts.action";
import type { Products } from "../interfaces/Product.interface";

export const useProducts = (limit: number, skip: number) => {
  const queryClient = useQueryClient();

  return {
    ...useQuery<Products>({
      queryKey: ["Products", limit, skip],
      queryFn: () => getProducts(limit, skip),
      staleTime: 1000 * 60 * 60,
    }),
    prefetchNext: (nextSkip: number) =>
      queryClient.prefetchQuery({
        queryKey: ["Products", limit, nextSkip],
        queryFn: () => getProducts(limit, nextSkip),
        staleTime: 1000 * 60 * 60,
      }),
  };
};