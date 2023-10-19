import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import DisplayBrand from "./components/DisplayBrand";
import BrandAdvertisement from "./components/BrandAdvertisement";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/partners",
        element: <DisplayBrand></DisplayBrand>,
      },
      {
        path: "/brand/:brandName",
        element: <BrandAdvertisement></BrandAdvertisement>,
        loader: ({ params }) => {
          console.log(params);
          console.log(params.brandName);
          return fetch(
            `http://localhost:4000/products?brand=${params.brandName}`
          );
        },
      },
      {
        path: "/productDetails/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:4000/productDetails/${params._id}`);
        },
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
