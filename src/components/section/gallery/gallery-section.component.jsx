import React from "react";

import image1 from "../../../assets/images/team/1.jpg";
import image2 from "../../../assets/images/team/2.jpg";
import image3 from "../../../assets/images/team/3.jpg";
import image4 from "../../../assets/images/team/4.jpg";
import image5 from "../../../assets/images/team/5.jpg";
import image6 from "../../../assets/images/team/6.jpg";
import image7 from "../../../assets/images/team/7.jpg";
import image8 from "../../../assets/images/team/8.jpg";
import image9 from "../../../assets/images/team/9.jpg";

import "./gallery-section.style.scss";

class GallerySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {gallery:[
      {
        id: 1,
        img: image1,
      },
      {
        id: 2,
        img: image2,
      },
      {
        id: 3,
        img: image3,
      },
      {
        id: 4,
        img: image4,
      },
      {
        id: 5,
        img: image5,
      },
      {
        id: 6,
        img: image6,
      },
      {
        id: 7,
        img: image7,
      },
      {
        id: 8,
        img: image8,
      },
      {
        id: 9,
        img: image9,
      },
    ]};
  }

  render() {
    return (
      <div className="container">
        <div className="gal-container">
          <div className="gallery-head">
            <h2>Our Image Gallery</h2>
          </div>
          <div className="gallery-body">
            {this.state.gallery.map(({ id, img}) => (
              <div key={id} ><img src={img} alt="img-gallery"/> </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GallerySection;
