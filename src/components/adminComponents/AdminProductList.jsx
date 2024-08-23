import React from "react";
import AdminProductCard from "./AdminProductCard";

const AdminProductList = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((el) => (
        <AdminProductCard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default AdminProductList;
