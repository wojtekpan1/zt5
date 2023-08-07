import React from "react";
import Category12 from "../Category12";
import "./Dropdowns4.css";

function Dropdowns4(props) {
  const { category121Props, category122Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns2 screen">
        <Category12 spanText1={category121Props.spanText1} />
        <Category12 spanText1={category122Props.spanText1} className={category122Props.className} />
      </div>
    </div>
  );
}

export default Dropdowns4;
