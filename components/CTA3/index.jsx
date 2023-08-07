import React from "react";
import "./CTA3.css";

function CTA3(props) {
  const { className } = props;

  return (
    <div className={`cta-8 ${className || ""}`}>
      <div className="contact-us-35 notoserif-medium-white-18px">Contact us</div>
    </div>
  );
}

export default CTA3;
