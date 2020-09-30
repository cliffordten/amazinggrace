import React from "react";
import "./contact-section.style.scss";

import image2 from "../../../assets/images/location-pin.svg";
import image3 from "../../../assets/images/envelope.svg";
import image4 from "../../../assets/images/phone-alt.svg";

class ContactUsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Amazing Grace Contact Information</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="imge"
              style={{
                height: "150px",
                width: "150px",
              }}
            >
              <img src={image2} alt="location" />
            </div>
            <div className="foot">
              <h5>Find Us at</h5>
              <h6>Douala Bonaberi Mariee Ndobo</h6>
              {/* <h6></h6> */}
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="imge"
              style={{
                height: "150px",
                width: "150px",
              }}
            >
              <img src={image4} alt="location" />
            </div>
            <div className="foot">
              <h5>Contact us</h5>
              <h6>+237-675-948-436 / +237-677-983-746 / +237-672-796-484</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="imge"
              style={{
                height: "150px",
                width: "150px",
              }}
            >
              <img src={image3} alt="location" />
            </div>
            <div className="foot">
              <h5>Send us an email</h5>
              <h6>info@amazing_grace_decor.com</h6>
              <h6>sale@amazing_grace_decor.com </h6>
              <h6>customercare@amazing_grace_decor.com</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <h3>Find us on Map Location</h3>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <iframe
              title="Amazing Grace decor Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1383.5782257339004!2d9.7079109176666!3d4.065165710430276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x10611377b495e867%3A0x4abd87e53b1ecf26!2samazing%20grace%20decor!3m2!1d4.0653749!2d9.7087266!5e0!3m2!1sen!2scm!4v1598848032938!5m2!1sen!2scm"
              width="90%"
              height="330"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        <div className="row">
          <h3>Fill the form and Contact us</h3>
        </div>
        <div className="row">
          <section className="mb-4">

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row">
              <div className="col-md-9 mb-md-3 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                        <label htmlFor="name" className="">
                          Your name
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                        <label htmlFor="email" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="subject md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        />
                        <label htmlFor="subject" className="">
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="subject md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                        ></textarea>
                        <label htmlFor="message">Your message</label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="text-center text-md-left">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.submit();
                    }}
                  >
                    Send
                  </button>
                </div>
                <div className="status"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactUsSection;
