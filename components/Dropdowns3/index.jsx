import React from "react";
import Level2 from "../Level2";
import Button3 from "../Button3";
import "./Dropdowns3.css";

function Dropdowns3(props) {
  const { level2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-4 screen">
        <Level2
          className={level2Props.className}
          category11Props={level2Props.category11Props}
          category12Props={level2Props.category12Props}
          category13Props={level2Props.category13Props}
          category14Props={level2Props.category14Props}
        />
        <div className="cant-find-11">
          <p className="cant-find-what-you-need-11 notoserif-semi-bold-shark-20px">
            <span className="notoserif-semi-bold-shark-20px">Can’t find what you need?</span>
          </p>
          <Button3 />
        </div>
      </div>
    </div>
  );
}

export default Dropdowns3;
