import React from "react";
import "./Frame10.css";

function Frame10(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-10-1 screen">
        <h1 className="title-30 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame10;
