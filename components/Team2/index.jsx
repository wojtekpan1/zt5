import React from "react";
import Menu from "../Menu";
import Frame1042 from "../Frame1042";
import Group32 from "../Group32";
import Group34 from "../Group34";
import TeamList from "../TeamList";
import Footer2 from "../Footer2";
import "./Team2.css";

function Team2(props) {
  const { spanText1, spanText2, spanText3, spanText4, frame1042Props, footer2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team-3 screen">
        <div className="flex-row-40">
          <div className="logo-60 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-63 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="flex-row-41">
          <div className="flex-col-52">
            <Frame1042 ghostBreadcrumbItem4Props={frame1042Props.ghostBreadcrumbItem4Props} />
            <h1 className="title-44 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText3}</span>
            </h1>
            <p className="lorem-ipsum-dolor-si-149 inter-normal-black-16px">
              <span className="inter-normal-black-16px">{spanText4}</span>
            </p>
            <Group32 />
          </div>
          <Group34 />
        </div>
        <TeamList />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default Team2;
