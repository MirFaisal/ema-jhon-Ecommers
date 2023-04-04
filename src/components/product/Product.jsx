import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, price, ratings, seller } = product;
  //   console.log(product);
  return (
    <>
      <div className=" relative card p-5 w-3/4 border rounded-2xl overflow-hidden">
        <div className="image">
          <img className=" rounded-2xl" src={img} alt="" />
        </div>
        <div className="primary-info mb-9 mt-2 px-2">
          <h3 className="w-full">{name}</h3>
          <p>Price : {price}</p>
        </div>
        <div className="secondary-info flex flex-col mb-9 px-2">
          <small>Manufacturer : {seller}</small>
          <small>Rating : {ratings}</small>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="py-3 absolute left-0 bottom-0 inline-flex w-full bg-[#FFE0B3] items-center place-content-center"
        >
          Add to Cart
          <ShoppingBagIcon className="w-4" />
        </button>
      </div>
    </>
  );
};

export default Product;
