import React from "react";
import Group11 from "../Group11";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    spanText1,
    keyboard_Arrow_Down1,
    spanText2,
    keyboard_Arrow_Down2,
    spanText3,
    keyboard_Arrow_Down3,
    spanText4,
    keyboard_Arrow_Down4,
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
    spanText15,
    spanText16,
    spanText17,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="overlap-group1-36">
          <div className="menu-55 inter-normal-parchment-18px">
            <div className="frame-3-85">
              <div className="solutions-90">
                <span className="inter-normal-parchment-18px">{spanText1}</span>
              </div>
              <img className="keyboard_arrow_down-140" src={keyboard_Arrow_Down1} alt="keyboard_arrow_down" />
            </div>
            <div className="frame-4-39">
              <div className="partners-clients">
                <span className="inter-normal-parchment-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-140" src={keyboard_Arrow_Down2} alt="keyboard_arrow_down" />
            </div>
            <div className="frame-5-62">
              <div className="publications-47">
                <span className="inter-normal-parchment-18px">{spanText3}</span>
              </div>
              <img className="keyboard_arrow_down-140" src={keyboard_Arrow_Down3} alt="keyboard_arrow_down" />
            </div>
            <div className="frame-6-60">
              <div className="about-us-75">
                <span className="inter-normal-parchment-18px">{spanText4}</span>
              </div>
              <img className="keyboard_arrow_down-140" src={keyboard_Arrow_Down4} alt="keyboard_arrow_down" />
            </div>
          </div>
          <h1 className="title-70 inter-bold-parchment-60px">
            <span className="inter-bold-parchment-60px">{spanText5}</span>
          </h1>
          <p className="rebuild-the-healthca-15 inter-medium-parchment-24px">
            <span className="inter-medium-parchment-24px">{spanText6}</span>
          </p>
        </div>
        <div className="highlights-3">
          <div className="frame-8-7">
            <div className="x-20 inter-black-pine-green-36px">
              <span className="inter-black-pine-green-36px">{spanText7}</span>
            </div>
            <div className="professionals-17 inter-normal-pine-green-20px">
              <span className="inter-normal-pine-green-20px">{spanText8}</span>
            </div>
          </div>
          <div className="frame-9-7">
            <div className="x-21 inter-black-pine-green-36px">
              <span className="inter-black-pine-green-36px">{spanText9}</span>
            </div>
            <div className="years-in-healthcare-17 inter-normal-pine-green-20px">
              <span className="inter-normal-pine-green-20px">{spanText10}</span>
            </div>
          </div>
          <div className="frame-10-5">
            <div className="xm-3 inter-black-pine-green-36px">
              <span className="inter-black-pine-green-36px">{spanText11}</span>
            </div>
            <div className="fundraised-15 inter-normal-pine-green-20px">
              <span className="inter-normal-pine-green-20px">{spanText12}</span>
            </div>
          </div>
          <div className="frame-11-7">
            <div className="x-22 inter-black-pine-green-36px">
              <span className="inter-black-pine-green-36px">{spanText13}</span>
            </div>
            <div className="partners-121 inter-normal-pine-green-20px">
              <span className="inter-normal-pine-green-20px">{spanText14}</span>
            </div>
          </div>
          <div className="frame-12-7">
            <div className="x-23 inter-black-pine-green-36px">
              <span className="inter-black-pine-green-36px">{spanText15}</span>
            </div>
            <div className="countries-15 inter-normal-pine-green-20px">
              <span className="inter-normal-pine-green-20px">{spanText16}</span>
            </div>
          </div>
        </div>
        <div className="value-based-healthcare-5">
          <div className="group-12-6">
            <div className="what-is-value-based-healthcare-11 inter-bold-persimmon-40px">
              <span className="inter-bold-persimmon-40px">{spanText17}</span>
            </div>
            <Group11 />
          </div>
          <div className="ellipse-container-30">
            <div className="ellipse-4-9"></div>
            <div className="ellipse-5-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
