import React from "react";
import Logo from "../../assets/img/logo/2-nd-logo.png";

import { MdOutlineTerminal } from "react-icons/md";
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
        <MdOutlineTerminal  className="text-center terminal-icon text-color-light"/>
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
              <h2 className="modal-title spacing-title fs-5" id="staticBackdropLabel">
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
                className="modal-title spacing-title text-color-light py-3"
                id="staticBackdropLabel"
              >
                To explore us use navigation!
                <br />
                to begin, type :
              </p>
              <ul>
                <li className="d-flex align-items-center my-2">
                  <div className="text-warning me-3">[1] </div>
                  <a href="/" className="text-danger spacing-title text-decoration-none">
                    Who are we?
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[2]</div>
                  <a href="/" className="text-danger spacing-title text-decoration-none">
                 What we do ?
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[3]</div>
                    <a href="./instructors" className="text-danger spacing-title text-decoration-none">
                      Instructors !
                    </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[4]</div>
                  <div>
                    <a href="./Courses" className="text-danger spacing-title text-decoration-none">
                      Courses !
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <div className="text-warning me-3">[5]</div>
                  <a href="/" className="text-danger text-decoration-none spacing-title">
                    Let us know you !
                  </a>
                </li>
              </ul>
            </div>
            <div class="modal-footer background-color-dark">
              <div className="input-group mb-3">
                <div className="input-group-text spacing-title background-color-dark text-color-light">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Terminal;