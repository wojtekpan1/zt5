import React from "react";
import RightContent2 from "../RightContent2";
import "./Container2.css";

function Container2(props) {
  const { rightContent2Props } = props;

  return (
    <div className="container-4">
      <div className="content-21">
        <RightContent2 ellipse9={rightContent2Props.ellipse9} ellipse10={rightContent2Props.ellipse10} />
        <div className="left-content-3">
          <div className="rebuild-healthcare-ecosystem notoserif-black-pine-green-48px">
            Rebuild healthcare
            <br />
            ecosystem
          </div>
          <p className="lorem-ipsum-dolor-si-17 notoserif-medium-shark-18px">
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
      </div>
    </div>
  );
}

export default Container2;
