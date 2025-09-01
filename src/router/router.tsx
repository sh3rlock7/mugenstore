import { createBrowserRouter } from "react-router-dom";
import {StoreLayout} from '../../src/layouts/StoreLayout';
import { ProductLanding } from "../components/ProductLanding";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
    children: [
      {
        path: "", element:<ProductLanding />
      }
    ]
  }
]);