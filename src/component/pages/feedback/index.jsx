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

          <div className=" my-5 d-flex justify-content-evenly">
            <button id="openModal" className="feedback-btn px-4 py-2">
              ADD YOUR REVIEW
            </button>
            <dialog id="modal" className="feedback-form p-5">
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* <div className="mt-3 d-flex">
                  <div>
                    <label for="name" className="lable me-3">
                      Your Name :
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
                </div> */}
                <div class="mb-3 row">
                  <label for="inputtext" class="col-sm-2 col-form-label text-white">
                  Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
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
              <button id="closeModal" className="feedback-btn mt-3 py-2 px-4">
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
