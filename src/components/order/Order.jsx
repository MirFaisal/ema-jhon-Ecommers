import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
    const processedCart = [];
    const storedCart = getStoredCart();

    for (const id in storedCart) {
      const matchproduct = data.find((product) => product.id === id);

      if (matchproduct) {
        const quantity = storedCart[id];
        matchproduct.quantity = quantity;
        processedCart.push(matchproduct);
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
            <div className="orders-item h-[700px] overflow-y-auto px-5">
              {cart.map((item) => (
                <OrderItem key={item.id} item={item} removeItem={removeItem} />
              ))}
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
