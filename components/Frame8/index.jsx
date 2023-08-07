import React from "react";
import "./Frame8.css";

function Frame8(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-8-1 screen">
        <h1 className="title-26 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame8;
