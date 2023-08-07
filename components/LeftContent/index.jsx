import React from "react";
import CTA5 from "../CTA5";
import "./LeftContent.css";

function LeftContent(props) {
  const { spanText1, spanText2, spanText3, className } = props;

  return (
    <div className={`t-content-4-1 ${className || ""}`}>
      <div className="catalyst-4 notoserif-black-pine-green-48px">
        <span className="span-333 notoserif-black-pine-green-48px">{spanText1}</span>
      </div>
      <p className="about-catalyst-s4-c-2 notoserif-medium-shark-18px">
        <span className="span-333 notoserif-medium-shark-18px">{spanText2}</span>
      </p>
      <p className="how-can-it-help-you-2 notoserif-medium-shark-18px">
        <span className="span-333 notoserif-medium-shark-18px">{spanText3}</span>
      </p>
      <div className="frame-115-2">
        <CTA5 />
        <div className="contact-us-113 notoserif-medium-persimmon-18px">
          <span className="span-333 notoserif-medium-persimmon-18px">Read more</span>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
