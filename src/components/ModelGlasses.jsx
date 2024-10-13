import React from "react";

const ModelGlasses = (props) => {
  let { glasses } = props;
  return (
    <div className="col-3">
      <img className="w-100" src="./public/glassesImage/model.jpg" alt="" />
      <img
        src={glasses.url}
        alt=""
        style={{
          width: "155px",
          position: "absolute",
          top: "90px",
          right: "310px",
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
        <h3 className="glasses_name text-primary">{glasses.name}</h3>
        <p className="glasses_desc">{glasses.desc}</p>
      </div>
    </div>
  );
};

export default ModelGlasses;
