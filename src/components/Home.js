import React, { useEffect, useState } from "react";
//import getProduct from "../middleware/Action";
import { getProduct } from "../middleware/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const data = useSelector((state) => state?.productData?.products);
  //console.log(data);

  return (
    <div>
      {data === undefined ? (
        <Loading />
      ) : (
        <div className="products">
          {data &&
            data.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
