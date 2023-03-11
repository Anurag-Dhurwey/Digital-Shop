import React from "react";
import { useGlobleContext } from "../../../../Context/Globle_Context";

const Featured = () => {
  const { state, enabled } = useGlobleContext();
  const { featuredProducts } = state;
  return (
    <>
      <div className="">
        <div className="text-start"><h2 className="py-1 md:py-3 lg:py-3 font-bold pl-2 md:pl-10 lg:pl-10 md:text-xl lg:text-xl">Featured today </h2></div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1 md:gap-3 lg:gap-4">
          {featuredProducts.map((item, i) => {
            const { title, price, local_price, image } = item.attributes;
            // eslint-disable-next-line
            const { head_img, banner_img } = image;
            return (
              <div key={i} className="">
                <div className="w-[auto] h-[130px] md:w-[auto] md:h-[150px] lg:w-[auto] lg:h-[200px] overflow-hidden">
                <figure className="flex justify-center align-middle ">
                  <img className="" src={head_img[0]} alt="product"/>
                </figure>
                </div>
                <div className="flex justify-around align-middle py-2">
                  <div>
                    <h3 className="font-bold text-xs lg:text-base md:text-base pt-[3px] md:pt-[0px] lg:pt-[0px]">&#x20B9;{price}</h3>
                  </div>
                  <div>
                    <h3 className="text-sm">
                      <span className="line-through text-xs lg:text-base md:text-base">
                        &#x20B9;{local_price}
                      </span>{" "}
                      <span
                        className={` ${
                          enabled ? "text-[#00ff7f]" : "text-green-900"
                        } text-xs lg:text-base md:text-base`}
                      >
                        {Math.ceil(100 - (price * 100) / local_price)}% Off{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                <p className=" text-xs lg:text-base md:text-base">
                  {title.slice(0, 25)}....
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
