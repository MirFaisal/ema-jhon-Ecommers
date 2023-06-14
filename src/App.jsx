import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateComponent from "../private/PrivateComponent";
import ErrorElement from "./components/error/ErrorElement";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Order from "./components/order/Order";
import Register from "./components/register/Register";
import Shop, { loader as shopLoader } from "./components/shop/Shop";
import MainLayout from "./layout/MainLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        {
          path: "/shop",
          element: (
            <PrivateComponent>
              <Shop />
            </PrivateComponent>
          ),
          loader: shopLoader,
        },
        {
          path: "/order",
          element: (
            <PrivateComponent>
              <Order></Order>
            </PrivateComponent>
          ),
          loader: () => {
            return fetch("products.json");
          },
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
      errorElement: <ErrorElement />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
