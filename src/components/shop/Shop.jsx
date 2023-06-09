import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, clearCart, getStoredCart } from "../../utility/localStorage";
import Cart from "../cart/Cart";
import Product from "../product/Product";

export const loader = async () => {
  return fetch("products.json");
};
const Shop = () => {
  const [carts, setCart] = useState([]);
  // load data frm api
  const products = useLoaderData();
  const addToCart = (selectedProduct) => {
    let newCart = [];

    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      selectedProduct.quantity = selectedProduct.quantity + 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  // local storage to cart
  useEffect(() => {
    const storedCart = getStoredCart();
    const processedCart = [];

    for (const id in storedCart) {
      const matchProduct = products.find((product) => product.id == id);
      if (matchProduct) {
        const userSeletedQuantity = storedCart[id];
        matchProduct.quantity = userSeletedQuantity;
        processedCart.push(matchProduct);
      }
    }
    setCart(processedCart);
  }, [products]);

  // add to cart event handel
  const clear = () => {
    setCart([]);
    clearCart();
  };

  return (
    <>
      <div className="products">
        <div className="flex justify-between flex-row-reverse sm:flex-row">
          <div className="products-wrapper basis-7/12 sm:basic-8/12 lg:basis-10/12 md:basis-9/12 mt-60 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-5">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className="cart relative basis-5/12 sm:basis-4/12 lg:basis-2/12 md:basis-3/12 mt-60 flex border w-full">
            <div className="sticky h-[100vh] top-0 bg-orange-200 w-full">
              <Cart clear={clear} cart={carts}>
                {/* component children */}
                <Link to={"/order"}>
                  <button className="flex bg-orange-400 w-10/12 text-white mx-auto py-3 justify-center align-baseline mb-5 hover:bg-orange-500">
                    Review Order
                    <ArrowSmallRightIcon className="w-6" />
                  </button>
                </Link>
              </Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
