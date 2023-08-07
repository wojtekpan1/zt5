import React from "react";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem4 from "../GhostBreadcrumbItem4";
import "./Frame1042.css";

function Frame1042(props) {
  const { className, ghostBreadcrumbItem4Props } = props;

  return (
    <div className={`frame-104-10 ${className || ""}`}>
      <GhostBreadcrumbItem />
      <div className="icon-21 valign-text-middle fontawesome5free-black-mischka-8px">
        <span>
          <span className="spanyalgx fontawesome5free-black-mischka-8px">chevron-right</span>
        </span>
      </div>
      <GhostBreadcrumbItem4 className={ghostBreadcrumbItem4Props.className}>
        {ghostBreadcrumbItem4Props.children}
      </GhostBreadcrumbItem4>
    </div>
  );
}

export default Frame1042;
