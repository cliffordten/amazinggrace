import React from "react";

import NavBar from "../navbar/navbar.component";
import logo from "../../assets/images/logo.png";

import "./header.style.scss";
import image1 from "../../assets/images/team/1.jpg";
import image2 from "../../assets/images/team/2.jpg";
import image3 from "../../assets/images/team/6.jpg";


const vall = process.env.PUBLIC_URL;

const Header = () => {
  return (
    <React.Fragment>
      <NavBar />

      <header>
        <div className="bg-dark">
          <img src={logo} alt="amazing grace logo" />
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="/carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="/carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="/carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">{""}</h2>
                <p className="lead">
                  Welcome to Amazing Grace Decor, See what we offer!
                </p>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">{""}</h2>
                <p className="lead">
                  Welcome to Amazing Grace Decor, See what we offer!
                </p>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">{""}</h2>
                <p className="lead">
                  Welcome to Amazing Grace Decor, See what we offer!
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="/carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="/carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        
        {/* <img src={image} alt=""/> */ console.log("asdmnfkl ",vall)}
      </header>
    </React.Fragment>
  );
};
export default Header;