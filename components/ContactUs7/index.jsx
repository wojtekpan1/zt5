import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Footer5 from "../Footer5";
import "./ContactUs7.css";

function ContactUs7(props) {
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
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-7-1 screen">
        <div className="flex-row-89">
          <div className="logo-133 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-71">
            <Frame32 />
            <div className="frame-4-55">
              <div className="partners-clients-16 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-156" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-container-5 inter-medium-black-18px">
            <div className="contact-us-141">
              <span className="inter-medium-black-18px">{spanText3}</span>
            </div>
            <div className="contact-us-141">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
          </div>
        </div>
        <h1 className="title-88 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText5}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-310 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <div className="group-58-17">
          <div className="overlap-group1-46">
            <div className="group-58-18">
              <img className="group-57-9" src={group57} alt="Group 57" />
            </div>
            <p className="what-are-you-looking-for-7 inter-light-dove-gray-25px">
              <span className="inter-light-dove-gray-25px">{spanText7}</span>
            </p>
          </div>
        </div>
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default ContactUs7;
