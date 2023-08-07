import React from "react";
import Category1 from "../Category1";
import "./Level2.css";

function Level2(props) {
  const { className, category11Props, category12Props, category13Props, category14Props } = props;

  return (
    <div className={`level-2-4 ${className || ""}`}>
      <Category1 spanText1={category11Props.spanText1} />
      <Category1 spanText1={category12Props.spanText1} className={category12Props.className} />
      <Category1 spanText1={category13Props.spanText1} className={category13Props.className} />
      <Category1 spanText1={category14Props.spanText1} className={category14Props.className} />
    </div>
  );
}

export default Level2;
