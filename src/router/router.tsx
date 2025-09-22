import { createBrowserRouter } from "react-router-dom";
import {StoreLayout} from '../../src/layouts/StoreLayout';
import { ProductLanding } from "../components/ProductLanding";
import { CheckoutLanding } from "../components/Checkout/CheckoutLanding";
import { FavoriteList } from "../components/Favorites/FavoriteList";
import { SearchLanding } from "../components/Search/SearchLanding";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
    children: [
      {
        path: "", element:<ProductLanding />
      },
      {
        path: "checkout", element: <CheckoutLanding /> 
      },
      {
        path: "favorites", element: <FavoriteList /> 
      },
      {
        path: `search/:product`, element: <SearchLanding />
      }
    ]
  }
]);