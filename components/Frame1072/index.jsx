import React from "react";
import "./Frame1072.css";

function Frame1072(props) {
  const { spanText1, className } = props;

  return (
    <div className={`frame-107-10 ${className || ""}`}>
      <h1 className="title-61 notoserif-black-pine-green-60px">
        <span className="span-327 notoserif-black-pine-green-60px">{spanText1}</span>
      </h1>
      <p className="lorem-ipsum-dolor-si-225 notoserif-medium-shark-18px">
        <span className="span-327 notoserif-medium-shark-18px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </span>
      </p>
    </div>
  );
}

export default Frame1072;
