import React from "react";
import Level1 from "../Level1";
import Group8 from "../Group8";
import CantFind from "../CantFind";
import "./Dropdownsexpanded2.css";

function Dropdownsexpanded2(props) {
  const { level1Props, group81Props, group82Props, group83Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-u40expandedu41-2 screen">
        <div className="flex-row-11">
          <Level1
            className={level1Props.className}
            category1Props={level1Props.category1Props}
            category2Props={level1Props.category2Props}
            category3Props={level1Props.category3Props}
            category4Props={level1Props.category4Props}
          />
          <img className="line-1-1" src="/img/line-1.svg" alt="Line 1" />
          <div className="group-10-2">
            <Group8 catalystResearch={group81Props.catalystResearch} className={group81Props.className} />
            <Group8 catalystResearch={group82Props.catalystResearch} className={group82Props.className} />
            <Group8 catalystResearch={group83Props.catalystResearch} className={group83Props.className} />
          </div>
        </div>
        <CantFind />
      </div>
    </div>
  );
}

export default Dropdownsexpanded2;
