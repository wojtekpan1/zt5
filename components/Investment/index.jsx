import React from "react";
import "./Investment.css";

function Investment(props) {
  const { spanText1, className } = props;

  return (
    <div className={`flex-row-68-item-1 ${className || ""}`}>
      <div className="for inter-bold-black-36px">
        <span className="span-403 inter-bold-black-36px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-278 inter-normal-black-16px">
        <span className="span-403 inter-normal-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a.
        </span>
      </p>
    </div>
  );
}

export default Investment;
