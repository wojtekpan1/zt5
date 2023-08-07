import React from "react";
import Group86 from "../Group86";
import "./Group87.css";

function Group87(props) {
  const { spanText, className, group86Props } = props;

  return (
    <div className={`group-87 ${className || ""}`}>
      <div className="overlap-group-34">
        <div className="solution-1-17">
          <span className="spanpcd22k inter-normal-black-20px">{spanText}</span>
        </div>
      </div>
      <Group86 className={group86Props.className} />
    </div>
  );
}

export default Group87;
