import React, { useState } from "react";
import GlassesItem from "./GlassesItem";
import ModelGlasses from "./ModelGlasses";
import ModelGlassesLeft from "./ModelGlassesLeft";

const ExStateGlasses = () => {
  let listProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  let [glasses, setGlasses] = useState(listProduct[3]);
  let showGlasses = (newProduct) => {
    setGlasses(newProduct);
  };
  let getListGlasses = () => {
    return listProduct.map((product) => {
      return (
        <div
          className="col-2"
          key={`Glasses-${product.id}`}
          onClick={() => showGlasses(product)}
        >
          <GlassesItem product={product} />
        </div>
      );
    });
  };
  return (
    <>
      <div className=" row justify-content-around">
        <ModelGlassesLeft listProduct={listProduct} />
        <ModelGlasses glasses={glasses} />
      </div>
      <div className="row my-5">{getListGlasses()}</div>
    </>
  );
};

export default ExStateGlasses;
