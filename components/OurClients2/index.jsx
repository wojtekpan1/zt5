import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import Partners2 from "../Partners2";
import Testimonial2 from "../Testimonial2";
import Group42 from "../Group42";
import "./OurClients2.css";

function OurClients2(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, spanText7, spanText8 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-clients-3 screen">
        <div className="flex-row-37">
          <div className="logo-56 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-59 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-5">
          <GhostBreadcrumbItem />
          <div className="icon-16 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <div className="ghost-_breadcrumb_item-29">
            <div className="our-partners-7 inter-normal-dove-gray-16px-2">
              <span className="inter-normal-dove-gray-16px-2">{spanText4}</span>
            </div>
          </div>
          <div className="icon-16 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText5}</span>
            </span>
          </div>
          <div className="our-clients-1 inter-semi-bold-black-16px">
            <span className="inter-semi-bold-black-16px">{spanText6}</span>
          </div>
        </div>
        <h1 className="title-39 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText7}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-138 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText8}</span>
        </p>
        <Partners2 />
        <Testimonial2 />
        <Group42 />
      </div>
    </div>
  );
}

export default OurClients2;
