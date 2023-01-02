import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div>Products</div>
      <div>
        <select>
          <option value="lowtohigh">Price : low to high</option>
          <option value="hightolow">Price : high to low</option>
          <option value="hightolow">Rating : high to low</option>
          <option value="hightolow">Rating : low to high</option>
        </select>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
