import React from "react";

import icon from "../../assets/images/icon.png";
import "./navbar.style.scss";
import "./navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="navbar_top"
      className="navbar navbar-expand-lg navbar-light bg-primary"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={icon} alt="amazing grace icon" /> Amazing Grace Decor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <NavLink to="/home" className="nav-item" activeClassName="active">
              <li className="nav-link ">Home</li>
            </NavLink>
            <NavLink
              to="/products"
              className="nav-item"
              activeClassName="active"
            >
              <li className="nav-link"> Products</li>
            </NavLink>
            <NavLink
              to="/services"
              className="nav-item"
              activeClassName="active"
            >
              <li className="nav-link"> Services</li>
            </NavLink>
            <NavLink
              to="/about-us"
              className="nav-item"
              activeClassName="active"
            >
              <li className="nav-link"> About</li>
            </NavLink>
            <NavLink
              to="/our-gallery"
              className="nav-item"
              activeClassName="active"
            >
              <li className="nav-link"> Gallery</li>
            </NavLink>
            <NavLink
              to="/contact-us"
              className="nav-item"
              activeClassName="active"
            >
              <li className="nav-link"> Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
