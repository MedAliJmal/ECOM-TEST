import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, handleAddCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((el) => (
        <ProductCard handleAddCart={handleAddCart} key={el.id} el={el} />
      ))}
    </div>
  );
};

export default ProductList;
