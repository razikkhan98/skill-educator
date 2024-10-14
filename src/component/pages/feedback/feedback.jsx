import React from "react";
// import Header from "../../common/header/index";
import { Container } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// import axios from "axios";
const Feedback = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, 121234);
  };
  const FeedbackData = [
    {
      heading: "SAKSHEE",
      comment: "Great experience! The instructors were knowledgeable, and the hands-on labs were super helpful. I landed a job soon after completing my course."
    },
    {
      heading: "AREEBA",
      comment:"Good course structure with experienced instructors. Some sessions felt rushed, but overall, I learned a lot and feel more confident in my skills."
    },
    {
      heading: "JUNED ABBASI",
      comment: "Decent training, perfect for beginners to reach advance. Practical projects have made learning easy."
    },
    {
      heading: "SHUMAILA KHAN",
      comment: "Learning from INTELLIGENCE EDUCATORS Training Institute was a great experience. The instructors were very knowledgeable, and the curriculum was up-to-date with industry standards."
    },
  ];
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
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="feedback-btn px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModal"
            >
              ADD YOUR REVIEW
            </button>
          </div>
        </Container>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdropModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabelModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header background-color-light-brown">
              <h5
                className="modal-title spacing-title text-color-dark"
                id="staticBackdropLabelModal"
              >
                FEEDBACK
              </h5>
              <button
                type="button"
                className="btn-close text-color-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body background-color-dark px-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  <label htmlFor="name" className="form-label text-color-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control background-color-cream"
                    id="name"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                </div>
                {errors.name && (
                  <div className="text-danger">{errors.name.message}</div>
                )}
                <div className="my-3">
                  <label
                    htmlFor="thought"
                    className="form-label text-color-light"
                  >
                    Your Thoughts
                  </label>
                  <textarea
                    className="form-control background-color-cream"
                    id="thought"
                    rows="4"
                    {...register("thought", {
                      required: "Thought is required",
                    })}
                  ></textarea>
                </div>
                {errors.name && (
                  <div className="text-danger">{errors.thought.message}</div>
                )}

                <button
                  type="submit"
                  className="btn background-color-cream px-4"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer background-color-light-brown">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
