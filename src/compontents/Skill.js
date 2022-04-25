import React, { useEffect } from "react";

export const Skill = () => {
  useEffect(() => {
    const first_skill = document.querySelector(".skill:first-child");
    const counter = document.querySelectorAll(".counter span ");
    const progress_bars = document.querySelectorAll(".skill svg circle ");

    const count = (num1,num2) => {
      let currnum = +num1.innerText;
      if(currnum<num2){
        num1.innerText = currnum+1
        setTimeout(() =>{
          count(num1,num2)
        },10)
      }
      ;
    }
    

    window.addEventListener("scroll", () =>{
       //1548
      const pos = Math.round(window.pageYOffset);
      
      if(pos >= 1548 && pos <= 1925){
        counter.forEach((counter, i) =>{
          let target = +counter.dataset.target;          
          let value = 427-427*(target/100);
          progress_bars[i].style.setProperty("--target-", value);
           console.log(value);
           console.log("its over")
          setTimeout(()=>{
            count(counter, target)
          },500)
        })
        progress_bars.forEach((e)=>{
          e.style.animation = 'progress 2.1s ease-in-out forwards';
        })
        // console.log("hello yo")
      }
    })
  },[]);
  return (
    <>
      <div className="skills">
        <div className=" container">
          <div className="skill_box">
            <div className="heading_box">
              <h3 className="sub_heading">My Skills</h3>
              <h1 className="heading">Let Me Help You</h1>
              <div className="para_div">
                <p className="skill_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, excepturi? Consequuntur, quisquam unde.
                  Laboriosam, labore sunt voluptate vitae cupiditate architecto
                  accusantium dolores. Sit dicta quibusdam enim, ab vero non
                  perspiciatis.
                </p>
                {/* <button className="btn1">Hire me</button> */}
              </div>
            </div>
            <div className="skill_wrap">
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle1" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='89' >0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">html</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle2" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='89'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">css</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle3" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='69'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">javascript</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle4" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='55'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">React js</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle5" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='60'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">Node js</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle6" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='60'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">Express js</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle7" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='65'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">Mongo DB</h2>
                </div>
              </div>
              <div className="skill">
                <div className="sk_prograss">
                  <svg>
                    <circle className="cricle8" cx="75" cy="75" r="68" />
                  </svg>
                  <h3 className="counter">
                    <span data-target='65'>0</span>%
                  </h3>
                </div>
                <div className="sk_title">
                  <h2 className="title">Mongoose</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};
