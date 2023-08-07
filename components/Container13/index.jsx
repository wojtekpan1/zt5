import React from "react";
import Content from "../Content";
import "./Container13.css";

function Container13(props) {
  const { className, contentProps } = props;

  return (
    <div className={`container-41 ${className || ""}`}>
      <Content spanText1={contentProps.spanText1} icon={contentProps.icon} className={contentProps.className} />
    </div>
  );
}

export default Container13;
