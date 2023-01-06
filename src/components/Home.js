import React, { useEffect, useState } from "react";

import { getProduct, addNewProduct } from "../middleware/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import Navbar from "./Navbar";

function Home() {
  const dispatch = useDispatch();

  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectSort, setSelectSort] = useState();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  let stateUpliftSearch = (searchInp) => {
    if (searchInp !== "") {
      setProducts(
        data?.filter((product) =>
          product?.title
            .toLowerCase()
            .includes(searchInp.toString().toLowerCase())
        )
      );
    } else {
      setProducts(data);
    }
  };

  const data = useSelector((state) => state?.productData?.products);

  function categoryFilter(category) {
    setSelectSort("default");

    if (category === "men's clothing") {
      setIsCategorySelected(true);
      setProducts(
        data?.filter((product) => product.category === "men's clothing")
      );
    } else if (category === "jewelery") {
      setIsCategorySelected(true);

      setProducts(data?.filter((product) => product.category === "jewelery"));
    } else if (category === "electronics") {
      setIsCategorySelected(true);

      setProducts(
        data?.filter((product) => product.category === "electronics")
      );
    } else if (category === "women's clothing") {
      setIsCategorySelected(true);

      setProducts(
        data?.filter((product) => product.category === "women's clothing")
      );
    } else {
      setProducts(data);
    }
  }

  useEffect(() => {
    const CategorySet = new Set();
    data &&
      data.map((product) => {
        CategorySet.add(product?.category);
      });
    let cat = Array.from(CategorySet);
    setCategories(cat);

    categoryFilter(categories);
  }, [data]);

  function sortProducts(e) {
    let prod;
    //console.log(e.target.value);
    setSelectSort(e.target.value);

    switch (e.target.value) {
      case "price_Lowtohigh":
        prod = products.sort((a, b) => a.price - b.price);

        setProducts([...prod]);
        break;
      case "price_Hightolow":
        prod = products.sort((a, b) => b.price - a.price);

        setProducts([...prod]);
        break;
      case "rating_Hightolow":
        prod = products.sort((a, b) => b.rating.rate - a.rating.rate);

        setProducts([...prod]);
        break;
      case "rating_Lowtohigh":
        prod = products.sort((a, b) => a.rating.rate - b.rating.rate);

        setProducts([...prod]);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      {data === undefined ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <Navbar stateUpliftSearch={stateUpliftSearch} />
          <div className="categories">
            {categories &&
              categories?.map((element, idx) => (
                <button
                  className="category"
                  key={idx}
                  onClick={() => categoryFilter(element)}
                >
                  {element.toUpperCase()}
                </button>
              ))}
            <div>
              {isCategorySelected && (
                <button
                  className="cancelfilter"
                  onClick={() => {
                    setProducts(data);
                    setIsCategorySelected(false);
                  }}
                >
                  Cancel Filter
                </button>
              )}
            </div>
          </div>

          <div>
            <div className="sortingDiv">
              <select
                className="sorting"
                value={selectSort}
                onChange={sortProducts}
              >
                <option value="defaultData">Default</option>
                <optgroup label="PRICE">
                  <option value="price_Lowtohigh">PRICE : low to high</option>
                  <option value="price_Hightolow">PRICE : high to low</option>
                </optgroup>
                <optgroup label="RATING">
                  <option value="rating_Hightolow">RATING : high to low</option>
                  <option value="rating_Lowtohigh">RATING : low to high</option>
                </optgroup>
              </select>
            </div>
            <div className="products">
              {products && products.length === 0 ? (
                <h1>Enter valid Input</h1>
              ) : (
                products &&
                products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
