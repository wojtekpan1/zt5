import React from "react";
import CTA3 from "../CTA3";
import "./Container5.css";

function Container5(props) {
  const { wantATailoredSolutionForYou, icon, className } = props;

  return (
    <div className={`container-13 ${className || ""}`}>
      <div className="content-30">
        <div className="frame-108-3">
          <p className="want-a-tailored-solution-for-you notoserif-black-pine-green-48px">
            {wantATailoredSolutionForYou}
          </p>
          <p className="lorem-ipsum-dolor-si-32 notoserif-medium-shark-18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </p>
        </div>
        <CTA3 />
        <img className="icon" src={icon} alt="Icon" />
      </div>
    </div>
  );
}

export default Container5;
