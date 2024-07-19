import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <>
    <div className="bg-animate gradient-overly-right">
      <Container className="py-5">
        <div className="bg-color-transparent border-animation border border-info p-4">
        <h1>Registration Form</h1>
        <Row>
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
        </Row>
        </div>
      </Container>
      </div>
    </>
  );
};
export default Contact;
