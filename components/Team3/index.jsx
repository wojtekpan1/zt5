import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Group34 from "../Group34";
import Group32 from "../Group32";
import Frame333 from "../Frame333";
import Footer5 from "../Footer5";
import "./Team3.css";

function Team3(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    keyboard_Arrow_Down,
    spanText4,
    spanText5,
    group34Props,
    group32Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team2 screen">
        <div className="flex-row-81">
          <div className="flex-col-128">
            <div className="logo-126 inter-bold-black-36px">
              <span className="inter-bold-black-36px">{spanText1}</span>
            </div>
            <h1 className="title-81 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText2}</span>
            </h1>
          </div>
          <div className="menu-64">
            <Frame32 />
            <div className="frame-4-48">
              <div className="partners-clients-9 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText3}</span>
              </div>
              <img className="keyboard_arrow_down-149" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="flex-col-129">
            <div className="contact-us-134 inter-medium-black-18px">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
            <Group34 className={group34Props.className} />
          </div>
        </div>
        <p className="lorem-ipsum-dolor-si-295 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText5}</span>
        </p>
        <Group32 className={group32Props.className} />
        <div className="team-list-3">
          <Frame333 />
          <Frame333 />
          <Frame333 />
        </div>
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default Team3;
