import React from "react";
import "./Frame9.css";

function Frame9(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-9-1 screen">
        <h1 className="title-28 inter-bold-white-128px">
          <span className="inter-bold-white-128px">{children}</span>
        </h1>
      </div>
    </div>
  );
}

export default Frame9;
