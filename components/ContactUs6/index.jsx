import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Frame56 from "../Frame56";
import Footer5 from "../Footer5";
import "./ContactUs6.css";

function ContactUs6(props) {
  const { spanText1, spanText2, keyboard_Arrow_Down, spanText3, spanText4, spanText5, spanText6, footer5Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-6-1 screen">
        <div className="flex-row-88">
          <div className="logo-132 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-70">
            <Frame32 />
            <div className="frame-4-54">
              <div className="partners-clients-15 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-155" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-4 inter-medium-black-18px">
            <div className="contact-us-140">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-140">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-87 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-309 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Frame56 />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs6;
