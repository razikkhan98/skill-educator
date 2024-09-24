// import React, { useState } from "react";
import Header from "../../common/header/index";
import TeamImage1 from "../../assets/img/team/1.png";
import TeamImage2 from "../../assets/img/team/2.png";
import github from "../../assets/img/team/github.png";
import mail from "../../assets/img/team/mail.png";
import linkedin from "../../assets/img/team/linkedin.png";
import insta from "../../assets/img/team/insta.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  const TeamCard = [
    {
      img: TeamImage1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
    },
    {
      img: TeamImage2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
    },
    {
      img: TeamImage1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
    },
    {
      img: TeamImage2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
    },
  ];
  const details = [
    {
      role: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <>
      <Header title="w e@e d u c a t o r : ~ $" />
      <div className="background-color-light-brown">
        <div className="tagline">
          IF , AT FIRST YOU DO NOT SUCCEED , CALL IT VERSION 1.0
        </div>
        <div className="mt-5">
          <Container className="d-flex justify-content-evenly ">
            {TeamCard.map((link, index) => (
              <div key={index}>
                <Row>
                  <Col>
                    <div className="d-flex">
                      <div class="card">
                        <div class="blob"></div>
                        <span class="img"></span>
                        <h2 className="team-member">
                          John
                          <br />
                          <span>Doe</span>
                        </h2>
                        <div className="details">
                          {details.map((link, index) => (
                            <div>
                              {link.name}
                              <br /> {link.role}
                            </div>
                          ))}
                        </div>
                        <p>
                          <a href="#" className="socilamedialink">
                            {" "}
                            <img src={github} alt="" className="socialmedia" />
                          </a>
                          <a href="#" className="socilamedialink">
                            {" "}
                            <img src={github} alt="" className="socialmedia" />
                          </a>
                          <a href="#" className="socilamedialink">
                            {" "}
                            <img src={github} alt="" className="socialmedia" />
                          </a>
                          <a href="#" className="socilamedialink">
                            {" "}
                            <img src={github} alt="" className="socialmedia" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
};
export default Team;
