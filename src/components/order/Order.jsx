import { ArrowSmallRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  clearCart,
  getStoredCart,
  removeFromLoacl,
} from "../../utility/localStorage";
import OrderItem from "../order-item/OrderItem";
import OrdersCart from "./OrdersCart";
const Order = () => {
  const [cart, setCart] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedCart = getStoredCart();
    const processedCart = [];

    for (const id in storedCart) {
      const matchProduct = data.find((product) => product.id === id);
      if (matchProduct) {
        const userSeletedQuantity = storedCart[id];
        matchProduct.quantity = userSeletedQuantity;
        processedCart.push(matchProduct);
      }
    }
    setCart(processedCart);
  }, [data]);

  const removeItem = (id) => {
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromLoacl(id);
  };
  const clear = () => {
    setCart([]);
    clearCart();
  };
  return (
    <>
      <section className="order">
        <div className="container">
          <div className="orders-wrapper grid grid-cols-2 content-center justify-items-center h-[90vh]">
            <div className="orders-item h-[700px] overflow-y-auto px-5 grid content-center">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <OrderItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                  />
                ))
              ) : (
                <>
                  <p className="text-2xl font-bold text-red-500">
                    Your Ema-Jhon cart is empty
                  </p>
                  <Link to={"/order"}>
                    <button className="flex bg-orange-400 w-8/12 text-white my-4 mx-auto py-3 justify-center align-baseline mb-5 hover:bg-orange-500">
                      Review Order
                      <ShoppingBagIcon className="ms-2 w-6" />
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div className="cart w-full flex items-center">
              <OrdersCart clear={clear} cart={cart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
