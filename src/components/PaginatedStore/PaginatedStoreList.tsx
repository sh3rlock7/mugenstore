import { CircularProgress, Grid, Pagination, Typography } from "@mui/material";
import { useProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import PaginatedItem from "./PaginatedItem";

export const PaginatedStoreList = () => {
    const limit = 6;
    const [page, setPage] = useState(1);
    const initialOffset = 6;

    const skip = initialOffset + (page - 1) * limit;

    const { data, prefetchNext, isFetching} = useProducts(limit, skip);

    
    useEffect(() => {
      const nextSkip = initialOffset + page * limit; 
      prefetchNext(nextSkip);
    }, [page]);

  return (
    <Grid container size={12} spacing={2} sx={{p:2}}>
          <Grid size={12}>
            <Typography variant="h1" sx={{textAlign: "left", ml: 1, mt: 3}}>Top Products</Typography>
          </Grid>
          {
            isFetching ? (
              <CircularProgress />
            )
            :
            (
              data?.products.map((product) => (
                  <Grid size={6} key={product.id}>
                    <PaginatedItem product={product} />
                  </Grid>
                ))
            )
          }

      <Grid size={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={10}  // ajustalo según el total de páginas
          page={page}
          onChange={(_event, value) => setPage(value)}
        />
      </Grid>
    </Grid>
  );
};