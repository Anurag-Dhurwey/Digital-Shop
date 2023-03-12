import React from "react";
import { useGlobleContext } from "../../../Context/Globle_Context";
import AproductImages from "./AproductImages";
import AddToCartBtn from "./AddToCartBtn";
import RequiredMeta from "./RequiredMeta";
const MapOneProduct = ({ aProduct }) => {
  const { enabled } = useGlobleContext();
  return (
    <>
      {aProduct?.map((item, i) => {
        // eslint-disable-next-line
        const {
          title,
          price,
          local_price,
          slug,
          qty,
          description,
          category,
          size,
          colour,
          required_metadata,
          metadata,
          rating,
          image,
          box_item,
        } = item.attributes;

        return (
          <div key={item.id} className="grid grid-cols-2 gap-5">
            <AproductImages image={image} />
            <div className="details">
              <h3>{title}</h3>
              {/* <StarsRate stars={stars}/> */}
              {/* <h3>{reviews}</h3> */}
              <h2 className="font-extrabold">&#x20B9;{price}</h2>
              <p className="text-sm">
                <span className="line-through">&#x20B9;{local_price}</span>{" "}
                <span
                  className={`font-semibold ${
                    enabled ? "text-[#00ff7f]" : "text-green-900"
                  }`}
                >
                  {Math.ceil(100 - (price * 100) / local_price)}% Off{" "}
                </span>
              </p>
              {description.desc.map((item,i)=>{
                return <p key={i}>{item}</p>
              })}
              <AddToCartBtn stock={qty} />
              <RequiredMeta metaData={required_metadata}/>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MapOneProduct;
