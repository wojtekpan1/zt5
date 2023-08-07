import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

function CTA(props) {
  const { children, className } = props;

  return (
    <div className={`cta ${className || ""}`}>
      <div className="contact-us-23 notoserif-medium-persimmon-18px">{children}</div>
    </div>
  );
}

export default CTA;
