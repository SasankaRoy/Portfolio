import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Main } from "./Main";
// import { Main2 } from "./Main2";

export const Navbar = () => {
  // sticky navbar here ...
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setToggle(window.pageYOffset > 0);
    });
  }, []);
  // useing  ScrollReveal here ...
  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     duration: 2500,
  //     distance: "60px",
  //   });
  //   sr.reveal(".container", {  delay: 600 });
  // }, []);

  return (
    <>
      <header className={toggle ? "scrolled" : ""}>
        <nav className="container">
          <div className="nav">
            <div className="logo">
              <h1>
                portf<span>olio</span>
              </h1>
            </div>

            {/* <ul className="links">
              <li>
                <a href="/" className="nav_links">
                  home
                </a>
              </li>
              <li>
                <a href="/" className="nav_links">
                  about
                </a>
              </li>
              <li>
                <a href="/" className="nav_links">
                  skills
                </a>
              </li>
              <li>
                <a href="/" className="nav_links">
                  contact
                </a>
              </li>
            </ul>*/}
          </div>

          {/* <li className="dark_mode">
            <a href="/" className="uil uil-moon"></a>
          </li>  */}
        </nav>
      </header>
      <Main />
      {/* <Main2/> */}
    </>
  );
};
