import React, { useState, useEffect } from "react";
// import Header from "../../common/header/index";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch all feedback on component mount
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(
          "https://008d-2401-4900-8820-e05b-fe55-cf6f-6a68-248e.ngrok-free.app/api/c/getAllFeedback"
        );
        setFeedbackData(res.data); // Adjust according to your response structure
      } catch (error) {
        toast.error("Failed to fetch feedback");
      }
    };
    

    fetchFeedback();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://4c2f-2401-4900-8822-ed6-1631-2d73-3e03-a2ed.ngrok-free.app/api/c/create/feedback",
        data
      );
      if (res.status === 201) {
        toast.success("Feedback submitted successfully!");
        // Optionally fetch feedback again to include the new entry
        const updatedFeedback = [...feedbackData, data]; // Add the new feedback locally
        setFeedbackData(updatedFeedback);
        console.log(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  // const FeedbackData = [
  //   {
  //     fullName: "SAKSHEE",
  //     thoughts:
  //       "Great experience! The instructors were knowledgeable, and the hands-on labs were super helpful. I landed a job soon after completing my course.",
  //   },
  //   {
  //     fullName: "AREEBA",
  //     thoughts:
  //       "Good course structure with experienced instructors. Some sessions felt rushed, but overall, I learned a lot and feel more confident in my skills.",
  //   },
  //   {
  //     fullName: "JUNED ABBASI",
  //     thoughts:
  //       "Decent training, perfect for beginners to reach advance. Practical projects have made learning easy.",
  //   },
  //   {
  //     fullName: "SHUMAILA KHAN",
  //     thoughts:
  //       "Learning from INTELLIGENCE EDUCATORS Training Institute was a great experience. The instructors were very knowledgeable, and the curriculum was up-to-date with industry standards.",
  //   },
  // ];
  return (
    <>
      {/* <Header title="w e@e d u c a t o r : ~ $" /> */}
      <div className="background-color-light-brown py-5" id="Feedback">
        <Container className="pt-5">
          {feedbackData.map((link, index) => (
            <div key={index}>
              <div className="feedback-box p-4">
                <div className="d-flex">
                  <div className="profile me-2">.</div>
                  <div className="feedback-content">{link.fullName}</div>
                </div>
                <div className="feedback-content">{link.thoughts}</div>
              </div>
            </div>
          ))}
          <div className="my-5 d-flex justify-content-evenly">
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="feedback-btn px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ADD YOUR REVIEW
            </button>
          </div>
        </Container>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header background-color-light-brown">
              <h5
                className="modal-title spacing-title animated-text-2 text-color-dark"
                id="exampleModalLabel"
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
                  <label
                    htmlFor="name"
                    className="form-label text-color-light animated-text-2"
                  >
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
                {errors.fullName && (
                  <div className="text-danger">{errors.fullName.message}</div>
                )}
                <div className="my-3">
                  <label
                    htmlFor="thought"
                    className="form-label text-color-light animated-text-2"
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
                {errors.thoughts && (
                  <div className="text-danger">{errors.thoughts.message}</div>
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
