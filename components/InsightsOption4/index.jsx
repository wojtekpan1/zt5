import React from "react";
import Frame39 from "../Frame39";
import Menu from "../Menu";
import Footer3 from "../Footer3";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem5 from "../GhostBreadcrumbItem5";
import "./InsightsOption4.css";

function InsightsOption4(props) {
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
    spanText11,
    spanText12,
    spanText13,
    iconClose,
    frame391Props,
    frame392Props,
    frame393Props,
    frame394Props,
    frame395Props,
    frame396Props,
    frame397Props,
    frame398Props,
    frame399Props,
    menuProps,
    footer3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="insights-option-4 screen">
        <div className="overlap-group1-21">
          <h1 className="title-42 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText1}</span>
          </h1>
          <p className="lorem-ipsum-dolor-si-145 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText2}</span>
          </p>
          <Frame39 className={frame391Props.className} />
          <Frame39 className={frame392Props.className} />
          <Frame39 className={frame393Props.className} />
          <Frame39 className={frame394Props.className} />
          <Frame39 className={frame395Props.className} />
          <Frame39 className={frame396Props.className} />
          <Frame39 className={frame397Props.className} />
          <Frame39 className={frame398Props.className} />
          <Frame39 className={frame399Props.className} />
          <div className="logo-59 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText3}</span>
          </div>
          <div className="contact-us-62 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText4}</span>
          </div>
          <Menu className={menuProps.className} />
          <Footer3 className={footer3Props.className} />
          <div className="frame-104-9">
            <GhostBreadcrumbItem />
            <div className="icon-20 valign-text-middle fontawesome5free-black-mischka-8px">
              <span>
                <span className="fontawesome5free-black-mischka-8px">{spanText5}</span>
              </span>
            </div>
            <div className="ghost-_breadcrumb_item-35">
              <div className="insights-21 inter-normal-tapa-16px">
                <span className="inter-normal-tapa-16px">{spanText6}</span>
              </div>
            </div>
            <div className="icon-20 valign-text-middle fontawesome5free-black-mischka-8px">
              <span>
                <span className="fontawesome5free-black-mischka-8px">{spanText7}</span>
              </span>
            </div>
            <GhostBreadcrumbItem5 />
          </div>
          <div className="rectangle-33"></div>
          <div className="overlap-group-61">
            <div className="flex-col-51">
              <div className="title-43 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText8}</span>
              </div>
              <div className="description inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText9}</span>
              </div>
              <p className="date-link-to-news inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText10}</span>
              </p>
              <div className="group-74-1 inter-normal-black-16px">
                <p className="lorem-ipsum-dolor-si-146">
                  <span className="inter-normal-black-16px">{spanText11}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-147">
                  <span className="inter-normal-black-16px">{spanText12}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-148">
                  <span className="inter-normal-black-16px">{spanText13}</span>
                </p>
              </div>
            </div>
            <div className="rectangle-29"></div>
            <img className="icon-close-3" src={iconClose} alt="icon-close" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsOption4;
