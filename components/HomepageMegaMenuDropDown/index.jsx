import React from "react";
import Menu from "../Menu";
import Highlights from "../Highlights";
import Group1 from "../Group1";
import Group2 from "../Group2";
import Group5 from "../Group5";
import Group3 from "../Group3";
import Group10 from "../Group10";
import ValueBasedHealthcare from "../ValueBasedHealthcare";
import Mission from "../Mission";
import Frame17 from "../Frame17";
import Group87 from "../Group87";
import Frame52 from "../Frame52";
import Partners from "../Partners";
import Group97 from "../Group97";
import News2 from "../News2";
import Group100 from "../Group100";
import Footer2 from "../Footer2";
import "./HomepageMegaMenuDropDown.css";

function HomepageMegaMenuDropDown(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line1,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    highlightsProps,
    group1Props,
    group2Props,
    group5Props,
    group3Props,
    group10Props,
    group87Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage-mega-menu-drop-down screen">
        <div className="flex-row-29">
          <div className="logo-45 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-52 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group4-4">
          <div className="explore-our-solutions-7 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
          <h1 className="title-33 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText4}</span>
          </h1>
          <p className="rebuild-the-healthca-5 arial-regular-normal-black-24px">
            <span className="arial-regular-normal-black-24px">{spanText5}</span>
          </p>
          <Highlights
            className={highlightsProps.className}
            frame82Props={highlightsProps.frame82Props}
            frame92Props={highlightsProps.frame92Props}
            frame112Props={highlightsProps.frame112Props}
          />
          <div className="dropdowns">
            <div className="flex-row-30">
              <div className="group-6-2">
                <Group1 spanText1={group1Props.spanText1} />
                <Group2 spanText1={group2Props.spanText1} />
                <Group5 spanText1={group5Props.spanText1} />
                <Group3 spanText1={group3Props.spanText1} />
              </div>
              <img className="line-1-4" src={line1} alt="Line 1" />
              <Group10 group71Props={group10Props.group71Props} group72Props={group10Props.group72Props} />
            </div>
            <div className="cant-find-5">
              <p className="cant-find-what-you-need-5 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText6}</span>
              </p>
              <div className="contact-us-53 inter-medium-black-18px">
                <span className="inter-medium-black-18px">{spanText7}</span>
              </div>
            </div>
          </div>
        </div>
        <ValueBasedHealthcare />
        <Mission />
        <div className="solutions-62">
          <div className="our-solutions-4 inter-bold-black-40px">
            <span className="inter-bold-black-40px">{spanText8}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-115 inter-normal-black-20px">
            <span className="inter-normal-black-20px">{spanText9}</span>
          </p>
          <Frame17 />
          <div className="frame-87-2">
            <div className="overlap-group-42">
              <div className="solution-1-59 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText10}</span>
              </div>
            </div>
            <Group87
              spanText={group87Props.spanText}
              className={group87Props.className}
              group86Props={group87Props.group86Props}
            />
            <div className="overlap-group1-11">
              <div className="solution-3-58 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText11}</span>
              </div>
            </div>
          </div>
        </div>
        <Frame52 />
        <Partners />
        <Group97 />
        <News2 />
        <Group100 />
        <Footer2 />
      </div>
    </div>
  );
}

export default HomepageMegaMenuDropDown;
