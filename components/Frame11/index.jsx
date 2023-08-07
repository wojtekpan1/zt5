import React from "react";
import "./Frame11.css";

function Frame11(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-11-1 screen">
        <h1 className="title-27 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame11;
