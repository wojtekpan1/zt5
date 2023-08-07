import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import ContactInfo3 from "../ContactInfo3";
import Investment from "../Investment";
import Footer5 from "../Footer5";
import "./ContactUs.css";

function ContactUs(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    investment1Props,
    investment2Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-124 screen">
        <div className="flex-row-67">
          <div className="logo-120 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-58">
            <Frame32 />
            <div className="frame-4-42">
              <div className="partners-clients-3 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-143" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-125 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <h1 className="title-75 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText4}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-267 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText5}</span>
        </p>
        <div className="general-inquiry">
          <div className="general-inquiry-1 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText6}</span>
          </div>
          <div className="group-29">
            <div className="rectangle-1-5"></div>
            <div className="rectangle-1-5"></div>
            <div className="rectangle-1-5"></div>
            <div className="rectangle-1-5"></div>
          </div>
          <div className="place-66 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText7}</span>
          </div>
        </div>
        <ContactInfo3 />
        <div className="flex-row-68">
          <Investment spanText1={investment1Props.spanText1} />
          <Investment spanText1={investment2Props.spanText1} className={investment2Props.className} />
        </div>
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs;
