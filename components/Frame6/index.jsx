import React from "react";
import "./Frame6.css";

function Frame6(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-6-1 screen">
        <h1 className="title-24 inter-bold-black-128px">
          <span className="inter-bold-black-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame6;
