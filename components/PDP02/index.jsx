import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Frame37 from "../Frame37";
import Testimonial3 from "../Testimonial3";
import Footer5 from "../Footer5";
import "./PDP02.css";

function PDP02(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    testimonial3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pdp-02 screen">
        <div className="flex-row-75">
          <div className="logo-123 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-61">
            <Frame32 />
            <div className="frame-4-45">
              <div className="partners-clients-6 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-146" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-129 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <h1 className="title-78 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText4}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-287 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText5}</span>
        </p>
        <Frame37 />
        <div className="partners-127">
          <div className="flex-col-126">
            <div className="catalyst-s4-14 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText6}</span>
            </div>
            <div className="group-39-7 inter-normal-black-24px">
              <p className="lorem-ipsum-dolor-si-288">
                <span className="inter-normal-black-24px">{spanText7}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-289">
                <span className="inter-normal-black-24px">{spanText8}</span>
              </p>
            </div>
          </div>
          <div className="rectangle-23-3"></div>
        </div>
        <div className="group-52-2">
          <div className="rectangle-23-4"></div>
          <div className="flex-col-127">
            <div className="what-does-it-solve inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText9}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-290 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText10}</span>
            </p>
          </div>
        </div>
        <div className="group-54-1">
          <div className="overlap-group3-30">
            <div className="infographic inter-bold-black-24px">
              <span className="inter-bold-black-24px">{spanText11}</span>
            </div>
          </div>
        </div>
        <div className="overlap-group4-21">
          <p className="want-a-tailored-solution-for-you-18 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText12}</span>
          </p>
          <div className="flex-row-76">
            <div className="contact-us-130 inter-medium-black-18px">
              <span className="inter-medium-black-18px">{spanText13}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-291 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText14}</span>
            </p>
          </div>
        </div>
        <Testimonial3 spanText1={testimonial3Props.spanText1} className={testimonial3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default PDP02;
