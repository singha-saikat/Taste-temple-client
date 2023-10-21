import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import BrandAdvertisement from "./components/BrandAdvertisement";
import DisplayBrand from "./components/DisplayBrand";
import ErrorPage from "./components/ErrorPage";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import MyCart from "./components/MyCart";
import PrivateRoutes from "./components/PrivateRoutes";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";

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
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
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
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/cart/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:4000/cart/myCartData"),
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
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:4000/productDetails/${params._id}`);
        },
      },
      {
        path: "/updateDetails/:_id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:4000/updateDetails/${params._id}`);
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
