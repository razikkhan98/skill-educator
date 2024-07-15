import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// Images
import logo from "../../assets/images/logo/mylogosiw.png";

// Icons
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* <!-- footer Start --> */}
      <footer class="bg p-3">
        <Container>
          <Row class="footer-wrapper">
            <Col lg={3} md={6}>
              <div class="footer-box">
                <a href="#" class="footer-logo mt-5">
                  <img className="h-50 w-50" src={logo} alt="Loading" />
                </a>
                <p class="mb-4">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  believable.
                </p>
                <ul class="icon-social d-flex list-unstyled">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} class="mt-5">
              <div class="footer-box mt-5">
                <h4 class="mb-4">Popular Courses</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">Web-Development</li>
                  <li className="mb-2">App-Development</li>
                  <li className="mb-2">UI-Development</li>
                  <li>Back-End-Development</li>

                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} class=" mt-5">
              <div class="footer-box mt-5">
                <h4 class="mb-4">Contact Us</h4>
                <ul class="footer-contact list-unstyled">
                  <li className="mb-3">
                    <a href="tel:+21236547898">
                      <FaPhoneAlt className="fs-5 me-3" />
                      +2 123 654 7898
                    </a>
                  </li>
                  <li className="mb-3">
                    <FaLocationDot className="fs-5 me-3" />
                    25/B Milford Road, New York
                  </li>
                  <li>
                    <a href="mailto:info@example.com">
                      <FaRegEnvelope className="fs-5 me-3" />
                      info@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} class="mt-5">
              <div class="footer-box mt-5">
                <h4 class="mb-4">Opening</h4>
                <h5 class="fw-normal">Monday - Friday</h5>
                <p>09AM - 09PM</p>
                {/* <h5 class="fw-normal">Sunday</h5>
                <p>OFF</p> */}
              </div>
            </Col>

            <Col lg={2} md={6} class="mt-5">
              <div class="footer-box mt-5">
                <h4 class="mb-4">Newsletter</h4>
                <div class="footer-newsletter">
                  <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                  <div class="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                      <button class="theme-btn mt-4" type="submit">
                        Subscribe Now <i class="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </footer>
      {/* <!-- footer End --> */}
    </>
  );
};
export default Footer;
