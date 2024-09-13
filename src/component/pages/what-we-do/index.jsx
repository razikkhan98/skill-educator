import React from "react";
import { Container } from "react-bootstrap";
const WhatWeDo = () => {
  function qs(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }

  const sections = qs(".section", true);
  const timeline = qs(".timeline");
  const line = qs(".line");
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;

  function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

    const dist = targetY - timelineRect.top;
    console.log(dist);

    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }

    sections.forEach((item) => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);

      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add("show-me");
      }
    }); // console.log(up, down);

    prevScrollY = window.scrollY;
  }

  scrollHandler();
  line.style.display = "block";
  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Container fluid>
        {/* <div class="container"> */}
        <div class="top-section">
          <h1>My Journey</h1>
          <p>
            Since I was a child, I used to draw with colors and did some
            sketching with pencils, and after some point of time, I realized
            that it would be great if I can use my existing skills and
            creativity to design something digitally.
          </p>
        </div>
        <div class="timeline">
          <div class="line"></div>

          <div class="section">
            <div class="bead"></div>
            <div class="content">
              <h4>Jan 2018 - Present</h4>
              <h2>Freelance Designer</h2>
              <p>
                Created stuff, broke stuff and learned to fix stuff. Got to know
                a thing or two about design. Served as a Sub - Coordinator
                Design Division of Computer Science club of University and
                Co-Organized ​LNM Hacks​​, LNM-IIT Hackathon.
              </p>
            </div>
          </div>

          <div class="section">
            <div class="bead"></div>
            <div class="content">
              <h4>Sep 2018 - Dec 2018 (4 months)</h4>
              <h2>Product Designer Internship</h2>
              <p>
                Build user interfaces and tested the user experience for the
                application. Worked on building the design perspective of the
                applications hosted to provide real-time Elasticsearch
                experience.
              </p>
            </div>
          </div>

          <div class="section">
            <div class="bead"></div>
            <div class="content">
              <h4>Aug 2016 - July 2020</h4>
              <h2>Product Designer, AdFrame.io</h2>
              <p>
                A community for DIY environmental investigation. Mentored and
                contributed to open source project Plots 2 (a collaborative
                knowledge-exchange platform in Rails) and Image Sequencer (A
                pure JavaScript sequential image processing system).
              </p>
            </div>
          </div>

          <div class="section">
            <div class="bead"></div>
            <div class="content">
              <h4>1998 - 2016</h4>
              <h2>Grew up in sunny San Diego, CA</h2>
              <p>
                Grew up bulding RC planes and drones, riding dirt bikes out in
                Glamis, and Ocotillo. Practicing jui jitsu & wrestling every
                other day since elementry school. Learned to paraglide &
                paramotor at 16 with my dad.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
};
export default WhatWeDo;
