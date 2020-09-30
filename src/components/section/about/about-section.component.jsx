import React from "react";
import image2 from "../../../assets/images/team/2.jpg";

import "./about-section.style.scss";
const AboutUsSection = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>Amazing Grace Decor</h3>
      </div>
      <div className="row">
        <div className="col-md-6 ceo">
          <div
            className="row image"
            style={{
              backgroundImage: `url(${image2})`,
              height: "250px",
            }}
          ></div>
          <div className="row foot">
            <h6>Meet the CEO of Amazing Grace</h6>
          </div>
        </div>

        <div className="col-md-6">
          <div className="ceoin">
            <h5>
              My name is Mrs. MBUH REBECCA BECKY <br /> CEO of AMAZING GRACE
              DÉCOR. I named Amazing Grace <br /> after my mum since her name
              was GRACE, I loved her so much so I attached AMAZING to make it
              more fabulous and beautiful. AMAZING GRACE DÉCOR celebrated its
              10th Anniversary this 2020, it all started as a small skill put in
              place.
            </h5>
          </div>
        </div>
      </div>

      <div className="row">
        <h3>Amazing Grace Training Center</h3>
      </div>
      <div className="row row2">
        <div className="col-md-6">
          <div className="ceoin">
            <h5>
              Amazing Grace is also a Training Center which opened from Mondays
              to Fridays. Our doors are opened to everyone, to obtained a
              certificate in amazing grace décor, we trained an individual for
              2years and our working hours 8:00am to 6:00pm. We have trained and
              graduated many children who have opened up their own shops, which
              help in raising up the AMAZING GRACE FLAG and help to provide
              employment to young Cameroonians.
            </h5>
          </div>
        </div>

        <div className="col-md-6 ceo">
          <div
            className="row image"
            style={{
              backgroundImage: `url(${image2})`,
              height: "250px",
            }}
          ></div>
        </div>
      </div>

      <div className="row">
        <h3>Amazing Grace Management Team</h3>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div
            className="imge"
            style={{
              backgroundImage: `url(${image2})`,
              height: "200px",
              width: "200px"
            }}
          ></div>
          <div className="foot">
            <h5>MBUH   REBECCA BECKY</h5>
            <h6>Founder/CEO</h6>
            <h6>+237-675-948-436</h6>
          </div>
        </div>
        
        <div className="col-md-4">
          <div
            className="imge"
            style={{
              backgroundImage: `url(${image2})`,
              height: "200px",
              width: "200px"
            }}
          ></div>
          <div className="foot">
            <h5>MBUH NKEH EDWIN</h5>
            <h6>Manager/Directors</h6>
            <h6>+237-677-983-746</h6>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="imge"
            style={{
              backgroundImage: `url(${image2})`,
              height: "200px",
              width: "200px"
            }}
          ></div>
          <div className="foot">
            <h5>GODLOVE MBASANGWING</h5>
            <h6>Manager/Directors</h6>
            <h6>+237-672-796-484</h6>
          </div>
        </div>
      </div>
    
    
    </div>
  );
};

export default AboutUsSection;
