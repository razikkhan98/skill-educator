// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaHandSparkles } from "react-icons/fa";
// import { TfiWrite } from "react-icons/tfi";
// import { FaLocationDot } from "react-icons/fa6";
// import { NavLink } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Logo from "../../assets/img/logo/Intelligence Educator1.png";
 
// const FormCard = [
//   {
//     cardtitle: "What is the highest grade you finished?",
//     options: [
//       { id: "grade1", label: "Highschool", value: "Highschool" },
//       { id: "grade2", label: "Associate Degree", value: "Associate Degree" },
//       { id: "grade3", label: "Bachelor's Degree", value: "Bachelor's Degree" },
//       { id: "grade4", label: "Additional Course", value: "Additional Course" },
//     ],
//   },
//   {
//     cardtitle: "What course are you interested in?",
//     options: [
//       {
//         id: "course1",
//         label: "FullStack Development",
//         value: "FullStack Development",
//       },
//       {
//         id: "course2",
//         label: "AI and Machine Learning",
//         value: "AI and Machine Learning",
//       },
//       { id: "course3", label: "Data Science", value: "Data Science" },
//       {
//         id: "course4",
//         label: "Automation Testing",
//         value: "Automation Testing",
//       },
//     ],
//   },
//   {
//     cardtitle: "How much duration do you prefer?",
//     options: [
//       { id: "duration1", label: "1 month", value: "1 month" },
//       { id: "duration2", label: "3 months", value: "3 months" },
//       { id: "duration3", label: "6 months", value: "6 months" },
//       { id: "duration4", label: "12 months", value: "12 months" },
//     ],
//   },
//   {
//     cardtitle: "Have you ever worked on projects related to IT?",
//     options: [
//       { id: "workedYes", label: "Yes", value: "Yes" },
//       { id: "workedNo", label: "No", value: "No" },
//     ],
//   },
//   {
//     cardtitle: "When are you planning to start this course?",
//     options: [
//       { id: "start1", label: "From tomorrow", value: "From tomorrow" },
//       { id: "start2", label: "1 Week", value: "1 Week" },
//       { id: "start3", label: "1 month", value: "1 month" },
//       { id: "start4", label: "2 months", value: "2 months" },
//     ],
//   },
// ];
 
// function MyVerticallyCenteredModal({ show, onHide }) {
//   const { register, handleSubmit } = useForm();
//   const [currentStep, setCurrentStep] = useState(1);
 
//   const StepBack = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };
 
//   const nextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };
 
//   // Form submission handler
//   const onSubmit = (data) => {
//     console.log(data);
//     onHide(); // Close modal after submission
//   };
 
//   const currentCard = FormCard[currentStep - 1]; // Get the current card based on step
 
//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >

//       <div className="modal-dialog-left">
//       <div className="modal-content">
//         <div className="modal-header background-color-cream d-flex justify-content-evenly">
//           <div className="techno-logo">
//             <img src={Logo} alt="Loading" />
//           </div>
//           <h2
//             className="modal-title animated-text-2 fs-5"
//             id="staticBackdropLabel"
//           >
//             INTELLIGENCE EDUCATORS
//           </h2>
//           <Button variant="close" onClick={onHide} aria-label="Close"></Button>
//         </div>
 
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="modal-body background-color-dark">
//             <div className="text-color-light fs-5 ps-3 animated-text-2">
//               {currentCard.cardtitle}
//             </div>
 
//             <div className="d-flex justify-content-between p-3">
//               {currentCard.options.map((option) => (
//                 <div key={option.id} className="d-flex pe-2 align-items-center">
//                   <input
//                     type="radio"
//                     id={option.id}
//                     {...register(currentCard.cardtitle)} // Use card title as the field name
//                     value={option.value}
//                     className="me-1"
//                   />
//                   <label htmlFor={option.id} className="text-color-light animated-text-2">
//                     {option.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
 
//             <div className="d-flex justify-content-end p-3">
//               <button
//                 type="button"
//                 className="btn background-color-cream px-4"
//                 onClick={StepBack}
//                 disabled={currentStep === 1}
//               >
//                 Previous
//               </button>
//               <button
//                 type="button"
//                 className="btn background-color-cream px-4 ms-3"
//                 onClick={nextStep}
//                 disabled={currentStep === FormCard.length}
//               >
//                 Next
//               </button>
//             </div>
 
//             <div className="modal-footer background-color-dark">
//               {currentStep === FormCard.length ? (
//                 <button
//                   type="submit"
//                   className="btn background-color-cream px-4"
//                 >
//                   Submit
//                 </button>
//               ) : null}
//             </div>
//           </div>
//         </form>
//       </div>
//       </div>
//     </Modal>
//   );
// }
 
// const Menu = () => {
//   const [showButtons, setShowButtons] = useState(false);
//   const [modalShow, setModalShow] = useState(false);
 
//   const showClick = (e) => {
//     e.preventDefault();
//     setShowButtons((prev) => !prev);
//   };
 
//   return (
//     <React.Fragment>
//       <div className="fixed-button">
//         <a
//           href="/"
//           className="btn background-color-dark text-white"
//           onClick={showClick}
//         >
//           <IoSettingsOutline className="fixed-logo fs-2" />
//           <IoSettingsOutline className="fixed-logo mt-4 fs-3" />
//         </a>
 
//         {showButtons && (
//           <div
//             className={`additional-buttons ${showButtons ? "show" : ""}`}
//             data-aos="fade-left"
//           >
//             <a
//               href="#Feedback"
//               className="btn p-3 additional-btn top background-color-dark text-color-light"
//             >
//               <FaHandSparkles className="fs-3" />
//             </a>
 
//             <NavLink
//               className="btn p-3 additional-btn right background-color-dark text-color-light"
//               onClick={() => setModalShow(true)}
//             >
//               <TfiWrite className="fs-3" />
//             </NavLink>
 
//             <NavLink
//               href="https://maps.app.goo.gl/PhAXJvB2xWhCKv5n8"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn p-3 additional-btn bottom background-color-dark text-color-light"
//             >
//               <FaLocationDot className="fs-3" />
//             </NavLink>
//           </div>
//         )}
//       </div>
 
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </React.Fragment>
//   );
// };
 
// export default Menu;
 


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandSparkles } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../../assets/img/logo/2-nd-logo.png";
 
const FormCard = [
  {
    cardtitle: "What is the highest grade you finished?",
    options: [
      { id: "grade1", label: "Highschool", value: "Highschool" },
      { id: "grade2", label: "Associate Degree", value: "Associate Degree" },
      { id: "grade3", label: "Bachelor's Degree", value: "Bachelor's Degree" },
      { id: "grade4", label: "Additional Course", value: "Additional Course" },
    ],
  },
  {
    cardtitle: "What course are you interested in?",
    options: [
      {
        id: "course1",
        label: "FullStack Development",
        value: "FullStack Development",
      },
      {
        id: "course2",
        label: "AI and Machine Learning",
        value: "AI and Machine Learning",
      },
      { id: "course3", label: "Data Science", value: "Data Science" },
      {
        id: "course4",
        label: "Automation Testing",
        value: "Automation Testing",
      },
    ],
  },
  {
    cardtitle: "How much duration do you prefer?",
    options: [
      { id: "duration1", label: "1 month", value: "1 month" },
      { id: "duration2", label: "3 months", value: "3 months" },
      { id: "duration3", label: "6 months", value: "6 months" },
      { id: "duration4", label: "12 months", value: "12 months" },
    ],
  },
  {
    cardtitle: "Have you ever worked on projects related to IT?",
    options: [
      { id: "workedYes", label: "Yes", value: "Yes" },
      { id: "workedNo", label: "No", value: "No" },
    ],
  },
  {
    cardtitle: "When are you planning to start this course?",
    options: [
      { id: "start1", label: "From tomorrow", value: "From tomorrow" },
      { id: "start2", label: "1 Week", value: "1 Week" },
      { id: "start3", label: "1 month", value: "1 month" },
      { id: "start4", label: "2 months", value: "2 months" },
    ],
  },
];
 
function MyVerticallyCenteredModal({ show, onHide }) {
  const { register, handleSubmit } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
 
  const StepBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
 
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
 
  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
    onHide(); // Close modal after submission
  };
 
  const currentCard = FormCard[currentStep - 1]; // Get the current card based on step
 
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-content">
        <div className="modal-header background-color-cream d-flex justify-content-evenly">
          <div className="techno-logo">
            <img src={Logo} alt="Loading" />
          </div>
          <h2
            className="modal-title animated-text-2 fs-5"
            id="staticBackdropLabel"
          >
            INTELLIGENCE EDUCATORS
          </h2>
          <Button variant="close" onClick={onHide} aria-label="Close"></Button>
        </div>
 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-body background-color-dark">
            <div className="text-color-light fs-5 ps-3 animated-text-2">
              {currentCard.cardtitle}
            </div>
 
            <div className="d-flex justify-content-between p-3">
              {currentCard.options.map((option) => (
                <div key={option.id} className="d-flex align-items-center">
                  <input
                    type="radio"
                    id={option.id}
                    {...register(currentCard.cardtitle)} // Use card title as the field name
                    value={option.value}
                    className="me-1"
                  />
                  <label htmlFor={option.id} className="text-color-light animated-text-2">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
 
            <div className="d-flex justify-content-end p-3">
              <button
                type="button"
                className="btn background-color-cream px-4"
                onClick={StepBack}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn background-color-cream px-4 ms-3"
                onClick={nextStep}
                disabled={currentStep === FormCard.length}
              >
                Next
              </button>
            </div>
 
            <div className="modal-footer background-color-dark">
              {currentStep === FormCard.length ? (
                <button
                  type="submit"
                  className="btn background-color-cream px-4"
                >
                  Submit
                </button>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
 
const Menu = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [modalShow, setModalShow] = useState(false);
 
  const showClick = (e) => {
    e.preventDefault();
    setShowButtons((prev) => !prev);
  };
 
  return (
    <React.Fragment>
      <div className="fixed-button">
        <a
          href="/"
          className="btn background-color-dark text-white"
          onClick={showClick}
        >
          <IoSettingsOutline className="fixed-logo fs-2" />
          <IoSettingsOutline className="fixed-logo mt-4 fs-3" />
        </a>
 
        {showButtons && (
          <div
            className={`additional-buttons ${showButtons ? "show" : ""}`}
            data-aos="fade-left"
          >
            <a
              href="#Feedback"
              className="btn p-3 additional-btn top background-color-dark text-color-light"
            >
              <FaHandSparkles className="fs-3" />
            </a>
 
            <NavLink
              className="btn p-3 additional-btn right background-color-dark text-color-light"
              onClick={() => setModalShow(true)}
            >
              <TfiWrite className="fs-3" />
            </NavLink>
 
            <NavLink
              href="https://maps.app.goo.gl/PhAXJvB2xWhCKv5n8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn p-3 additional-btn bottom background-color-dark text-color-light"
            >
              <FaLocationDot className="fs-3" />
            </NavLink>
          </div>
        )}
      </div>
 
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
};
 
export default Menu;

 