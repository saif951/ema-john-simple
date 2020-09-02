import React from "react";
import fakeData from "../../fakeData/index";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first50 = fakeData.slice(0, 50);
  const [products, setProducts] = useState(first50);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product handleAddProduct={handleAddProduct} product={pd}></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
