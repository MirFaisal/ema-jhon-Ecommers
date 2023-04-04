import { MinusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const OrderItem = ({ item, removeItem }) => {
  const { id, name, img, price, quantity } = item;

  return (
    <>
      <div className="cart w-[550px] flex items-center border p-3 rounded-lg mb-5">
        <div className="image w-[100px] flex-none">
          <img src={img} alt="" />
        </div>
        <div className="text text-start flex-auto px-5">
          <h3 className="font-bold">{name}</h3>
          <p>
            price : <span className="text-orange-500">${price}</span>
          </p>
          <p>
            Quantity : <span className="text-orange-500">{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => {
            removeItem(id);
          }}
          className="flex-none bg-transparent"
        >
          <MinusCircleIcon className="w-12 text-red-500 hover:text-red-600 " />
        </button>
      </div>
    </>
  );
};

export default OrderItem;
