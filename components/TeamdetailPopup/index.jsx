import React from "react";
import Background from "../Background";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import Frame293 from "../Frame293";
import Frame362 from "../Frame362";
import Footer4 from "../Footer4";
import "./TeamdetailPopup.css";

function TeamdetailPopup(props) {
  const {
    spanText1,
    caretcircleright,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    rectangle20,
    iconClose,
    backgroundProps,
    frame1072Props,
    header3Props,
    frame2931Props,
    frame2932Props,
    frame2933Props,
    frame2934Props,
    frame3621Props,
    frame3622Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="team-detail-popup screen">
        <div className="overlap-group1-34">
          <div className="overlap-group-90">
            <Background src={backgroundProps.src} className={backgroundProps.className} />
            <div className="breadcrumb-15 notoserif-bold-parchment-16px">
              <div className="place-42">
                <span className="notoserif-bold-parchment-16px">{spanText1}</span>
              </div>
              <img className="caret-circle-right-48" src={caretcircleright} alt="CaretCircleRight" />
              <div className="team-1">
                <span className="notoserif-bold-parchment-16px">{spanText2}</span>
              </div>
            </div>
            <Frame1072 spanText1={frame1072Props.spanText1} className={frame1072Props.className} />
            <Header3 logo={header3Props.logo} className={header3Props.className} />
          </div>
          <div className="tabs-11">
            <div className="core-team-4 notoserif-bold-shark-20px">
              <span className="notoserif-bold-shark-20px">{spanText3}</span>
            </div>
            <div className="advisors-4 notoserif-medium-shark-20px">
              <span className="notoserif-medium-shark-20px">{spanText4}</span>
            </div>
          </div>
          <div className="list-7">
            <div className="frame-33-1">
              <Frame293 rectangle20={frame2931Props.rectangle20} frame1849632Props={frame2931Props.frame1849632Props} />
              <Frame293 rectangle20={frame2932Props.rectangle20} frame1849632Props={frame2932Props.frame1849632Props} />
              <Frame293 rectangle20={frame2933Props.rectangle20} frame1849632Props={frame2933Props.frame1849632Props} />
              <Frame293 rectangle20={frame2934Props.rectangle20} frame1849632Props={frame2934Props.frame1849632Props} />
            </div>
            <Frame362
              frame2941Props={frame3621Props.frame2941Props}
              frame2942Props={frame3621Props.frame2942Props}
              frame2943Props={frame3621Props.frame2943Props}
              frame2944Props={frame3621Props.frame2944Props}
            />
            <Frame362
              frame2941Props={frame3622Props.frame2941Props}
              frame2942Props={frame3622Props.frame2942Props}
              frame2943Props={frame3622Props.frame2943Props}
              frame2944Props={frame3622Props.frame2944Props}
            />
          </div>
          <Footer4
            logo={footer4Props.logo}
            instagram={footer4Props.instagram}
            youtube={footer4Props.youtube}
            className={footer4Props.className}
            twitter21Props={footer4Props.twitter21Props}
            twitter22Props={footer4Props.twitter22Props}
          />
          <div className="rectangle-12753"></div>
          <div className="team-member-detail-3">
            <div className="flex-col-91">
              <div className="name-24 notoserif-bold-shark-30px">
                <span className="notoserif-bold-shark-30px">{spanText5}</span>
              </div>
              <div className="position-6 notoserif-normal-mountain-mist-16px">
                <span className="notoserif-normal-mountain-mist-16px">{spanText6}</span>
              </div>
              <div className="group-74-3 notoserif-normal-shark-16px">
                <p className="lorem-ipsum-dolor-si-242">
                  <span className="notoserif-normal-shark-16px">{spanText7}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-243">
                  <span className="notoserif-normal-shark-16px">{spanText8}</span>
                </p>
              </div>
              <div className="linkedin-16 notoserif-normal-persimmon-16px">
                <span className="notoserif-normal-persimmon-16px">{spanText9}</span>
              </div>
            </div>
            <img className="rectangle-20-7" src={rectangle20} alt="Rectangle 20" />
            <img className="icon-close-6" src={iconClose} alt="icon-close" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamdetailPopup;
