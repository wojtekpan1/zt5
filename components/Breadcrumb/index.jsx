import React from "react";
import "./Breadcrumb.css";

function Breadcrumb() {
  return (
    <div className="breadcrumb notoserif-bold-parchment-16px">
      <div className="place">Home</div>
      <img className="caret-circle-right" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
      <div className="contact-us">Contact us</div>
    </div>
  );
}

export default Breadcrumb;
