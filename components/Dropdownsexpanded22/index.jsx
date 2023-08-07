import React from "react";
import Level2 from "../Level2";
import Group72 from "../Group72";
import CantFind2 from "../CantFind2";
import "./Dropdownsexpanded22.css";

function Dropdownsexpanded22(props) {
  const { level2Props, group721Props, group722Props, group723Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-expanded-2 screen">
        <div className="flex-row-62">
          <Level2
            className={level2Props.className}
            category11Props={level2Props.category11Props}
            category12Props={level2Props.category12Props}
            category13Props={level2Props.category13Props}
            category14Props={level2Props.category14Props}
          />
          <img className="line-1-7" src="/img/line-1-3@2x.png" alt="Line 1" />
          <div className="group-10-10">
            <Group72 spanText1={group721Props.spanText1} className={group721Props.className} />
            <Group72 spanText1={group722Props.spanText1} className={group722Props.className} />
            <Group72 spanText1={group723Props.spanText1} className={group723Props.className} />
          </div>
        </div>
        <CantFind2 />
      </div>
    </div>
  );
}

export default Dropdownsexpanded22;
