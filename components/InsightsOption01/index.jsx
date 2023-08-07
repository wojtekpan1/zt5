import React from "react";
import Menu from "../Menu";
import Frame104 from "../Frame104";
import Group107 from "../Group107";
import Group35 from "../Group35";
import Frame39 from "../Frame39";
import Footer2 from "../Footer2";
import "./InsightsOption01.css";

function InsightsOption01(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    group1071Props,
    group35Props,
    frame391Props,
    frame392Props,
    group1072Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="insights-option-01 screen">
        <div className="flex-row-38">
          <div className="logo-57 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-60 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame104 />
        <h1 className="title-40 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-139 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <div className="frame-110">
          <Group107
            group35Props={group1071Props.group35Props}
            frame391Props={group1071Props.frame391Props}
            frame392Props={group1071Props.frame392Props}
          />
          <div className="group-108">
            <Group35 spanText1={group35Props.spanText1} className={group35Props.className} />
            <div className="frame-container-2">
              <Frame39 />
              <Frame39 className={frame391Props.className} />
              <Frame39 className={frame392Props.className} />
            </div>
          </div>
          <Group107
            group35Props={group1072Props.group35Props}
            frame391Props={group1072Props.frame391Props}
            frame392Props={group1072Props.frame392Props}
          />
        </div>
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default InsightsOption01;
