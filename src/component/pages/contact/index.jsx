import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import GoogleMapReact from "google-map-react";

// Icons
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear previous error when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateStep1 = () => {
    const step1Errors = {};
    if (!formData.firstName.trim()) {
      step1Errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      step1Errors.lastName = "Last Name is required";
    }
    return step1Errors;
  };

  const validateStep2 = () => {
    const step2Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      step2Errors.email = "Enter a valid email address";
    }
    if (
      !formData.phoneNumber.trim() ||
      !phoneRegex.test(formData.phoneNumber)
    ) {
      step2Errors.phoneNumber = "Enter a valid phone number";
    }
    return step2Errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const step1Errors = validateStep1();
    if (Object.keys(step1Errors).length > 0) {
      setErrors(step1Errors);
      return;
    }

    const step2Errors = validateStep2();
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
      return;
    }

    // Perform further actions with the form data
    console.log("Form submitted:", formData);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      const step1Errors = validateStep1();
      if (Object.keys(step1Errors).length === 0) {
        setCurrentStep((prevStep) => prevStep + 1);
        setPercent((prevPercent) => Math.min(prevPercent + 40, 100));
      } else {
        setErrors(step1Errors);
      }
    } else if (currentStep === 2) {
      const step2Errors = validateStep2();
      if (Object.keys(step2Errors).length === 0) {
        setCurrentStep((prevStep) => prevStep + 1);
        setPercent((prevPercent) => Math.min(prevPercent + 40, 100));
      } else {
        setErrors(step2Errors);
      }
    } else if (currentStep === 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const StepBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setPercent((prevPercent) => Math.max(prevPercent - 40, 0));
  };

  const BckFrm = () => {
    setCurrentStep((prevStep) => prevStep - 4);
    setPercent((prevPercent) => Math.max(prevPercent - 100, 0));
  };

  const FormSubmit = () => {
    setPercent((prevPercent) => Math.min(prevPercent + 40, 100));
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep + 1);
    }, 3000);
  };

  const [percent, setPercent] = useState(0);
  const circumference = 30 * 2 * Math.PI;

  return (
    <>
      <section className="background-img bg-image2" id="contact">
        <Container className="py-5">
          <div className="team-head text-white text-center pb-2">
            <h1>Contact Us</h1>
            <p>
              Contact us today to learn more about our courses and services.
            </p>
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
                <h1 className="mb-5">Registration Form</h1>

                <div className="bg-card1 py-4 px-2 rounded-3">
                  <form onSubmit={handleSubmit} className="text-center d-flex flex-column justify-content-center align-items-center ">
                    {/* Step 1: First and Last Name */}
                    {currentStep === 1 && (
                      <>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name :
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="form-control"
                              required
                            />
                            {errors.firstName && (
                              <div className="text-danger">
                                {errors.firstName}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name :
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="form-control"
                              required
                            />
                            {errors.lastName && (
                              <div className="text-danger">
                                {errors.lastName}
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 2: Email and Phone Number */}
                    {currentStep === 2 && (
                      <>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">
                              Email :
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="form-control"
                              required
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>

                          <div className="col-md-6 mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                              Phone Number :
                            </label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className="form-control"
                              required
                            />
                            {errors.phoneNumber && (
                              <div className="text-danger">
                                {errors.phoneNumber}
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                    {currentStep === 3 && (
                      <>
                        <div className="mb-3 w-75">
                          <label htmlFor="Message" className=" form-label">
                            Message :
                          </label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Enter Your Message"
                            className="form-control"
                          ></textarea>
                        </div>
                      </>
                    )}
                    {currentStep === 4 && (
                      <>
                        <input
                          className=" text-white ratio ratio-1x1 p-2 my-5 d-none rounded-3 send-btn"
                          onClick={FormSubmit}
                          type="checkbox"
                          id="send"
                        />

                        <div className="submit-btn w-25 rounded d-flex align-items-center justify-content-center text-center my-4">
                          <svg className=" plane" height="120" width="200">
                            <polyline points="160,20 40,60 150,80 160,20 88,68 88,95 110,73" />
                          </svg>

                          <svg className="mail" height="120" width="200">
                            <polyline points="20,20 180,20 180,100 20,100 20,20 100,70 180,20" />
                          </svg>
                        </div>
                        <label
                          className="submit-label btn btn-primary text-white d-inline-block mt-5 fw-bold cursor-pointer"
                          htmlFor="send"
                        >
                          SUBMIT
                        </label>
                      </>
                    )}
                    {currentStep === 5 && (
                      <>
                        <button
                          type="button"
                          onClick={BckFrm}
                          className="btn btn-primary"
                        >
                          Reset
                        </button>
                      </>
                    )}
                  </form>

                  <div className="d-flex justify-content-center align-items-center ">
                    <button
                      type="button"
                      onClick={StepBack}
                      disabled={currentStep === 1}
                      className={`btn btn-primary mx-2 ${
                        currentStep === 1 ? "disabled" : ""
                      }`}
                    >
                      {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                      <IoIosArrowBack />
                    </button>
                    <div className="position-relative d-inline-flex align-items-center justify-content-center">
                      <svg className="w-25 h-25 pt-5  ">
                        <circle
                          className="text-primary"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="transparent"
                          r="30"
                          cx="40"
                          cy="40"
                        />
                        <circle
                          className="text-light"
                          strokeWidth="5"
                          strokeDasharray={circumference}
                          strokeDashoffset={
                            circumference - (percent / 100) * circumference
                          }
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="30"
                          cx="40"
                          cy="40"
                        />
                      </svg>
                      <span className="position-absolute text-dark fs-5 fw-bold mb-4 ">{`${percent}%`}</span>
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={currentStep === 4}
                      className={`btn btn-primary text-white mx-2 ${
                        currentStep === 4 ? "disabled" : ""
                      }`}
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Contact;
