import React from "react";
import CTA5 from "../CTA5";
import "./Content.css";

function Content(props) {
  const { spanText1, icon, className } = props;

  return (
    <div className={`content-53 ${className || ""}`}>
      <div className="flex-col-70">
        <div className="frame-108-9">
          <p className="want-a-tailored-solution-for-you-10 notoserif-black-pine-green-48px">
            <span className="span-281 notoserif-black-pine-green-48px">{spanText1}</span>
          </p>
          <p className="lorem-ipsum-dolor-si-195 notoserif-medium-shark-18px">
            <span className="span-281 notoserif-medium-shark-18px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
            </span>
          </p>
        </div>
        <CTA5 />
      </div>
      <img className="icon-28" src={icon} alt="Icon" />
    </div>
  );
}

export default Content;
