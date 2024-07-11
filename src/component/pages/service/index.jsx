import React from "react";
// import ServiceImg from "../../assets/images/home/home-1.jpg";

import { FaComputer } from "react-icons/fa6";

const Service = () => {
 const  ServiceCard = [
{
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Special title treatment",
    description: " With supporting text below as a natural lead-in to additional content."
  },

];
  return (
    <>
      <div className="bg-service p-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Our Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          <div className="row">
            {ServiceCard.map((link, index) => (
              <div className="col-lg-3 col-md-6 gap-5 mb-5">
                <div class="card" style={{width: "18rem"}}>
                  <div class="card-body d-flex flex-column justify-content-center align-items-center rounded-5">
                    <div>
                    <FaComputer className="fs-1" />

                    </div>
                    <h5 class="card-title">{link.title}</h5>
                    <p class="card-text text-center">
                     {link.description}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-3 mt-5">
              <div class="card border-success mb-3" style={{maxwidth: "18rem"}}>
                <div class="card-header bg-transparent border-success">
                  Header
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  Footer
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 mb-5">
              <div class="card border-success mb-3" style={{maxwidth: "18rem"}}>
                <div class="card-header bg-transparent border-success">
                  Header
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  Footer
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 mt-5">
              <div class="card border-success mb-3" style={{maxwidth: "18rem"}}>
                <div class="card-header bg-transparent border-success">
                  Header
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  Footer
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
