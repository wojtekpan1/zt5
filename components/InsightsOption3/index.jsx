import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem5 from "../GhostBreadcrumbItem5";
import Frame39 from "../Frame39";
import Footer2 from "../Footer2";
import "./InsightsOption3.css";

function InsightsOption3(props) {
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
      <div className="insights-option-3 screen">
        <div className="flex-row-39">
          <div className="logo-58 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-61 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-8">
          <GhostBreadcrumbItem />
          <div className="icon-19 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <div className="ghost-_breadcrumb_item-32">
            <div className="insights-20 inter-normal-black-16px">
              <span className="inter-normal-black-16px">{spanText4}</span>
            </div>
          </div>
          <div className="icon-19 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText5}</span>
            </span>
          </div>
          <GhostBreadcrumbItem5 />
        </div>
        <h1 className="title-41 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText6}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-144 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText7}</span>
        </p>
        <div className="frame-container-4">
          <Frame39 />
          <Frame39 className={frame391Props.className} />
          <Frame39 className={frame392Props.className} />
        </div>
        <div className="frame-container-5">
          <Frame39 />
          <Frame39 className={frame393Props.className} />
          <Frame39 className={frame394Props.className} />
        </div>
        <div className="frame-container-6">
          <Frame39 />
          <Frame39 className={frame395Props.className} />
          <Frame39 className={frame396Props.className} />
        </div>
        <p className="address-12 inter-normal-mountain-mist-36px">
          <span className="inter-normal-mountain-mist-36px">{spanText8}</span>
          <span className="inter-bold-black-36px">{spanText9}</span>
          <span className="inter-normal-mountain-mist-36px">{spanText10}</span>
        </p>
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default InsightsOption3;
