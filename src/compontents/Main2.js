import React from "react";
import show1 from "../images/show1.jpg";
import bg1 from "../images/bg1.jpg";

export const Main2 = () => {
  return (
    <>
      <main>
        <div className="showcase_area about">
          <div className="main_div">
            <div className="show_img">
              <img src={show1} alt="wait" className="person1 aboutimg" />
            </div>
            <div className="show_text">
              <h3 className="showcase_heading aboutSec">About Me</h3>
              <h1 className="showcase_name aboutDesign">
                Better Design, <br /> Better Experience
              </h1>
              <p className="showcase_text aboutpara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                explicabo nobis unde distinctio nostrum! Est expedita blanditiis
                quod incidunt, velit ut quam? Quam maxime, distinctio atque
                cumque deserunt expedita minus?
              </p>
              
            </div>
            <img src={bg1} alt="wait" className="bg2 aboutimg2" />
          </div>
        </div>
      </main>
    </>
  );
};
