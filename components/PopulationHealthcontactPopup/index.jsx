import React from "react";
import Background from "../Background";
import Breadcrumb3 from "../Breadcrumb3";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import LeftContent2 from "../LeftContent2";
import RightContent3 from "../RightContent3";
import Content from "../Content";
import Testimonials2 from "../Testimonials2";
import Footer4 from "../Footer4";
import Group71 from "../Group71";
import "./PopulationHealthcontactPopup.css";

function PopulationHealthcontactPopup(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    iconClose,
    backgroundProps,
    frame1072Props,
    header3Props,
    leftContent21Props,
    rightContent31Props,
    rightContent32Props,
    leftContent22Props,
    contentProps,
    testimonials2Props,
    footer4Props,
    group711Props,
    group712Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="population-health-contact-popup screen">
        <div className="overlap-group4-19">
          <div className="population-health-36">
            <div className="overlap-group-83">
              <Background src={backgroundProps.src} className={backgroundProps.className} />
              <Breadcrumb3 />
              <Frame1072 spanText1={frame1072Props.spanText1} />
              <Header3 logo={header3Props.logo} className={header3Props.className} />
            </div>
            <div className="solution-53">
              <LeftContent2
                spanText1={leftContent21Props.spanText1}
                spanText2={leftContent21Props.spanText2}
                spanText3={leftContent21Props.spanText3}
              />
              <RightContent3
                rightContent={rightContent31Props.rightContent}
                rectangle32={rightContent31Props.rectangle32}
                className={rightContent31Props.className}
              />
            </div>
            <div className="solution-53">
              <RightContent3
                rightContent={rightContent32Props.rightContent}
                rectangle32={rightContent32Props.rectangle32}
                className={rightContent32Props.className}
              />
              <LeftContent2
                spanText1={leftContent22Props.spanText1}
                spanText2={leftContent22Props.spanText2}
                spanText3={leftContent22Props.spanText3}
                className={leftContent22Props.className}
              />
            </div>
            <Content spanText1={contentProps.spanText1} icon={contentProps.icon} className={contentProps.className} />
            <Testimonials2 className={testimonials2Props.className} />
            <Footer4
              logo={footer4Props.logo}
              instagram={footer4Props.instagram}
              youtube={footer4Props.youtube}
              twitter21Props={footer4Props.twitter21Props}
              twitter22Props={footer4Props.twitter22Props}
            />
          </div>
          <div className="rectangle-12752-1"></div>
          <div className="popup-4">
            <div className="frame-184953-2">
              <div className="contact-us-114 notoserif-black-pine-green-48px">
                <span className="notoserif-black-pine-green-48px">{spanText1}</span>
              </div>
              <div className="form-5">
                <div className="frame-90-8">
                  <Group71 spanText={group711Props.spanText} />
                  <Group71 spanText={group712Props.spanText} />
                  <div className="overlap-group-82">
                    <div className="name-23 notoserif-normal-mountain-mist-24px">
                      <span className="notoserif-normal-mountain-mist-24px">{spanText2}</span>
                    </div>
                  </div>
                  <div className="overlap-group-82">
                    <div className="email-7 notoserif-normal-mountain-mist-24px">
                      <span className="notoserif-normal-mountain-mist-24px">{spanText3}</span>
                    </div>
                  </div>
                  <div className="overlap-group-82">
                    <div className="phone-number-7 notoserif-normal-mountain-mist-24px">
                      <span className="notoserif-normal-mountain-mist-24px">{spanText4}</span>
                    </div>
                  </div>
                  <div className="overlap-group3-23">
                    <div className="comment-7 notoserif-normal-mountain-mist-24px">
                      <span className="notoserif-normal-mountain-mist-24px">{spanText5}</span>
                    </div>
                  </div>
                </div>
                <div className="contact-us-115 notoserif-medium-persimmon-18px">
                  <span className="notoserif-medium-persimmon-18px">{spanText6}</span>
                </div>
              </div>
            </div>
            <img className="icon-close-5" src={iconClose} alt="icon-close" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulationHealthcontactPopup;
