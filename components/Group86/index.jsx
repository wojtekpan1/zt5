import React from "react";
import "./Group86.css";

function Group86(props) {
  const { className } = props;

  return (
    <div className={`group-86 ${className || ""}`}>
      <p className="lorem-ipsum-dolor-si-95 inter-normal-black-16px">
        <span className="span-64 inter-normal-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a.
        </span>
      </p>
      <p className="lorem-ipsum-dolor-si-96 inter-normal-black-16px">
        <span className="span-64 inter-normal-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a.
        </span>
      </p>
      <div className="flex-row-24">
        <div className="read-more-2 inter-medium-black-14px">
          <span className="span-64 inter-medium-black-14px">Read more</span>
        </div>
        <div className="group-98">
          <img className="line-2" src="/img/line-7-3@2x.png" alt="Line 7" />
          <img className="line-2" src="/img/line-6-3@2x.png" alt="Line 6" />
        </div>
      </div>
    </div>
  );
}

export default Group86;
