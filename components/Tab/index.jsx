import React from "react";
import "./Tab.css";

function Tab(props) {
  const { children } = props;

  return (
    <div className="tabs-item">
      <div className="population-health notoserif-medium-shark-18px">{children}</div>
    </div>
  );
}

export default Tab;
