import React from "react";
import "./TeamMemberDetail.css";

function TeamMemberDetail(props) {
  const { name, position, loremIpsumDolorSi1, loremIpsumDolorSi2, linkedin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team-member-detail screen">
        <div className="team-member-detail-1">
          <div className="flex-col-10">
            <h1 className="name-12 notoserif-bold-shark-30px">{name}</h1>
            <div className="position notoserif-normal-mountain-mist-16px">{position}</div>
            <div className="group-74 notoserif-normal-shark-16px">
              <p className="lorem-ipsum-dolor-si-56">{loremIpsumDolorSi1}</p>
              <p className="lorem-ipsum-dolor-si-57">{loremIpsumDolorSi2}</p>
            </div>
            <div className="linkedin notoserif-normal-persimmon-16px">{linkedin}</div>
          </div>
          <img className="rectangle-20" src="/img/rectangle-20.svg" alt="Rectangle 20" />
          <img className="icon-close" src="/img/x.svg" alt="icon-close" />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberDetail;
