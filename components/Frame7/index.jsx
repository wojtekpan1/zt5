import React from "react";
import "./Frame7.css";

function Frame7(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-7-1 screen">
        <h1 className="title-29 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame7;
