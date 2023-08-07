import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group56 from "../Group56";
import Group62 from "../Group62";
import Group583 from "../Group583";
import Group63 from "../Group63";
import ContactInfo3 from "../ContactInfo3";
import Footer5 from "../Footer5";
import "./ContactUs4.css";

function ContactUs4(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    group63Props,
    contactInfo3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-4-1 screen">
        <div className="flex-row-85">
          <div className="logo-130 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-68">
            <Frame32 />
            <div className="frame-4-52">
              <div className="partners-clients-13 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-153" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-2 inter-medium-black-18px">
            <div className="contact-us-138">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-138">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-85 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-307 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <Group56 />
        <div className="group-container-6">
          <div className="group-61">
            <div className="ellipse-container-38">
              <div className="ellipse-21-1"></div>
              <div className="ellipse-22-1"></div>
            </div>
            <p className="i-know-what-i-want inter-normal-black-25px">
              <span className="inter-normal-black-25px">{spanText7}</span>
            </p>
          </div>
          <Group62 />
        </div>
        <div className="group-63-3">
          <Group583 />
          <Group63
            spanText1={group63Props.spanText1}
            spanText2={group63Props.spanText2}
            spanText3={group63Props.spanText3}
            spanText4={group63Props.spanText4}
            className={group63Props.className}
          />
        </div>
        <ContactInfo3 className={contactInfo3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs4;
