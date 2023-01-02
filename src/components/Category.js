import React from "react";
import { useSelector } from "react-redux";

function Category() {
  const data = useSelector((state) => state?.productData?.products);
  const CategorySet = new Set();

  data &&
    data.map((product) => {
      CategorySet.add(product?.category);
    });

  const categories = Array.from(CategorySet);

  return (
    <div className="category">
      {categories &&
        categories.map((element, idx) => (
          <h3 key={idx}>{element.toUpperCase()}</h3>
        ))}
    </div>
  );
}

export default Category;
