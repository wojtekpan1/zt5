import React from "react";
import Menu from "../Menu";
import Frame104 from "../Frame104";
import Frame39 from "../Frame39";
import Footer2 from "../Footer2";
import "./InsightsOption02.css";

function InsightsOption02(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    arrow11,
    spanText6,
    arrow12,
    spanText7,
    arrow13,
    frame391Props,
    frame392Props,
    frame393Props,
    frame394Props,
    frame395Props,
    frame396Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="insights-option-02 screen">
        <div className="flex-row-95">
          <div className="logo-138 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-146 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame104 />
        <h1 className="title-93 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-315 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <div className="frame-105-31">
          <div className="group-10-13">
            <div className="group-35">
              <div className="in-the-news-7 inter-normal-black-36px">
                <span className="inter-normal-black-36px">{spanText5}</span>
              </div>
              <img className="arrow-1-9" src={arrow11} alt="Arrow 1" />
            </div>
            <div className="frame-container-9">
              <Frame39 />
              <Frame39 className={frame391Props.className} />
              <Frame39 className={frame392Props.className} />
            </div>
          </div>
          <div className="group-10-13">
            <div className="group-36">
              <div className="place-70 inter-normal-black-36px">
                <span className="inter-normal-black-36px">{spanText6}</span>
              </div>
              <img className="arrow-1-9" src={arrow12} alt="Arrow 1" />
            </div>
            <div className="frame-container-9">
              <Frame39 />
              <Frame39 className={frame393Props.className} />
              <Frame39 className={frame394Props.className} />
            </div>
          </div>
          <div className="group-10-13">
            <div className="group-34-8">
              <div className="blogs-1 inter-normal-black-36px">
                <span className="inter-normal-black-36px">{spanText7}</span>
              </div>
              <img className="arrow-1-9" src={arrow13} alt="Arrow 1" />
            </div>
            <div className="frame-container-9">
              <Frame39 />
              <Frame39 className={frame395Props.className} />
              <Frame39 className={frame396Props.className} />
            </div>
          </div>
        </div>
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default InsightsOption02;
