import React from "react";

import "./home-card.style.scss";

const HomeCard = ({ name, desc, img }) => {
  
  return (
    <div style={{
        backgroundImage: `url(${img})`
    }} className="card-wrapper">
      <div className="card-txt">
        <button>Explore!</button>
      </div>
      <div className="card-bottom-txt">
        <div className="name">
          <h4>{name}</h4>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
 