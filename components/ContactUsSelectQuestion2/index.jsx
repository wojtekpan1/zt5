import React from "react";
import Menu from "../Menu";
import Frame1043 from "../Frame1043";
import Group103 from "../Group103";
import Footer2 from "../Footer2";
import "./ContactUsSelectQuestion2.css";

function ContactUsSelectQuestion2(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    vector2,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-select-question-2 screen">
        <div className="flex-row-48">
          <div className="logo-64 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-71 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame1043 />
        <h1 className="title-48 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-162 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <div className="place-an-inquiry-5 inter-bold-black-30px">
          <span className="inter-bold-black-30px">{spanText5}</span>
        </div>
        <div className="overlap-group4-9">
          <div className="place-38 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText6}</span>
          </div>
          <div className="frame-90-6">
            <div className="group-58-5">
              <div className="solutions-67 inter-normal-black-25px">
                <span className="inter-normal-black-25px">{spanText7}</span>
              </div>
              <img className="vector-345" src="/img/vector-1@2x.png" alt="Vector" />
            </div>
            <div className="group-102">
              <p className="what-solution-are-you-looking-for inter-normal-dove-gray-25px">
                <span className="inter-normal-dove-gray-25px">{spanText8}</span>
              </p>
              <img className="vector-345" src={vector2} alt="Vector" />
            </div>
            <div className="overlap-group-67">
              <div className="name-15 inter-light-dove-gray-25px">
                <span className="inter-light-dove-gray-25px">{spanText9}</span>
              </div>
            </div>
            <div className="overlap-group-67">
              <div className="email-5 inter-light-dove-gray-25px">
                <span className="inter-light-dove-gray-25px">{spanText10}</span>
              </div>
            </div>
            <div className="overlap-group-67">
              <div className="phone-number-5 inter-light-dove-gray-25px">
                <span className="inter-light-dove-gray-25px">{spanText11}</span>
              </div>
            </div>
            <div className="overlap-group3-13">
              <div className="comment-5 inter-light-dove-gray-25px">
                <span className="inter-light-dove-gray-25px">{spanText12}</span>
              </div>
            </div>
            <div className="place-39 inter-medium-black-18px">
              <span className="inter-medium-black-18px">{spanText13}</span>
            </div>
          </div>
        </div>
        <Group103 />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default ContactUsSelectQuestion2;
