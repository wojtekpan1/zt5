import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem2 from "../GhostBreadcrumbItem2";
import GhostBreadcrumbItem3 from "../GhostBreadcrumbItem3";
import Header2 from "../Header2";
import Why from "../Why";
import How from "../How";
import Who from "../Who";
import Frame94 from "../Frame94";
import Publications2 from "../Publications2";
import Others from "../Others";
import Footer2 from "../Footer2";
import "./CatalystS4HowItWorks.css";

function CatalystS4HowItWorks(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, howProps, footer2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="catalyst-s4-how-it-works screen">
        <div className="flex-row-34">
          <div className="logo-50 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-56 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-2">
          <GhostBreadcrumbItem />
          <div className="icon-12 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <GhostBreadcrumbItem2 />
          <GhostBreadcrumbItem3 />
          <div className="ghost-_breadcrumb_item-24">
            <div className="icon-13 valign-text-middle fontawesome5free-black-mischka-8px">
              <span>
                <span className="fontawesome5free-black-mischka-8px">{spanText4}</span>
              </span>
            </div>
            <div className="catalyst-s4-9 inter-semi-bold-black-16px">
              <span className="inter-semi-bold-black-16px">{spanText5}</span>
            </div>
          </div>
        </div>
        <Header2 />
        <Why />
        <How spanText3={howProps.spanText3} spanText4={howProps.spanText4} frame93Props={howProps.frame93Props} />
        <Who />
        <Frame94 />
        <Publications2 />
        <Others />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default CatalystS4HowItWorks;
