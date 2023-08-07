import React from "react";
import Menu from "../Menu";
import Frame1043 from "../Frame1043";
import Group103 from "../Group103";
import Footer2 from "../Footer2";
import "./ThankYouMessage.css";

function ThankYouMessage(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, group103Props, footer2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="thank-you-message screen">
        <div className="flex-row-49">
          <div className="logo-65 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-72 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <Frame1043 />
        <h1 className="title-49 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText3}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-163 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText4}</span>
        </p>
        <p className="thank-you-your-mess inter-bold-black-30px">
          <span className="inter-bold-black-30px">{spanText5}</span>
        </p>
        <div className="frame-89-5">
          <div className="send-another-email inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText6}</span>
          </div>
        </div>
        <Group103 className={group103Props.className} />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default ThankYouMessage;
