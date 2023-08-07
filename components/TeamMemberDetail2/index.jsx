import React from "react";
import "./TeamMemberDetail2.css";

function TeamMemberDetail2(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, rectangle20, x } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team-member-detail-2-1 screen">
        <div className="flex-col-92">
          <h1 className="name-26 notoserif-bold-shark-30px">
            <span className="notoserif-bold-shark-30px">{spanText1}</span>
          </h1>
          <div className="position-8 notoserif-normal-mountain-mist-16px">
            <span className="notoserif-normal-mountain-mist-16px">{spanText2}</span>
          </div>
          <div className="group-74-4 notoserif-normal-shark-16px">
            <p className="lorem-ipsum-dolor-si-244">
              <span className="notoserif-normal-shark-16px">{spanText3}</span>
            </p>
            <p className="lorem-ipsum-dolor-si-245">
              <span className="notoserif-normal-shark-16px">{spanText4}</span>
            </p>
          </div>
          <div className="linkedin-17 notoserif-normal-persimmon-16px">
            <span className="notoserif-normal-persimmon-16px">{spanText5}</span>
          </div>
        </div>
        <img className="rectangle-20-10" src={rectangle20} alt="Rectangle 20" />
        <img className="x-18" src={x} alt="X" />
      </div>
    </div>
  );
}

export default TeamMemberDetail2;
