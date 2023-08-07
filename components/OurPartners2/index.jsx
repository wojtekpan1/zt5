import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import Group39 from "../Group39";
import Testimonial2 from "../Testimonial2";
import Group42 from "../Group42";
import "./OurPartners2.css";

function OurPartners2(props) {
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
    overlapGroup2,
    line3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-partners-3-1 screen">
        <div className="flex-row-36">
          <div className="logo-52 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-58 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-4">
          <GhostBreadcrumbItem />
          <div className="icon-15 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <div className="ghost-_breadcrumb_item-28">
            <div className="our-partners-6 inter-semi-bold-black-16px">
              <span className="inter-semi-bold-black-16px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-38 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-132 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <div className="partners-90">
          <div className="group-38">
            <div className="frame-43">
              <div className="solution-partners-17 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText7}</span>
              </div>
              <div className="technology-partners inter-normal-black-24px">
                <span className="inter-normal-black-24px">{spanText8}</span>
              </div>
              <div className="research-partners inter-normal-black-24px">
                <span className="inter-normal-black-24px">{spanText9}</span>
              </div>
              <div className="ecosystem-expansion-partners inter-normal-black-24px">
                <span className="inter-normal-black-24px">{spanText10}</span>
              </div>
            </div>
            <div className="overlap-group2-15" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <img className="line-3-3" src={line3} alt="Line 3" />
            </div>
          </div>
          <div className="group-container">
            <Group39 />
            <div className="overlap-group1-18">
              <div className="ellipse-container-14">
                <div className="ellipse-9-8"></div>
                <div className="ellipse-13-1"></div>
                <div className="ellipse-11-1"></div>
                <div className="ellipse-12-1"></div>
              </div>
              <div className="ellipse-10-8"></div>
            </div>
          </div>
        </div>
        <Testimonial2 />
        <Group42 />
      </div>
    </div>
  );
}

export default OurPartners2;
