import React from "react";
import { useState } from "react";
import { useGlobleContext } from "../../../Context/Globle_Context";

const AddToCartBtn = ({ stock }) => {
  const { enabled } = useGlobleContext();
  const [qty, setQty] = useState(1);
  const DecQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  const IncQty = () => {
    stock && stock > qty ? setQty(qty + 1) : setQty(stock);
  };
  return (
    <div>
      <div className="quantity">
        <h3 className="my-5">
          <span
            className={`px-3 py-2 cursor-pointer m-1 ${
              enabled ? "bg-gray-500 text-white" : "bg-slate-400 text-black"
            }`}
            onClick={DecQty}
          >
            -
          </span>
          <span
            className={`px-3 py-2  m-1 ${
              enabled ? "bg-gray-500 text-white" : "bg-slate-400 text-black"
            }`}
          >
            {qty}
          </span>
          <span
            className={`px-3 py-2 cursor-pointer m-1 ${
              enabled ? "bg-gray-500 text-white" : "bg-slate-400 text-black"
            }`}
            onClick={IncQty}
          >
            +
          </span>
        </h3>
      </div>
      <div className={`my-3`}>
        <button className="bg-yellow-500 text-blue-50 px-5 mx-1 py-2">
          {" "}
          Add to cart
        </button>
        <button className="bg-yellow-500 text-blue-50 px-5 mx-1 py-2">
          {" "}
          Buy now
        </button>
      </div>
    </div>
  );
};

export default AddToCartBtn;
