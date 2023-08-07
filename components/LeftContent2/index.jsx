import React from "react";
import "./LeftContent2.css";

function LeftContent2(props) {
  const { spanText1, spanText2, spanText3, className } = props;

  return (
    <div className={`t-content-5-1 ${className || ""}`}>
      <div className="catalyst-5 notoserif-black-pine-green-48px">
        <span className="span-337 notoserif-black-pine-green-48px">{spanText1}</span>
      </div>
      <p className="about-catalyst-s4-c-3 notoserif-medium-shark-18px">
        <span className="span-337 notoserif-medium-shark-18px">{spanText2}</span>
      </p>
      <p className="how-can-it-help-you-3 notoserif-medium-shark-18px">
        <span className="span-337 notoserif-medium-shark-18px">{spanText3}</span>
      </p>
      <div className="frame-115-3">
        <div className="cta-32">
          <div className="contact-us-116 notoserif-medium-white-18px">
            <span className="span-337 notoserif-medium-white-18px">Request a demo</span>
          </div>
        </div>
        <div className="contact-us-117 notoserif-medium-persimmon-18px">
          <span className="span-337 notoserif-medium-persimmon-18px">Read more</span>
        </div>
      </div>
    </div>
  );
}

export default LeftContent2;
