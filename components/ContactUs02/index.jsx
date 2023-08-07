import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Frame56 from "../Frame56";
import ContactInfo3 from "../ContactInfo3";
import Footer5 from "../Footer5";
import "./ContactUs02.css";

function ContactUs02(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    contactInfo3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-02 screen">
        <div className="flex-row-83">
          <div className="logo-128 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-66">
            <Frame32 />
            <div className="frame-4-50">
              <div className="partners-clients-11 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-151" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container inter-medium-black-18px">
            <div className="contact-us-136">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-136">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-83 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-305 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Frame56 />
        <ContactInfo3 className={contactInfo3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs02;
