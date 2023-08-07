import React from "react";
import Menu from "../Menu";
import Frame34 from "../Frame34";
import Highlights from "../Highlights";
import ValueBasedHealthcare from "../ValueBasedHealthcare";
import Mission from "../Mission";
import Frame17 from "../Frame17";
import Group86 from "../Group86";
import Frame52 from "../Frame52";
import Partners from "../Partners";
import Group97 from "../Group97";
import News2 from "../News2";
import Group100 from "../Group100";
import Footer2 from "../Footer2";
import "./HomepageOurSolutions.css";

function HomepageOurSolutions(props) {
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
    highlightsProps,
    frame17Props,
    group86Props,
    frame52Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage-our-solutions screen">
        <div className="flex-row-27">
          <div className="logo-44 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-51 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <h1 className="title-32 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="rebuild-the-healthca-4 arial-regular-normal-black-24px">
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
        <div className="solutions-61">
          <div className="our-solutions-3 inter-bold-black-40px">
            <span className="inter-bold-black-40px">{spanText5}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-112 inter-normal-black-20px">
            <span className="inter-normal-black-20px">{spanText6}</span>
          </p>
          <Frame17 className={frame17Props.className} />
          <div className="flex-row-28">
            <div className="frame-87-1">
              <div className="group-87-2">
                <div className="overlap-group-41">
                  <div className="solution-1-58 inter-normal-black-20px">
                    <span className="inter-normal-black-20px">{spanText7}</span>
                  </div>
                </div>
                <Group86 className={group86Props.className} />
              </div>
              <div className="overlap-group1-10">
                <div className="solution-50 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText8}</span>
                </div>
              </div>
            </div>
            <div className="overlap-group3-9">
              <div className="solution-50 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText9}</span>
              </div>
            </div>
          </div>
        </div>
        <Frame52 className={frame52Props.className} />
        <Partners />
        <Group97 />
        <News2 />
        <Group100 />
        <Footer2 />
      </div>
    </div>
  );
}

export default HomepageOurSolutions;
