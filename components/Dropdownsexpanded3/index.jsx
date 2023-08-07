import React from "react";
import Level2 from "../Level2";
import Group72 from "../Group72";
import CantFind2 from "../CantFind2";
import "./Dropdownsexpanded3.css";

function Dropdownsexpanded3(props) {
  const { line1, level2Props, group721Props, group722Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-expanded-1 screen">
        <div className="flex-row-61">
          <Level2
            category11Props={level2Props.category11Props}
            category12Props={level2Props.category12Props}
            category13Props={level2Props.category13Props}
            category14Props={level2Props.category14Props}
          />
          <img className="line-1-6" src={line1} alt="Line 1" />
          <div className="group-10-9">
            <Group72 spanText1={group721Props.spanText1} />
            <Group72 spanText1={group722Props.spanText1} className={group722Props.className} />
          </div>
        </div>
        <CantFind2 />
      </div>
    </div>
  );
}

export default Dropdownsexpanded3;
