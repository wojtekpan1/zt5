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
import "./CatalystS42.css";

function CatalystS42(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, howProps, footer2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="catalyst-s4-2-1 screen">
        <div className="flex-row-33">
          <div className="logo-47 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-55 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-1">
          <GhostBreadcrumbItem />
          <div className="icon-8 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <GhostBreadcrumbItem2 />
          <GhostBreadcrumbItem3 />
          <div className="ghost-_breadcrumb_item-21">
            <div className="icon-9 valign-text-middle fontawesome5free-black-mischka-8px">
              <span>
                <span className="fontawesome5free-black-mischka-8px">{spanText4}</span>
              </span>
            </div>
            <div className="catalyst-s4-8 inter-semi-bold-black-16px">
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

export default CatalystS42;
