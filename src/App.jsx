import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/error/ErrorElement";
import Home from "./components/home/Home";
import Order, { loader as orderLoader } from "./components/order/Order";
import Shop, { loader as productLoader } from "./components/shop/Shop";
import MainLayout from "./layout/MainLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop />, loader: productLoader },
        { path: "/order", element: <Order />, loader: orderLoader },
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
