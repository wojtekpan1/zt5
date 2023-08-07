import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group56 from "../Group56";
import Group62 from "../Group62";
import Group583 from "../Group583";
import Footer5 from "../Footer5";
import "./ContactUs8.css";

function ContactUs8(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
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
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-8-1 screen">
        <div className="flex-row-90">
          <div className="logo-134 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-72">
            <Frame32 />
            <div className="frame-4-56">
              <div className="partners-clients-17 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-157" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-6 inter-medium-black-18px">
            <div className="contact-us-142">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-142">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-89 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-311 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Group56 />
        <div className="group-container-10">
          <div className="group-61-2">
            <div className="ellipse-container-40">
              <div className="ellipse-21-3"></div>
              <div className="ellipse-22-8"></div>
            </div>
            <p className="i-know-what-i-want-2 inter-normal-black-25px">
              <span className="inter-normal-black-25px">{spanText7}</span>
            </p>
          </div>
          <Group62 />
        </div>
        <div className="group-63-4">
          <Group583 />
          <div className="group-63-5 inter-light-black-25px">
            <div className="group-63-item-3">
              <span className="inter-light-black-25px">{spanText8}</span>
            </div>
            <div className="group-63-item-3">
              <span className="inter-light-black-25px">{spanText9}</span>
            </div>
            <div className="group-63-item-3">
              <span className="inter-light-black-25px">{spanText10}</span>
            </div>
            <div className="group-63-item-3">
              <span className="inter-light-black-25px">{spanText11}</span>
            </div>
            <div className="group-63-item-3">
              <span className="inter-light-black-25px">{spanText12}</span>
            </div>
          </div>
        </div>
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs8;
