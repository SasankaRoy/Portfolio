import React, { useEffect } from "react";
import person3 from "../images/person3.jpg";
import bg1 from "../images/bg1.jpg";
import { Main2 } from "./Main2";
import { Skill } from "./Skill";

import ScrollReveal from "scrollreveal";

export const Main = () => {
  // useing scrollreveal here...
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1800,
      distance: "65px",
    });
    sr.reveal(".show_text", { delay: 400 });
    sr.reveal(".skill_box", { origin: "right", delay: 400 });
    sr.reveal(".show_img", { origin: "top", delay: 500 });
    sr.reveal(".showcase_heading", { origin: "left", delay: 400 });
    sr.reveal(".bg2", { origin: "left", delay: 400 });
    ScrollReveal().reveal(".show_text");
    ScrollReveal().reveal(".show_img");
  }, []);
  return (
    <>
      <main>
        <div className="showcase_area">
          <div className="main_div">
            <div className="show_text">
              <h3 className="showcase_heading">product designer</h3>
              <h1 className="showcase_name">sasanka roy</h1>
              <p className="showcase_text">
                i am a full stack developer.let's work together.
              </p>
              
            </div>
            <div className="show_img">
              <img src={person3} alt="wait" className="person1" />
              <img src={bg1} alt="wait" className="bg2" />
            </div>
          </div>
        </div>
      </main>
      <Main2 />
      <Skill />
    </>
  );
};
