import React from "react";
import { AiFillStar } from "react-icons/ai";

function ProductCard({ idx, product }) {
  return (
    <div className="card">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="producttitle">{product?.title}</div>
      <h2>Rate : {product?.price}</h2>
      <h4>
        Rating : {product?.rating?.rate}
        <AiFillStar />
      </h4>
    </div>
  );
}

export default ProductCard;
