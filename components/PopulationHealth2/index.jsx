import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem2 from "../GhostBreadcrumbItem2";
import Group100 from "../Group100";
import Testimonial from "../Testimonial";
import Footer2 from "../Footer2";
import "./PopulationHealth2.css";

function PopulationHealth2(props) {
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
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    group100Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="population-health-3-1 screen">
        <div className="flex-row-31">
          <div className="logo-46 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-54 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104">
          <GhostBreadcrumbItem />
          <div className="icon-6 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <GhostBreadcrumbItem2 />
          <div className="ghost-_breadcrumb_item">
            <div className="icon-7 valign-text-middle fontawesome5free-black-mischka-8px">
              <span>
                <span className="fontawesome5free-black-mischka-8px">{spanText4}</span>
              </span>
            </div>
            <div className="population-health-16 inter-semi-bold-black-16px">
              <span className="inter-semi-bold-black-16px">{spanText5}</span>
            </div>
          </div>
        </div>
        <h1 className="title-34 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText6}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-126 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText7}</span>
        </p>
        <div className="partners-89">
          <div className="flex-col-44">
            <div className="catalyst-s4-7 inter-bold-black-50px">
              <span className="inter-bold-black-50px">{spanText8}</span>
            </div>
            <div className="group-39 inter-normal-black-20px">
              <p className="about-catalyst-s4-c-1">
                <span className="inter-normal-black-20px">{spanText9}</span>
              </p>
              <p className="how-can-it-help-you-1">
                <span className="inter-normal-black-20px">{spanText10}</span>
              </p>
            </div>
            <div className="flex-row-32 inter-medium-black-14px">
              <div className="request-a-demo-3">
                <span className="inter-medium-black-14px">{spanText11}</span>
              </div>
              <div className="read-more-5">
                <span className="inter-medium-black-14px">{spanText12}</span>
              </div>
            </div>
          </div>
          <div className="rectangle-23"></div>
        </div>
        <div className="overlap-group4-5">
          <div className="read-more-6 inter-medium-black-14px">
            <span className="inter-medium-black-14px">{spanText13}</span>
          </div>
          <div className="group-52">
            <div className="rectangle-23"></div>
            <div className="flex-col-45">
              <div className="catalyst-research-3 inter-bold-black-50px">
                <span className="inter-bold-black-50px">{spanText14}</span>
              </div>
              <div className="group-85 inter-normal-black-20px">
                <p className="lorem-ipsum-dolor-si-127">
                  <span className="inter-normal-black-20px">{spanText15}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-128">
                  <span className="inter-normal-black-20px">{spanText16}</span>
                </p>
              </div>
              <div className="request-a-demo-4 inter-medium-black-14px">
                <span className="inter-medium-black-14px">{spanText17}</span>
              </div>
            </div>
          </div>
        </div>
        <Group100 className={group100Props.className} />
        <Testimonial />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default PopulationHealth2;
