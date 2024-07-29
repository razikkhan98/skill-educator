import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import GoogleMapReact from "google-map-react";

// Icons
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  // const LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <FaLocationDot className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // );
  // const location = {
  //   address: "162, Agraseen Square Capital Tower 1st Floor.",
  //   lat: 37.42216,
  //   lng: -122.08427,
  // };

  return (
    <>
      <div className="background-img bg-image2" id="contact">
        <Container className="py-5">
          <div className="team-head text-white text-center pb-2">
            <h1>Contact Us</h1>
            <p>Contact us today to learn more about our courses and services.</p>
          </div>
          <Row className="g-5">
            <Col
              lg={5}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="bg-white p-3 rounded-3">
                <ul class="footer-contact list-unstyled">
                  <li className="mb-3 ">
                    <a
                      href="tel:+21236547898"
                      className="d-flex align-items-center"
                    >
                      <FaPhoneAlt className="fs-3 me-3" />
                      <div>
                        <h4>Call:</h4>
                        +2 123 654 7898
                      </div>
                    </a>
                  </li>
                  <hr />
                  <li className="mb-3 d-flex align-items-center">
                    <FaLocationDot className="fs-3 me-3" />
                    <div>
                      <h4>Location:</h4>
                      25/B Milford Road, New York
                    </div>
                  </li>
                  <hr />
                  <li>
                    <a
                      href="mailto:info@example.com"
                      className="d-flex align-items-center"
                    >
                      <FaRegEnvelope className="fs-3 me-3" />
                      <div>
                        <h4>Email:</h4>
                        info@example.com
                      </div>
                    </a>
                  </li>
                </ul>
                {/* <div className="google-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
                    defaultCenter={location}
                    defaultZoom={17}
                  >
                    <LocationPin
                      lat={location.lat}
                      lng={location.lng}
                      text={location.address}
                    />
                  </GoogleMapReact>
                </div> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  title="Map-Link"
                  style={{ border: "0", width: "100%", height: " 290px" }}
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col lg={7}>
              <div
                className="bg-white bg-border-animation border border-info rounded-3 p-5"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>Registration Form</h1>
                <form
                  className="border-top-3"
                  // onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-1">
                          Full Name :
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-input mb-3"
                          id="input-1"
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-3">
                          Mobile :
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-input mb-3"
                          id="input-3"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-2">
                          Email :
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-input mb-3"
                          id="input-2"
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <div class="form-group">
                        <label className="mb-2 fw-bold" for="input-2">
                          Gender :
                        </label>
                        <br />

                        <select className="form-control form-control-input mb-3">
                          <option selected>Gender</option>

                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-2">
                          Qualification :
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-input mb-3"
                          id="input-2"
                          placeholder="Enter Your Previous Education"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-2">
                          Choose Course :
                        </label>
                        <br />

                        <select className="form-control form-control-input mb-3">
                          <option selected>Select</option>

                          <option value="female">Web-development</option>
                          <option value="male">Python</option>
                          <option value="other">Automation</option>
                          <option value="other">Machine Learning</option>
                        </select>
                      </div>
                    </div>

                    {/* <div className="col-lg-6 col-sm-12">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label mb-2 fw-bold  "
                        >
                          Message :
                        </label>
                        <textarea
                          class="form-control mb-3"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div> */}
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-3">
                          Visit :
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-input mb-3"
                          id="input-3"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <label className="mb-2 fw-bold" for="input-2">
                          Address :
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-input mb-3"
                          id="input-2"
                          placeholder="Enter Your Address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-5">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 form-control-input form-control-re"
                    >
                      <i className="icon-lock"></i> Submit
                    </button>
                  </div>
                </form>
                {/* <Row>
                  <Col md={6}>
                    <div class="form__group field">
                      <input
                        type="input"
                        class="form__field"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required
                      />
                      <label for="name" class="form__label">
                        * Name
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="form__group field">
                      <input
                        type="email"
                        class="form__field"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                      />
                      <label for="email" class="form__label">
                        * E-mail
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="form__group field">
                      <input
                        type="number"
                        class="form__field"
                        placeholder="Number"
                        name="number"
                        id="number"
                        required
                      />
                      <label for="number" class="form__label">
                        * Mobile Number
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="form__group field ">
                      <select
                      className="form__field form__label"
                      name="gender"
                      id="gender"
                      required
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                    <label htmlFor="gender" className="form__label">
                        * Gender
                      </label>
                      <br />


                    </div>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Contact;
