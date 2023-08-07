import React from "react";
import Menu from "../Menu";
import Frame34 from "../Frame34";
import Highlights from "../Highlights";
import ValueBasedHealthcare from "../ValueBasedHealthcare";
import Mission from "../Mission";
import Frame17 from "../Frame17";
import Group87 from "../Group87";
import Frame52 from "../Frame52";
import Partners from "../Partners";
import Group97 from "../Group97";
import Frame21 from "../Frame21";
import Group100 from "../Group100";
import Footer2 from "../Footer2";
import "./Homepage.css";

function Homepage(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    highlightsProps,
    group87Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage screen">
        <div className="flex-row-23">
          <div className="logo-10 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-45 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <h1 className="title-31 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="rebuild-the-healthca-3 arial-regular-normal-black-24px">
          <span className="arial-regular-normal-black-24px">{spanText4}</span>
        </p>
        <Frame34 />
        <Highlights
          frame82Props={highlightsProps.frame82Props}
          frame92Props={highlightsProps.frame92Props}
          frame112Props={highlightsProps.frame112Props}
        />
        <ValueBasedHealthcare />
        <Mission />
        <div className="solutions-20">
          <div className="our-solutions-2 inter-bold-black-40px">
            <span className="inter-bold-black-40px">{spanText5}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-71 inter-normal-black-20px">
            <span className="inter-normal-black-20px">{spanText6}</span>
          </p>
          <Frame17 />
          <div className="frame-87 inter-normal-black-20px">
            <Group87 spanText={group87Props.spanText} group86Props={group87Props.group86Props} />
            <div className="overlap-group1-3">
              <div className="solution-2-17">
                <span className="inter-normal-black-20px">{spanText7}</span>
              </div>
            </div>
            <div className="overlap-group2-3">
              <div className="solution-3-17">
                <span className="inter-normal-black-20px">{spanText8}</span>
              </div>
            </div>
          </div>
        </div>
        <Frame52 />
        <Partners />
        <Group97 />
        <div className="news-1">
          <div className="latest-publications-3 inter-bold-black-40px">
            <span className="inter-bold-black-40px">{spanText9}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-72 inter-normal-black-20px">
            <span className="inter-normal-black-20px">{spanText10}</span>
          </p>
          <Frame21 />
        </div>
        <Group100 />
        <Footer2 />
      </div>
    </div>
  );
}

export default Homepage;
