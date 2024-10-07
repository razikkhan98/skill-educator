import React, {useState} from "react";
// import Header from "../../common/header/index";
import {Container,Modal, Button} from "react-bootstrap";
// import { Row } from "react-bootstrap";

const MyVerticallyCenteredModal = ({ show, onHide }) => {
  return (
    <Modal show={show} size="lg" centered onHide={onHide}>
      <Modal.Header closeButton className="background-color-light-brown">
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="feedback-heading">FEEDBACK !!</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="feedback-form">
        <div>
          <form>
            <div className="m-3">
              <div className="m-3">
                <label htmlFor="" className="lable mb-1">Your Name</label>
                <input type="text" className="input" />
              </div>
              <div className="m-3">
                <label htmlFor="" className="lable mb-1">Your Thoughts</label>
                <input type="text" className="input-review" />
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer className="feedback-form">
        <Button className="feedback-btn" onClick={onHide}>SUBMIT</Button>
      </Modal.Footer>
    </Modal>
  );
};


const Feedback = () => {
  const FeedbackData = [
    {
      heading: "NAME",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "NAME",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "NAME",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "NAME",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {/* <Header title="w e@e d u c a t o r : ~ $" /> */}
      <div className="background-color-light-brown py-5" id="Feedback">
        <Container className="pt-5">
          {FeedbackData.map((link, index) => (
            <div key={index}>
              <div className="feedback-box p-4">
                <div className="d-flex">
                  <div className="profile me-2">.</div>
                  <div className="feedback-content">{link.heading}</div>
                </div>
                <div className="feedback-content">{link.comment}</div>
              </div>
            </div>
          ))}

<div className="my-5 d-flex justify-content-evenly">
            <Button onClick={() => setModalShow(true)} className="feedback-btn px-4 py-2">
              ADD YOUR REVIEW
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Feedback;
