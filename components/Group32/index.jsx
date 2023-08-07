import React from "react";
import "./Group32.css";

function Group32(props) {
  const { className } = props;

  return (
    <div className={`group-32 ${className || ""}`}>
      <div className="flex-row-42">
        <div className="core-team-1 inter-bold-black-20px">
          <span className="span-202 inter-bold-black-20px">Core team</span>
        </div>
        <div className="advisors-1 inter-normal-black-20px">
          <span className="span-202 inter-normal-black-20px">Advisors</span>
        </div>
      </div>
      <div className="overlap-group-62">
        <img className="line-5-1" src="/img/line-5-3@2x.png" alt="Line 5" />
      </div>
    </div>
  );
}

export default Group32;
