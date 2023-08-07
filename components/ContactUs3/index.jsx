import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group63 from "../Group63";
import ContactInfo3 from "../ContactInfo3";
import Footer5 from "../Footer5";
import "./ContactUs3.css";

function ContactUs3(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    group57,
    spanText7,
    group63Props,
    contactInfo3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-3-1 screen">
        <div className="flex-row-84">
          <div className="logo-129 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-67">
            <Frame32 />
            <div className="frame-4-51">
              <div className="partners-clients-12 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-152" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-1 inter-medium-black-18px">
            <div className="contact-us-137">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-137">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-84 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-306 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <div className="group-58-8">
          <div className="overlap-group-139">
            <div className="group-58-9">
              <img className="group-57-1" src={group57} alt="Group 57" />
            </div>
            <p className="what-are-you-looking-for-6 inter-light-dove-gray-25px">
              <span className="inter-light-dove-gray-25px">{spanText7}</span>
            </p>
          </div>
          <Group63
            spanText1={group63Props.spanText1}
            spanText2={group63Props.spanText2}
            spanText3={group63Props.spanText3}
            spanText4={group63Props.spanText4}
          />
        </div>
        <ContactInfo3 className={contactInfo3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs3;
