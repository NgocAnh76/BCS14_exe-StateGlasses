import React from "react";

const GlassesItem = (props) => {
  let { product } = props;
  return (
    <>
      <img
        className="w-100"
        src={product.url}
        alt=""
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default GlassesItem;
