import React, { useState, useRef, useEffect } from "react";
import { addNewProduct } from "../middleware/productAction";
import { useDispatch, useSelector } from "react-redux";

//import { Form } from "react-router-dom";

function Navbar(props) {
  const dispatch = useDispatch();

  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isformOpen, setIsFormOpen] = useState(false);

  const [productInput, setProductInput] = useState({
    title: "",
    price: "",
    rating: {
      rate: "",
    },
  });

  function searchItem() {
    props.stateUpliftSearch(inputValue);
    ref.current.value = "";
    setInputValue("");
  }

  function openAddForm() {
    setIsFormOpen(true);
  }

  function addProduct() {
    // console.log(productInput, "log before dispatch");
    dispatch(addNewProduct(productInput));

    setIsFormOpen(false);
  }

  return (
    <div className="navbar">
      <div className="logo">PRODUCTS</div>

      <div className="navbuttons">
        <div className="searchDiv">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              ref={ref}
              type="text"
              className="search"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label onClick={searchItem}>Search</label>
          </form>
        </div>

        {isformOpen ? (
          <div className="addform">
            <div className="addproduct">
              <input
                value={productInput.title}
                onChange={(e) =>
                  setProductInput({ ...productInput, title: e.target.value })
                }
              ></input>
              <input
                value={productInput.price}
                onChange={(e) =>
                  setProductInput({ ...productInput, price: e.target.value })
                }
              ></input>

              <input
                value={productInput.rating.rate}
                onChange={(e) => {
                  setProductInput({
                    ...productInput,
                    rating: { ...productInput.rating, rate: e.target.value },
                  });
                }}
              ></input>
            </div>
            <div>
              <button onClick={addProduct}>Add Product</button>
            </div>
          </div>
        ) : (
          <button onClick={openAddForm}>ADD NEW PRODUCT</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
