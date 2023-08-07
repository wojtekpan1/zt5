import React from "react";
import "./Card12.css";

function Card12(props) {
  const { bandaids, className } = props;

  return (
    <div className={`card-1-8 ${className || ""}`}>
      <img className="bandaids" src={bandaids} alt="Bandaids" />
      <div className="catalyst-value-solutions-5 notoserif-bold-white-24px">
        <span className="spannc0w7 notoserif-bold-white-24px">Catalyst Value Solutions</span>
      </div>
    </div>
  );
}

export default Card12;
