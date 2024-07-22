import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div className="background-img">
        <Container className="py-5">
          <Row>
            <Col lg={12}>
              <div className="bg-color-transparent bg-border-animation border border-info p-4">
                <h1>Registration Form</h1>
                <form
                    className="border-top-3"
                    // onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row mt-3">
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label className="mb-2" for="input-1">Name</label>
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
                          <label className="mb-2" for="input-3">Mobile</label>
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
                          <label className="mb-2" for="input-2">Email</label>
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
                          <label className="mb-2" for="input-2">Gender</label>
                          <br />

                          <select
                            className="form-control form-control-input mb-3"
                            
                          >
                            <option selected>Gender</option>

                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">other</option>
                          </select>
                          
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label className="mb-2" for="input-2">Previous Education</label>
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
                          <label className="mb-2" for="input-2"> Target Education</label>
                          <input
                            type="text"
                            className="form-control form-control-input mb-3"
                            id="input-2"
                            placeholder="Enter Your Target Education"
                          
                          />
                        
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label className="mb-2" for="input-2">Address</label>
                          <input
                            type="text"
                            className="form-control form-control-input mb-3"
                            id="input-2"
                            placeholder="Enter Your Address"
                           
                          />
                        
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group ">
                          <label className="mb-2" for="input-2">Id</label>
                          <input
                            type="text"
                            className="form-control form-control-input mb-3"
                            id="input-2"
                            placeholder="Enter Your Id"

                          />
                              
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            class="form-control mb-3"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            
                          >
                          </textarea>

                           
                        </div>
                        
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-light px-5 form-control-input form-control-re"
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
