import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Partners2 from "../Partners2";
import Testimonial3 from "../Testimonial3";
import Footer5 from "../Footer5";
import "./OurClients3.css";

function OurClients3(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    arrow1,
    spanText6,
    partners2Props,
    testimonial3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-clients2 screen">
        <div className="flex-row-79">
          <div className="logo-125 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-63">
            <Frame32 />
            <div className="frame-4-47">
              <div className="partners-clients-8 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-148" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-133 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <div className="flex-row-80">
          <h1 className="title-80 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText4}</span>
          </h1>
          <div className="group-34-5">
            <div className="our-partners-15 inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText5}</span>
            </div>
            <img className="arrow-1-6" src={arrow1} alt="Arrow 1" />
          </div>
        </div>
        <p className="lorem-ipsum-dolor-si-294 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Partners2 className={partners2Props.className} />
        <Testimonial3 spanText1={testimonial3Props.spanText1} className={testimonial3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default OurClients3;
