import React from "react";

const ModelGlassesLeft = (props) => {
  let { listProduct } = props;
  return (
    <div className="col-3">
      <img
        className="w-100"
        src="./public/glassesImage/model.jpg"
        alt=""
        style={{ position: "relative" }}
      />
      <img
        src={listProduct[0].url}
        alt=""
        style={{
          width: "155px",
          position: "absolute",
          top: "88px",
          left: "309px",
          opacity: "0.5",
        }}
      />
      <div
        className="glasses_info text-white"
        style={{
          backgroundColor: "#faad7ab0",
          position: "absolute",
          top: "240px",
          width: "300px",
        }}
      >
        <h3 className="glasses_name text-primary">{listProduct[0].name}</h3>
        <p className="glasses_desc">{listProduct[0].desc}</p>
      </div>
    </div>
  );
};

export default ModelGlassesLeft;
