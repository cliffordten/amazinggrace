import React, { Component } from "react";

import image2 from "../../../assets/images/team/2.jpg";

import "./services-section.style.scss";
class ServicesSection extends Component {
  constructor() {
    super();

    this.state = {
      decors: [
        {
          id: 1,
          name: "Floral décor",
          desc:
            "A wedding without flowers will not be the same. Flowers are the finishing touches of every wedding, because every bride wants her wedding to be the best and her choices of flowers reflect her specific teste and personality. We have gained a reputation for providing stunning decorations and excellent services during this our years of experience in providing event flowers and decorations. We provide you with top quality products and services whether you need a bride bouquet, bridesmaid’s, posies and buttonholes and corsages or complete wedding reception decoration.",
        },
        {
          id: 2,
          name: "Backdrop décor",
          desc:
            "A breathing backdrop has significant value in creating a focal point for wedding and events. Our expert and creation team of designers are there to bring your dream design come to life. We work with all sort of color pattern depending on our clients needs and theme of the event.",
        },
        {
          id: 3,
          name: "Table Décor",
          desc:
            "Table decorations set off any event, if you need ideas for centerpieces, we can help you with that, Getting the table arrangements is crucial in making your event a success. We have various different types of center pieces for decorations to look wow, wedding center pieces, award ceremony table centers, and all different center pieces for tables for any event or occasion. We also have range of glassware.",
        },
        {
          id: 4,
          name: "Ceremony Décor",
          desc:
            "The wedding ceremony is one of life’s most unforgettable moment. known for our beautiful décor packages with an incredible amount of creative options, Beautiful bouquets and floral arrangements should be carefully chosen when planning for your wedding or event.",
        },
        {
          id: 5,
          name: "Centerpieces Décor",
          desc:
            "Centerpieces area sure way to create atmosphere for your wedding event. Amazing grace décor is recognized for creative and incredible collection of glassware, candelabras, crystal stands and event shades.",
        },
        {
          id: 6,
          name: "Stage Décor",
          desc:
            "Amazing grace décor provide a complete stage solution for your wedding or event. Our stages are beautifully crafted to the high standard to match the elegance of your important day, we can equally provide you with classy flower for the day. We Have a wide range of color to choose from weather it is red, green, white which ever color you would like to make your day to give it a special touch to your big day.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="marquee">
          <marquee
            direction="left"
            id="mask"
            onMouseOver={() => document.getElementById("mask").stop()}
            onMouseLeave={() => document.getElementById("mask").start()}
          >
            <h5>
              Amazing Grace Has a Training Center, For More Information Click{" "}
              <span>
                <a href="/contact-us">Here!!!</a>
              </span>
            </h5>
          </marquee>
        </div>

        <div className="service">
          <h3>Our Objectives</h3>

          <div className="objective">
            <div className="sidetext">
              <h5>
                &nbsp; &nbsp; &nbsp; &nbsp; As objectives AMAZING GRACE DÉCOR
                desires to satisfy all its customers their wants and their
                needs. A customer does not come and go back the same by the
                grace of God.
                <br />
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; We equally sell quality products
                just to satisfy our customers. we do sales in wholesales if you
                want to buy and resell, make reduction for them in our prices.
                For products like bedspreads, door blinds etc and the prices
                varies as well.
                <br />
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; We Equall rent Wedding gowns, shoes,
                chairs, cuttleries, tables, and also bake cakes of different
                types and designs,
              </h5>
            </div>
            <div
              className="image"
              style={{
                backgroundImage: `url(${image2})`,
              }}
            ></div>
          </div>
        </div>

        <div className="service servicess">
          <h3>Event Planning and Decore</h3>
          <div className="planning">
            <h5>
              If you are liking to have a corporate event, you can forget about
              all of the stress involved in sourcing the various supplies.{" "}
              <br />
              Having a stylish on the day will ensure every detail look
              perfect-from table decorations to event essentials rentals. From
              conception to
              <br />
              planning to design to execution. Amazing Grace Décor will work
              with you to create a one-of-a-kind event, we work
              <br /> with close collaboration with our clients to produce events
              that are personal, quirky and timeless whether on an intimate or
              grand scale.
            </h5>
          </div>
          <div className="responsibility">
            <h4> Our Responsibilities</h4>
            <h5>
              • Event planning, design and production while managing all project
              delivery elements within time limits. <br />
              • Liaise with clients to identify their needs and to ensure
              customer satisfaction. <br />• Propose ideas to improve provided
              services and event quality. <br />
            </h5>
          </div>
        </div>

        <div className="service">
          <center>
            <h3>Decore plans</h3>
          </center>

          <div className="row">
            {this.state.decors.map(({ id, name, desc }) => (
              <div key={id} className="col-md-4">
                <div className="decor">
                  <h4>{name}</h4>
                </div>
                <div className="decor-desc">
                  <h5>{desc}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service">
          <h3>Other Services</h3>

          <div className="row other">
            <div className="col-md-6">
              <h5>
                • White wedding <br />
                • Traditional wedding <br />
                • Tailoring (ALL Kinds Of Dresses, Designs, Tradiional And
                African Wears) <br />• Making Of Elastic Chair Covers, Bag
                Races, Chair Proofs. <br />
                • Renting Of Wedding Gowns <br />
                • Renting Of Wedding Shoes <br />
              </h5>
            </div>
            <div className="col-md-6">
              <h5>
                • Events and parties <br />
                • Renting Of Chairs <br />
                • Renting Of Cuttleries (PRICES Varies) <br />
                • Renting Of Tables <br />
                • We Equally Bake Cakes Depending On The Design, Model And The
                Quality <br />
              </h5>
            </div>
            <div className="col-md-12">
              <h5>
                {" "}
                • In addition to providing a full-on décor for your event, we
                also provide luxury furniture rentals at very competitive
                prices. Check out few of the image list
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;
