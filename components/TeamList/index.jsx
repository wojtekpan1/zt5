import React from "react";
import Frame332 from "../Frame332";
import "./TeamList.css";

function TeamList(props) {
  const { className } = props;

  return (
    <div className={`team-list-1 ${className || ""}`}>
      <Frame332 />
      <Frame332 />
      <Frame332 />
    </div>
  );
}

export default TeamList;
