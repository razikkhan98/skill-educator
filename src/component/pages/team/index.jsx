import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
  const cardData = [
    {
      id: "m1",
      image:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop",
      name: "Jhone Deo",
      title: "Founder",
      bio: " Visionary founder and CEO of EcoTech Innovations. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m2",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      name: "Isra Beljik",
      title: "Chief Technology Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m3",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
      name: "Justin Lager",
      title: "Chief Operator Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m4",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
      name: "Georgea Potter",
      title: "Chief Financial Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m5",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      name: "Emilly Jacks",
      title: "Member",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m6",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      name: "Sophia Wingston",
      title: "Engineer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m7",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
      name: "Chris Denial",
      title: "Co-Founder",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m8",
      image:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop",
      name: "Olivia Brook",
      title: "B.Tech",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m9",
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
      name: "Harry Parker",
      title: "Consulting Member",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m10",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
      name: "Jhony Deap",
      title: "Team Head",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
  ];
  return (
    <>
      <section className="team py-5 bg">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className="team-head  text-center">
                <h1>Our Team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col lg={12} md={6}>
              <div
                class="members row scrolling-wrapper flex-row flex-nowrap mt-4 pb-4 pt-2"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <div class="col-2 tile active">
                  <a href="#m1" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m2" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m3" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m4" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m5" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m6" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m7" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m8" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m9" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
                <div class="col-2 tile">
                  <a href="#m10" className="card-block">
                    <img
                      src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop"
                      alt="Loading"
                    />
                  </a>
                </div>
              </div>
            </Col>
            {/* <div class="divider"></div> */}
            <Col lg={12}>
              {cardData.map((link, index) => (
                <div
                  className="card-section bg-black p-4 rounded mt-lg-5"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  id={link.id}
                  key={index}
                >
                  <Row>
                    <Col lg={4} md={12}>
                      <div class="card-img m-auto">
                        <img
                          src={link.image}
                          alt="Loading"
                          className="rounded "
                        />
                      </div>
                    </Col>
                    <Col lg={8} md={12}>
                      <div class="info px-4 ">
                        <div class="name fs-4 fw-bold text-light">
                          {link.name}
                        </div>
                        <div class="title fs-5 fw-medium text-warning">
                          {link.title}
                        </div>
                        <div class="bio fs-5 fw-light text-light">
                          <p>{link.bio}</p>
                          <p>{link.bio}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Team;
