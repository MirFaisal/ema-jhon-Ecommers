import { CreditCardIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const OrdersCart = ({ cart, clear }) => {
  let totalSelect = 0;
  let totalSeletedPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalSelect = totalSelect + product.quantity;
    totalSeletedPrice = totalSeletedPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  let tax = totalSeletedPrice * 0.09;
  let grandTotal = totalSeletedPrice + totalShipping + tax;
  return (
    <div className="w-2/4 mx-auto bg-orange-100 rounded-xl">
      <div className="hero-text px-4">
        <h2 className="text-[25px] font-semibold text-center my-9">
          Order Summary
        </h2>
        <ul className="flex flex-col h-[300px] justify-between">
          <li className="flex justify-between">
            Selected Items:
            <span className="font-bold">{totalSelect} </span>
          </li>
          <li className="flex justify-between">
            Total Price:
            <span className="font-bold border-2 border-transparent border-b-red-500">
              ${totalSeletedPrice}
            </span>
          </li>
          <li className="flex justify-between">
            Total Shipping Charge:
            <span className="font-bold border-2 border-transparent border-b-red-500">
              ${totalShipping}
            </span>
          </li>
          <li className="flex justify-between">
            Tax:{" "}
            <span className="font-bold border-2 border-transparent border-b-red-500">
              ${tax.toFixed(2)}
            </span>
          </li>
          <li className="mb-9 text-xl flex justify-between">
            Grand Total:{" "}
            <span className="font-bold border-2 border-transparent border-b-red-500">
              {" "}
              ${grandTotal.toFixed(2)}
            </span>
          </li>
        </ul>
        <button
          onClick={clear}
          className="flex bg-red-500 w-10/12 text-white mx-auto py-3 px-5 justify-between align-baseline mb-5 rounded-md hover:bg-red-600"
        >
          Clear Cart
          <TrashIcon className="w-6" />
        </button>
        <Link to={"/order"}>
          <button className="flex bg-orange-400 w-10/12 text-white mx-auto py-3 px-5 justify-between align-baseline mb-5 rounded-md hover:bg-orange-500">
            Review Order
            <CreditCardIcon className="w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersCart;
