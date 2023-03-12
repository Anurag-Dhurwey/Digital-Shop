import React from "react";
import { useGlobleContext } from "../../../../Context/Globle_Context";
import ProductCarousel from "./ProductCarousel";
import ProductsTemplate from "./ProductsTemplate";

const Featured = () => {
  const {enabled}=useGlobleContext()
  return (
    <>
      <div className={`${enabled?' text-white':' text-black'}`}>
        <div className="text-start">
          <h2 className="py-1 md:py-3 lg:py-3 font-bold pl-2 md:pl-10 lg:pl-10 md:text-xl lg:text-xl">
            Featured today{" "}
          </h2>
        </div>
        <ProductCarousel>
          <ProductsTemplate />
          <ProductsTemplate />
          <ProductsTemplate />
          <ProductsTemplate />
        </ProductCarousel>
      </div>
    </>
  );
};

export default Featured;
