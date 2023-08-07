import React from "react";
import "./Group7.css";

function Group7(props) {
  const { className } = props;

  return (
    <div className={`group-7-2 ${className || ""}`}>
      <div className="catalyst-s4-5 inter-medium-black-16px">
        <span className="span-151 inter-medium-black-16px">Catalyst S4</span>
      </div>
      <p className="lorem-ipsum-dolor-si-124 inter-light-black-14px">
        <span className="span-151 inter-light-black-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group7;
