import React from "react";
import Logo from "../../assets/img/logo/2-nd-logo.png";

<<<<<<< HEAD
import { MdOutlineTerminal } from "react-icons/md";
=======
// import { MdOutlineTerminal } from "react-icons/md";
import TerminalImg from "../../assets/img/terminal/terminal-1.png";
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
function Terminal() {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="terminal-btn d-flex align-items-center rounded-3 justify-content-center z-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
<<<<<<< HEAD
        <MdOutlineTerminal  className="text-center terminal-icon text-color-light"/>
=======
        <div>
          <img src={TerminalImg} alt="Loading" />
        </div>
        {/* <MdOutlineTerminal  className="text-center terminal-icon text-color-brown"/> */}
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header background-color-cream d-flex justify-content-evenly">
              <div className="techno-logo">
                <img src={Logo} alt="Loading" />
              </div>
<<<<<<< HEAD
              <h2 className="modal-title spacing-title fs-5" id="staticBackdropLabel">
=======
              <h2
                className="modal-title animated-text-2 spacing-title fs-5"
                id="staticBackdropLabel"
              >
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                INTELLIGENCE EDUCATORS
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body background-color-dark">
              <p
<<<<<<< HEAD
                className="modal-title spacing-title text-color-light py-3"
=======
                className="modal-title animated-text-2 spacing-title text-color-light py-3"
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                id="staticBackdropLabel"
              >
                To explore us use navigation!
                <br />
                to begin, type :
              </p>
              <ul>
                <li className="d-flex align-items-center my-2">
                  <div className="text-warning me-3">[1] </div>
<<<<<<< HEAD
                  <a href="/" className="text-danger spacing-title text-decoration-none">
=======
                  <a
                    href="#"
                    className="animated-text-2 text-danger spacing-title text-decoration-none"
                  >
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                    Who are we?
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[2]</div>
<<<<<<< HEAD
                  <a href="/" className="text-danger spacing-title text-decoration-none">
                 What we do ?
=======
                  <a
                    href="#WhatWeDo"
                    className="animated-text-2 text-danger spacing-title text-decoration-none"
                  >
                    What we do ?
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[3]</div>
<<<<<<< HEAD
                    <a href="./instructors" className="text-danger spacing-title text-decoration-none">
                      Instructors !
                    </a>
=======
                  <a
                    href="#Instructor"
                    className="animated-text-2 text-danger spacing-title text-decoration-none"
                  >
                    Instructors !
                  </a>
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[4]</div>
                  <div>
<<<<<<< HEAD
                    <a href="./Courses" className="text-danger spacing-title text-decoration-none">
=======
                    <a
                      href="#Courses"
                      className="animated-text-2 text-danger spacing-title text-decoration-none"
                    >
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                      Courses !
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[5]</div>
<<<<<<< HEAD
                  <a href="/" className="text-danger text-decoration-none spacing-title">
=======
                  <a
                    href="/#"
                    className="animated-text-2 text-danger text-decoration-none spacing-title"
                  >
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
                    Let us know you !
                  </a>
                </li>
              </ul>
            </div>
            <div class="modal-footer background-color-dark">
              <div className="input-group mb-3">
                <div className="input-group-text spacing-title background-color-dark text-color-light">
<<<<<<< HEAD
                  We@Educators :~ 
                </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control background-color-light-brown"
                      id="Command"
                      placeholder="TYPE COMMAND"
                    ></input>
                    <label for="Command">Type Command</label>
                  </div>
                </div>
=======
                  We@Educators :~
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control background-color-light-brown"
                    id="Command"
                    placeholder="TYPE COMMAND"
                  ></input>
                  <label for="Command">Type Command</label>
                </div>
              </div>
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default Terminal;
=======
export default Terminal;
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
