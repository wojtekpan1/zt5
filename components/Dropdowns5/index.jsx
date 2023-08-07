import React from "react";
import Group1 from "../Group1";
import Group2 from "../Group2";
import Group5 from "../Group5";
import Group3 from "../Group3";
import Group10 from "../Group10";
import "./Dropdowns5.css";

function Dropdowns5(props) {
  const { line1, group1Props, group21Props, group5Props, group3Props, group22Props, group10Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns3 screen">
        <div className="group-6-3">
          <Group1 spanText1={group1Props.spanText1} className={group1Props.className} />
          <Group2 spanText1={group21Props.spanText1} className={group21Props.className} />
          <Group5 spanText1={group5Props.spanText1} className={group5Props.className} />
          <Group3 spanText1={group3Props.spanText1} className={group3Props.className} />
          <Group2 spanText1={group22Props.spanText1} className={group22Props.className} />
        </div>
        <img className="line-1-10" src={line1} alt="Line 1" />
        <Group10 group71Props={group10Props.group71Props} group72Props={group10Props.group72Props} />
      </div>
    </div>
  );
}

export default Dropdowns5;
