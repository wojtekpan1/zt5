import React from "react";
import "./Partners3.css";

function Partners3(props) {
  const { className } = props;

  return (
    <div className={`partners-122 ${className || ""}`}>
      <div className="our-partners-13 inter-bold-black-36px">
        <span className="span-370 inter-bold-black-36px">Our partners</span>
      </div>
      <p className="lorem-ipsum-dolor-si-257 inter-normal-black-16px">
        <span className="span-370 inter-normal-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </span>
      </p>
      <div className="frame-19-3">
        <div className="rectangle-5"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-5"></div>
      </div>
      <div className="become-a-partner-3 inter-medium-black-18px">
        <span className="span-370 inter-medium-black-18px">Become a partner</span>
      </div>
    </div>
  );
}

export default Partners3;
