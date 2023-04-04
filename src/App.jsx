import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/error/ErrorElement";
import Home from "./components/home/Home";
import Order from "./components/order/Order";
import Shop from "./components/shop/Shop";
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
          element: <Shop />,
          loader: async () => {
            return fetch("products.json");
          },
        },
        {
          path: "/order",
          element: <Order />,
          loader: async () => {
            return fetch("products.json");
          },
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
