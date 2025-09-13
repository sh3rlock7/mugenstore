import { createBrowserRouter } from "react-router-dom";
import {StoreLayout} from '../../src/layouts/StoreLayout';
import { ProductLanding } from "../components/ProductLanding";
import { CheckoutLanding } from "../components/Checkout/CheckoutLanding";

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
      }
    ]
  }
]);