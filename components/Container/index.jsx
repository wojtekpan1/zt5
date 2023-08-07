import React from "react";
import RightContent from "../RightContent";
import "./Container.css";

function Container(props) {
  const { rightContentProps } = props;

  return (
    <div className="container-1">
      <div className="content-18">
        <div className="left-content">
          <div className="what-is-value-based-healthcare notoserif-black-pine-green-48px">
            What is value-based
            <br />
            healthcare?
          </div>
          <p className="lorem-ipsum-dolor-si-14 notoserif-medium-shark-18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </p>
        </div>
        <RightContent ellipse9={rightContentProps.ellipse9} ellipse10={rightContentProps.ellipse10} />
      </div>
    </div>
  );
}

export default Container;
