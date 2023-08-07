import React from "react";
import TeamList from "../TeamList";
import Group32 from "../Group32";
import Footer3 from "../Footer3";
import Group34 from "../Group34";
import Frame1042 from "../Frame1042";
import Menu from "../Menu";
import "./TeamExpanded.css";

function TeamExpanded(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    iconClose,
    teamListProps,
    group32Props,
    footer3Props,
    group34Props,
    frame1042Props,
    menuProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team-expanded screen">
        <div className="overlap-group1-23">
          <h1 className="title-45 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText1}</span>
          </h1>
          <TeamList className={teamListProps.className} />
          <Group32 className={group32Props.className} />
          <p className="lorem-ipsum-dolor-si-150 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText2}</span>
          </p>
          <Footer3 className={footer3Props.className} />
          <Group34 className={group34Props.className} />
          <div className="logo-61 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText3}</span>
          </div>
          <div className="contact-us-64 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText4}</span>
          </div>
          <Frame1042
            className={frame1042Props.className}
            ghostBreadcrumbItem4Props={frame1042Props.ghostBreadcrumbItem4Props}
          />
          <div className="rectangle-33-1"></div>
          <div className="team-member-detail-2">
            <div className="flex-col-53">
              <div className="place-35 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText5}</span>
              </div>
              <div className="position-5 inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText6}</span>
              </div>
              <div className="group-74-2 inter-normal-black-16px">
                <p className="lorem-ipsum-dolor-si-151">
                  <span className="inter-normal-black-16px">{spanText7}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-152">
                  <span className="inter-normal-black-16px">{spanText8}</span>
                </p>
              </div>
              <div className="linkedin-1 inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText9}</span>
              </div>
            </div>
            <div className="rectangle-29-1"></div>
            <img className="icon-close-4" src={iconClose} alt="icon-close" />
          </div>
          <Menu className={menuProps.className} />
        </div>
      </div>
    </div>
  );
}

export default TeamExpanded;
