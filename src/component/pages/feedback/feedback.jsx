import React from "react";
import Header from "../../common/header/index";
import Container from "react-bootstrap/Container";
// import { Row } from "react-bootstrap";
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
  const modal = document.querySelector("#modal");
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");
  if (modal) {
    openModal && openModal.addEventListener("click", () => modal.showModal());

    closeModal && closeModal.addEventListener("click", () => modal.close());
  }
  return (
    <>
      <Header title="w e@e d u c a t o r : ~ $" />
      <div className="background-color-light-brown">
        <Container>
          {FeedbackData.map((link, index) => (
            <div key={index}>
              <div className="feedback-box p-3">
                <div className="d-flex">
                  <div className="profile me-2">.</div>
                  <div className="feedback-content">{link.heading}</div>
                </div>
                <div className="feedback-content">{link.comment}</div>
              </div>
            </div>
          ))}

          <div className="m-3 d-flex justify-content-evenly">
            <button id="openModal" className="feedback-btn ps-4 pe-4">
              ADD YOUR REVIEW
            </button>
            <dialog id="modal" className="feedback-form">
              <div className="d-flex flex-column">
                <div className="mt-3 d-flex">
                  <div>
                    <label for="name" className="lable">
                      Your Name:
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input input-lable"
                    />
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <label for="name" className="lable">
                      Your Review:
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input input-review"
                    />
                  </div>
                </div>
              </div>
              <button id="closeModal" className="feedback-btn mt-3 ps-4 pe-4">
                SUBMIT REVIEW
              </button>
            </dialog>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Feedback;
