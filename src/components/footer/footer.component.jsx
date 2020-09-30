import React, { Component } from "react";
import "./footer.style.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className=" page-footer font-small blue pt-4">
        <div className="container">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Amazing Grace Decor</h5>
                <p>
                 Come, See, Explore, Ask Questions, Discuss, Make Arrangement/Appointement, Bill, Get Satisfied
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />


              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Quick Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="/out-gallery">Our Gallery</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="/"> Amazing Grace Decor</a>
          </div>
        </div>
      </footer>
    );
  }
}
