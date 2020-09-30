import React, { Component } from "react";

import ProductCard from "../../product-card/product-card/product-card.component";

import image1 from "../../../assets/images/shoes/6.png";
import image2 from "../../../assets/images/beds/1.jpg";
import image3 from "../../../assets/images/dresses/6.jpg";
import image4 from "../../../assets/images/chairproofs/6.jpg";
import image5 from "../../../assets/images/decor/40.jpg";

class ProductCardList extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 1,
          catergory: "These are beds",
          link: "/products#bedsheets",
          product: [
            {
              id: 1,
              name: "Shoes",
              img: image1,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 2,
              name: "Beds",
              img: image2,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 3,
              name: "Dresses",
              img: image3,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 4,
              name: "Chair Proofs",
              img: image4,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 5,
              name: "Decorations",
              img: image5,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
          ],
        },
        {
          id: 2,
          catergory: "These are beds",
          link: "/products#dresses",
          product: [
            {
              id: 1,
              name: "Shoes",
              img: image1,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 2,
              name: "Beds",
              img: image2,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 3,
              name: "Dresses",
              img: image3,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 4,
              name: "Chair Proofs",
              img: image4,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
            {
              id: 5,
              name: "Decorations",
              img: image5,
              desc: "this is a desc",
              link: "/home",
              price: "10000FCFA",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.items.map(({ id, catergory, link, product }) => (
          <div key={id} className="list-container">
              <div className="product-head">
              <h4>{catergory}</h4>
              <button type="button">
                <a href={`${link}` || "/"}>View All</a>
              </button>
            </div>
            <div className="product-body">
              {product.map(({ id, name, img, desc, price }) => (
                <ProductCard
                  key={id}
                  img={img}
                  name={name}
                  desc={desc}
                  price={price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductCardList;
