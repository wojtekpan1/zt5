import React from "react";
import { Link } from "react-router-dom";
import "./CTA2.css";

function CTA2(props) {
  const { children, className } = props;

  return (
    <div className={`cta-3 ${className || ""}`}>
      <div className="contact-us-30 notoserif-medium-white-18px">{children}</div>
    </div>
  );
}

export default CTA2;
