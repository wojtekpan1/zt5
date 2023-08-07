import React from "react";
import Menu from "../Menu";
import Frame1043 from "../Frame1043";
import Frame892 from "../Frame892";
import Group103 from "../Group103";
import Footer2 from "../Footer2";
import "./ContactUsEmptyForm2.css";

function ContactUsEmptyForm2(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-empty-form-2 screen">
        <div className="flex-row-47">
          <div className="logo-63 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-66 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame1043 />
        <h1 className="title-47 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-161 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <div className="place-an-inquiry-4 inter-bold-black-30px">
          <span className="inter-bold-black-30px">{spanText5}</span>
        </div>
        <div className="frame-90-5 inter-light-dove-gray-25px">
          <div className="group-58-4">
            <p className="what-are-you-looking-for-2">
              <span className="inter-light-dove-gray-25px">{spanText6}</span>
            </p>
            <img className="vector-344" src="/img/vector-1@2x.png" alt="Vector" />
          </div>
          <div className="overlap-group-66">
            <div className="name-14">
              <span className="inter-light-dove-gray-25px">{spanText7}</span>
            </div>
          </div>
          <div className="overlap-group-66">
            <div className="email-4">
              <span className="inter-light-dove-gray-25px">{spanText8}</span>
            </div>
          </div>
          <div className="overlap-group-66">
            <div className="phone-number-4">
              <span className="inter-light-dove-gray-25px">{spanText9}</span>
            </div>
          </div>
          <div className="overlap-group3-12">
            <div className="comment-4">
              <span className="inter-light-dove-gray-25px">{spanText10}</span>
            </div>
          </div>
        </div>
        <Frame892 />
        <Group103 />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default ContactUsEmptyForm2;
