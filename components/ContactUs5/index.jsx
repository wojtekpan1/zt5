import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group62 from "../Group62";
import Group643 from "../Group643";
import Group69 from "../Group69";
import ContactInfo3 from "../ContactInfo3";
import Footer5 from "../Footer5";
import "./ContactUs5.css";

function ContactUs5(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    group571,
    spanText7,
    spanText8,
    group572,
    spanText9,
    spanText10,
    spanText11,
    group62Props,
    group6431Props,
    group6432Props,
    contactInfo3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-5-1 screen">
        <div className="flex-row-86">
          <div className="logo-131 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-69">
            <Frame32 />
            <div className="frame-4-53">
              <div className="partners-clients-14 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-154" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-3 inter-medium-black-18px">
            <div className="contact-us-139">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-139">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-86 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <div className="overlap-group7-1">
          <div className="group-container-7">
            <div className="group-29-1"></div>
            <div className="group-57-7">
              <div className="solutions-96 inter-normal-black-25px">
                <span className="inter-normal-black-25px">{spanText6}</span>
              </div>
              <img className="group-57-6" src={group571} alt="Group 57" />
            </div>
          </div>
          <p className="lorem-ipsum-dolor-si-308 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText7}</span>
          </p>
        </div>
        <div className="group-container-8">
          <div className="group-container-9">
            <div className="group-29-2"></div>
            <div className="group-57-8">
              <div className="early-pathogen-recognition-6 inter-light-black-25px">
                <span className="inter-light-black-25px">{spanText8}</span>
              </div>
              <img className="group-57-6" src={group572} alt="Group 57" />
            </div>
          </div>
          <div className="group-61-1 inter-normal-black-25px">
            <div className="flex-row-87">
              <div className="ellipse-container-39">
                <div className="ellipse-21-2"></div>
                <div className="ellipse-22-7"></div>
              </div>
              <p className="i-know-what-i-want-1">
                <span className="inter-normal-black-25px">{spanText9}</span>
              </p>
            </div>
            <div className="place-an-inquiry-9">
              <span className="inter-normal-black-25px">{spanText10}</span>
            </div>
          </div>
          <Group62 className={group62Props.className} />
        </div>
        <Group643>{group6431Props.children}</Group643>
        <Group643 className={group6432Props.className}>{group6432Props.children}</Group643>
        <div className="overlap-group6">
          <div className="phone-number-9 inter-light-black-25px">
            <span className="inter-light-black-25px">{spanText11}</span>
          </div>
        </div>
        <Group69 />
        <ContactInfo3 className={contactInfo3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs5;
