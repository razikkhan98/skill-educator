import React from "react";
import Logo from "../../assets/img/logo/2-nd-logo.png";

// import { MdOutlineTerminal } from "react-icons/md";
import TerminalImg from "../../assets/img/terminal/terminal-1.png";
import "animate.css";
const Terminal = () => {
  const TerminalData = [
    { id: 1, text: "Who are we?", href: "#" },
    { id: 2, text: "What we do?", href: "#WhatWeDo" },
    { id: 3, text: "Tecnologies!", href: "#Technologies" },
    { id: 4, text: "Instructors!", href: "#Team" },
    { id: 5, text: "Courses!", href: "#Courses" },
    { id: 6, text: "Let us know you!", href: "#Feedback" },
  ];

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="terminal-btn d-flex align-items-center rounded-3 justify-content-center z-3 animate__animated animate__infinite animate__pulse"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div>
          <img src={TerminalImg} alt="Loading" />
        </div>
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
              <h2
                className="modal-title animated-text-2 spacing-title fs-5"
                id="staticBackdropLabel"
              >
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
                className="modal-title animated-text-2 spacing-title text-color-light py-3"
                id="staticBackdropLabel"
              >
                To explore us use navigation!
                <br />
                to begin, type :
              </p>
              <ul>
              {TerminalData.map((item , index)=> (
                  <li className="d-flex align-items-center mb-2" key={item.id}>
                    <div className="text-warning me-3">[{item.id}]</div>
                    <a
                      href={item.href}
                      className="animated-text-2 text-danger spacing-title text-decoration-none"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
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
};
export default Terminal;
