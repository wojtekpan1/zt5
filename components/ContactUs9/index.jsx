import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group62 from "../Group62";
import Group643 from "../Group643";
import Group69 from "../Group69";
import Footer5 from "../Footer5";
import "./ContactUs9.css";

function ContactUs9(props) {
  const { spanText5, className, group62Props, group6431Props, group6432Props, footer5Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className={`contact-us-9-1 screen ${className || ""}`}>
        <div className="flex-row-91">
          <div className="logo-135 inter-bold-black-36px">
            <span className="span-430 inter-bold-black-36px">LOGO</span>
          </div>
          <div className="menu-73">
            <Frame32 />
            <div className="frame-4-57">
              <div className="partners-clients-18 inter-normal-black-18px">
                <span className="span-430 inter-normal-black-18px">Partners &amp; Clients</span>
              </div>
              <img
                className="keyboard_arrow_down-158"
                src="/img/keyboard-arrow-down-181@2x.png"
                alt="keyboard_arrow_down"
              />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-7 inter-medium-black-18px">
            <div className="contact-us-143">
              <span className="span-430 inter-medium-black-18px">Contact us</span>
            </div>
            <div className="contact-us-143">
              <span className="span-430 inter-medium-black-18px">Contact us</span>
            </div>
          </div>
        </div>
        <h1 className="title-90 inter-bold-black-60px">
          <span className="span-430 inter-bold-black-60px">{spanText5}</span>
        </h1>
        <div className="overlap-group4-22">
          <div className="group-container-11">
            <div className="group-29-3"></div>
            <div className="group-57-12">
              <div className="solutions-97 inter-normal-black-25px">
                <span className="span-430 inter-normal-black-25px">Solutions</span>
              </div>
              <img className="group-57-10" src="/img/group-57-10@2x.png" alt="Group 57" />
            </div>
          </div>
          <p className="lorem-ipsum-dolor-si-312 inter-normal-black-16px">
            <span className="span-430 inter-normal-black-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a.
            </span>
          </p>
        </div>
        <div className="overlap-group5-9">
          <div className="group-container-12">
            <div className="group-29-4"></div>
            <div className="group-57-13">
              <div className="early-pathogen-recognition-7 inter-light-black-25px">
                <span className="span-430 inter-light-black-25px">Early pathogen recognition</span>
              </div>
              <img className="group-57-10" src="/img/group-57-10@2x.png" alt="Group 57" />
            </div>
          </div>
          <p className="i-know-what-i-want-3 inter-normal-black-25px">
            <span className="span-430 inter-normal-black-25px">I know what I want</span>
          </p>
          <div className="ellipse-21-4"></div>
          <div className="ellipse-22-9"></div>
          <Group62 className={group62Props.className} />
        </div>
        <div className="place-an-inquiry-10 inter-normal-black-25px">
          <span className="span-430 inter-normal-black-25px">Place an inquiry</span>
        </div>
        <Group643 className={group6431Props.className}>{group6431Props.children}</Group643>
        <Group643 className={group6432Props.className}>{group6432Props.children}</Group643>
        <div className="overlap-group6-1">
          <div className="phone-number-10 inter-light-black-25px">
            <span className="span-430 inter-light-black-25px">Phone number</span>
          </div>
        </div>
        <Group69 />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs9;
