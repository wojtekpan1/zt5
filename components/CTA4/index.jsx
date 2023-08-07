import React from "react";
import "./CTA4.css";

function CTA4(props) {
  const { children, className } = props;

  return (
    <div className={`cta-9 ${className || ""}`}>
      <div className="contact-us-91 notoserif-medium-white-18px">
        <span className="span-257 notoserif-medium-white-18px">{children}</span>
      </div>
    </div>
  );
}

export default CTA4;
