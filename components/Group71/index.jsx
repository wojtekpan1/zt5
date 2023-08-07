import React from "react";
import "./Group71.css";

function Group71(props) {
  const { spanText, className } = props;

  return (
    <div className={`group-7-4-1 ${className || ""}`}>
      <div className="solution-54 notoserif-normal-shark-24px">
        <span className="span-338 notoserif-normal-shark-24px">{spanText}</span>
      </div>
      <img className="caret-down-7" src="/img/caretdown-2@2x.png" alt="CaretDown" />
    </div>
  );
}

export default Group71;
