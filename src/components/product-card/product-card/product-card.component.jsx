import React from "react";

import "./product-card.style.scss";

const ProductCard = ({ name, desc, img, price }) => {
  return (
    <div className="product-card">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="card-img"
      ></div>
      <div className="card-body">
        <h3>{name}</h3>
        <h6>{desc}</h6>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
