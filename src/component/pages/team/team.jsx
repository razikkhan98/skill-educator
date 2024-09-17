import React, { useState } from "react";
import Header from "../../common/header/index";
import TeamImageBoy from "../../assets/img/team/teammale.png";
import TeamImageGirl from "../../assets/img/team/teamfemale1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Team = () => {
  const [open, setOpen] = useState(false);
  const TeamCard = [
    {
      img: TeamImageBoy,
    },
    {
      img: TeamImageGirl,
    },
    {
      img: TeamImageBoy,
    },
    {
      img: TeamImageGirl,
    },
  ];
  const CardData = [
    {
      title:
        "Sayyed Faizan Ali - CTO and CEO Specializations - Automation Python Cloud Machine Learning Data Science Crypto Curriencies Financial Asistant Business Analyst Qualifications - B.Tech ",
    },
    {
      title:
        "Sayyed Faizan Ali - CTO and CEO Specializations - Automation Python Cloud Machine Learning Data Science Crypto Curriencies Financial Asistant Business Analyst Qualifications - B.Tech ",
    },
    {
      title:
        "Sayyed Faizan Ali - CTO and CEO Specializations - Automation Python Cloud Machine Learning Data Science Crypto Curriencies Financial Asistant Business Analyst Qualifications - B.Tech ",
    },
    {
      title:
        "Sayyed Faizan Ali - CTO and CEO Specializations - Automation Python Cloud Machine Learning Data Science Crypto Curriencies Financial Asistant Business Analyst Qualifications - B.Tech ",
    },
  ];
  return (
    <>
      <Header title="w e@e d u c a t o r : ~ $" />
      <div className="background">
        <div className="tagline background-color-light-brown">
          IF , AT FIRST YOU DO NOT SUCCEED , CALL IT VERSION 1.0
        </div>
        <div className="mt-5">
          <Container>
            <Row>
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              ></div>
              {TeamCard.map((link, index) => (
                <Col key={index} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team-card">
                    <div className="team-card-img">
                      <img
                        src={link.img}
                        alt="...loading"
                        className="w-100 col-lg-3 col-md-6 col-sm-12"
                      />
                    </div>
                    <div>{link.title}</div>
                  </div>
                </Col>
              ))}
              {CardData.map((link, index) => (
                <Col key={index} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="py-5 px-5 team-card-data">{link.title}</div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Team;
