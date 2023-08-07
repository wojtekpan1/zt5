import React from "react";
import "./GhostBreadcrumbItem4.css";

function GhostBreadcrumbItem4(props) {
  const { children, className } = props;

  return (
    <div className={`ghost-_breadcrumb_item-25 ${className || ""}`}>
      <div className="solutions-66 inter-semi-bold-black-16px">
        <span className="spanp0g3s inter-semi-bold-black-16px">{children}</span>
      </div>
    </div>
  );
}

export default GhostBreadcrumbItem4;
