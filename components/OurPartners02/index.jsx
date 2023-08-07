import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Partners4 from "../Partners4";
import Testimonial2 from "../Testimonial2";
import Group42 from "../Group42";
import "./OurPartners02.css";

function OurPartners02(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    arrow1,
    partners4Props,
    testimonial2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-partners-02 screen">
        <div className="flex-row-93">
          <div className="logo-137 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-75">
            <Frame32 />
            <div className="frame-4-59">
              <div className="partners-clients-20 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-160" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-145 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <div className="flex-row-94">
          <div className="flex-col-133">
            <h1 className="title-92 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText4}</span>
            </h1>
            <p className="lorem-ipsum-dolor-si-314 inter-normal-black-16px">
              <span className="inter-normal-black-16px">{spanText5}</span>
            </p>
          </div>
          <div className="group-34-7">
            <div className="our-clients-4 inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText6}</span>
            </div>
            <img className="arrow-1-8" src={arrow1} alt="Arrow 1" />
          </div>
        </div>
        <Partners4 className={partners4Props.className} />
        <Testimonial2 className={testimonial2Props.className} />
        <Group42 />
      </div>
    </div>
  );
}

export default OurPartners02;
