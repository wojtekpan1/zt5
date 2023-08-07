import React from "react";
import Menu from "../Menu";
import Frame1043 from "../Frame1043";
import Frame892 from "../Frame892";
import Group103 from "../Group103";
import Footer2 from "../Footer2";
import "./ContactUsSelectQuestion1.css";

function ContactUsSelectQuestion1(props) {
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
    spanText11,
    spanText12,
    frame892Props,
    group103Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-select-question-1 screen">
        <div className="flex-row-50">
          <div className="logo-66 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-73 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame1043 />
        <h1 className="title-50 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-164 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <div className="place-an-inquiry-6 inter-bold-black-30px">
          <span className="inter-bold-black-30px">{spanText5}</span>
        </div>
        <div className="frame-90-7">
          <div className="group-container-3">
            <div className="overlap-group-68">
              <div className="email-6 inter-light-dove-gray-25px">
                <span className="inter-light-dove-gray-25px">{spanText6}</span>
              </div>
            </div>
            <div className="group-63 inter-light-black-25px">
              <div className="group-57">
                <div className="solutions-68">
                  <span className="inter-light-black-25px">{spanText7}</span>
                </div>
                <img className="vector-346" src="/img/vector-4@2x.png" alt="Vector" />
              </div>
              <div className="group-63-item">
                <span className="inter-light-black-25px">{spanText8}</span>
              </div>
              <div className="group-63-item">
                <span className="inter-light-black-25px">{spanText9}</span>
              </div>
              <div className="group-63-item">
                <span className="inter-light-black-25px">{spanText10}</span>
              </div>
            </div>
          </div>
          <div className="overlap-group1-24">
            <div className="phone-number-6 inter-light-dove-gray-25px">
              <span className="inter-light-dove-gray-25px">{spanText11}</span>
            </div>
          </div>
          <div className="overlap-group2-21">
            <div className="comment-6 inter-light-dove-gray-25px">
              <span className="inter-light-dove-gray-25px">{spanText12}</span>
            </div>
          </div>
        </div>
        <Frame892 className={frame892Props.className} />
        <Group103 className={group103Props.className} />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default ContactUsSelectQuestion1;
