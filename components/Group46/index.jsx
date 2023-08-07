import React from "react";
import Group43 from "../Group43";
import "./Group46.css";

function Group46(props) {
  const { spanText, className } = props;

  return (
    <div className={`group-46-4 ${className || ""}`}>
      <div className="sectra-4 inter-normal-black-25px">
        <span className="span-175 inter-normal-black-25px">{spanText}</span>
      </div>
      <Group43 />
    </div>
  );
}

export default Group46;
