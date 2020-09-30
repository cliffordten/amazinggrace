import React, { Component } from "react";

import HomeCard from "../../product-card/home-card/home-card.component";

import image1 from "../../../assets/images/shoes/6.png";
import image2 from "../../../assets/images/beds/1.jpg";
import image3 from "../../../assets/images/dresses/6.jpg";
import image4 from "../../../assets/images/chairproofs/6.jpg";
import image5 from "../../../assets/images/decor/40.jpg";

class HomeCardList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          name: "Shoes",
          img: image1,
          desc: "",
        },
        {
          id: 2,
          name: "Beds",
          img: image2,
          desc: "",
        },
        {
          id: 3,
          name: "Dresses",
          img: image3,
          desc: "",
        },
        {
          id: 4,
          name: "Chair Proofs",
          img: image4,
          desc: "",
        },
        {
          id: 5,
          name: "Decorations",
          img: image5,
          desc: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="product-list">
        {this.state.categories.map(({ id, name, img, desc }) => (
          <HomeCard key={id} name={name} img={img} desc={desc} />
        ))}
      </div>
    );
  }
}

export default HomeCardList;
