import React from "react";
import "./Frame13.css";

function Frame13(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-13-1 screen">
        <h1 className="title-25 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame13;
