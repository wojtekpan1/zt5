import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1-5 screen">
        <h1 className="title-71 inter-bold-black-128px">
          <span className="inter-bold-black-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame1;
