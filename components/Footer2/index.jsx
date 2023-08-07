import React from "react";
import Footer3 from "../Footer3";
import "./Footer2.css";

function Footer2(props) {
  const { className } = props;

  return (
    <div className={`footer-4 ${className || ""}`}>
      <Footer3 />
    </div>
  );
}

export default Footer2;
