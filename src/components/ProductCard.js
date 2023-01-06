import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  addToCart,
  updateProduct,
  deleteProduct,
} from "../middleware/productAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ProductCard({ idx, product }) {
  const [isInEditMode, setIsInEditMode] = useState(false);

  let initialState = {
    title: product?.title,
    price: product?.price,
    rating: {
      rate: product?.rating.rate,
    },
  };
  const [editInput, setEditInput] = useState(initialState);

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cartData?.cartItems);
  // function addtoCart() {
  //   //console.log(product);
  //   dispatch(addToCart(product));
  // }

  function editProduct(productId) {
    if (!Object.is(editInput, initialState)) {
      dispatch(updateProduct(productId, editInput));
    }
  }

  function deletedata(productId) {
    dispatch(deleteProduct(productId));
  }

  return (
    <div className="card">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productContent">
        {!isInEditMode ? (
          <div>
            <div className="part1">
              <div className="producttitle">{product?.title}</div>
              <h2>Price : {product?.price}</h2>
              <h4>
                Rating : {product?.rating?.rate}
                <AiFillStar />
              </h4>
              <hr />
            </div>
            <div className="part2">
              <button
                className="editButton"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  setIsInEditMode(true);
                }}
              >
                Edit
              </button>
              <button
                className="deleteButton"
                onClick={() => {
                  deletedata(product?.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="editContainer">
              <div className="inputs">
                <input
                  value={editInput?.title}
                  onChange={(e) => {
                    setEditInput({ ...editInput, title: e.target.value });
                  }}
                ></input>
                <input
                  value={editInput?.price}
                  onChange={(e) =>
                    setEditInput({ ...editInput, price: e.target.value })
                  }
                ></input>
                <input
                  value={editInput?.rating?.rate}
                  onChange={(e) => {
                    setEditInput({
                      ...editInput,
                      rating: { ...editInput.rating, rate: e.target.value },
                    });
                  }}
                ></input>
              </div>
              <div className="inputlables">
                <label>Edit Title</label>
                <label>Edit Price</label>
                <label>Edit Rating</label>
              </div>
            </div>

            <hr />
            <button
              style={{ marginRight: "10px" }}
              onClick={() => {
                editProduct(product?.id);
                setIsInEditMode(false);
              }}
            >
              Save Edit
            </button>
            <button onClick={() => setIsInEditMode(false)}>Cancel</button>
          </div>
        )}
      </div>
      {/* <button onClick={addtoCart} style={{ margin: "10px" }}>
        Add to Cart
      </button> */}
    </div>
  );
}

export default ProductCard;
