import React from "react";
import Background from "../Background";
import Breadcrumb3 from "../Breadcrumb3";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import LeftContent from "../LeftContent";
import RightContent3 from "../RightContent3";
import Container13 from "../Container13";
import Testimonials2 from "../Testimonials2";
import Footer4 from "../Footer4";
import "./PopulationHealth3.css";

function PopulationHealth3(props) {
  const {
    backgroundProps,
    frame1072Props,
    header3Props,
    leftContent1Props,
    rightContent31Props,
    rightContent32Props,
    leftContent2Props,
    container13Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="population-health2 screen">
        <div className="banner-23">
          <div className="overlap-group-81">
            <Background src={backgroundProps.src} className={backgroundProps.className} />
            <Breadcrumb3 />
            <Frame1072 spanText1={frame1072Props.spanText1} />
            <Header3 logo={header3Props.logo} className={header3Props.className} />
          </div>
        </div>
        <div className="solution-52">
          <LeftContent
            spanText1={leftContent1Props.spanText1}
            spanText2={leftContent1Props.spanText2}
            spanText3={leftContent1Props.spanText3}
          />
          <RightContent3
            rightContent={rightContent31Props.rightContent}
            rectangle32={rightContent31Props.rectangle32}
            className={rightContent31Props.className}
          />
        </div>
        <div className="solution-52">
          <RightContent3
            rightContent={rightContent32Props.rightContent}
            rectangle32={rightContent32Props.rectangle32}
            className={rightContent32Props.className}
          />
          <LeftContent
            spanText1={leftContent2Props.spanText1}
            spanText2={leftContent2Props.spanText2}
            spanText3={leftContent2Props.spanText3}
            className={leftContent2Props.className}
          />
        </div>
        <Container13 contentProps={container13Props.contentProps} />
        <Testimonials2 />
        <Footer4
          logo={footer4Props.logo}
          instagram={footer4Props.instagram}
          youtube={footer4Props.youtube}
          twitter21Props={footer4Props.twitter21Props}
          twitter22Props={footer4Props.twitter22Props}
        />
      </div>
    </div>
  );
}

export default PopulationHealth3;
