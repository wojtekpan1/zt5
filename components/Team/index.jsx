import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Breadcrumb2 from "../Breadcrumb2";
import Frame107 from "../Frame107";
import Header from "../Header";
import Frame184963 from "../Frame184963";
import Frame33 from "../Frame33";
import Frame36 from "../Frame36";
import Footer from "../Footer";
import "./Team.css";

function Team(props) {
  const {
    coreTeam,
    advisors,
    backgroundProps,
    breadcrumb2Props,
    frame107Props,
    frame184963Props,
    frame331Props,
    frame332Props,
    frame333Props,
    frame361Props,
    frame362Props,
    footerProps,
  } = props;

  return (
    <div className="team screen">
      <div className="banner-17">
        <div className="overlap-group-30">
          <Background src={backgroundProps.src} />
          <Breadcrumb2 ourStory={breadcrumb2Props.ourStory} />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="tabs-5">
        <div className="tab-12">
          <div className="core-team notoserif-bold-shark-20px">{coreTeam}</div>
        </div>
        <div className="tab-13">
          <div className="advisors notoserif-medium-shark-20px">{advisors}</div>
        </div>
      </div>
      <div className="list-6">
        <div className="team-list">
          <div className="frame-33">
            <Link to="/team-member-detail">
              <div className="frame-29">
                <img className="rectangle-20-1" src="/img/rectangle-20-1.svg" alt="Rectangle 20" />
                <Frame184963 name={frame184963Props.name} />
              </div>
            </Link>
            <Frame33 frame184963Props={frame331Props.frame184963Props} />
            <Frame33 frame184963Props={frame332Props.frame184963Props} />
            <Frame33 frame184963Props={frame333Props.frame184963Props} />
          </div>
          <Frame36
            frame291Props={frame361Props.frame291Props}
            frame292Props={frame361Props.frame292Props}
            frame293Props={frame361Props.frame293Props}
            frame294Props={frame361Props.frame294Props}
          />
          <Frame36
            frame291Props={frame362Props.frame291Props}
            frame292Props={frame362Props.frame292Props}
            frame293Props={frame362Props.frame293Props}
            frame294Props={frame362Props.frame294Props}
          />
        </div>
      </div>
      <Footer
        logo={footerProps.logo}
        iconInstagram={footerProps.iconInstagram}
        youtube={footerProps.youtube}
        className={footerProps.className}
        twitterProps={footerProps.twitterProps}
      />
    </div>
  );
}

export default Team;
