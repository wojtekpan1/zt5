import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Partners4 from "../Partners4";
import Testimonial3 from "../Testimonial3";
import Footer5 from "../Footer5";
import "./OurPartners3.css";

function OurPartners3(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    arrow1,
    spanText6,
    testimonial3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-partners2 screen">
        <div className="flex-row-69">
          <div className="logo-121 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-59">
            <Frame32 />
            <div className="frame-4-43">
              <div className="partners-clients-4 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-144" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-126 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <div className="flex-row-70">
          <h1 className="title-76 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText4}</span>
          </h1>
          <div className="group-34-4">
            <div className="our-clients-2 inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText5}</span>
            </div>
            <img className="arrow-1-5" src={arrow1} alt="Arrow 1" />
          </div>
        </div>
        <p className="lorem-ipsum-dolor-si-279 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Partners4 />
        <Testimonial3 spanText1={testimonial3Props.spanText1} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default OurPartners3;
