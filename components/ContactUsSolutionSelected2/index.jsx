import React from "react";
import Background from "../Background";
import Breadcrumb from "../Breadcrumb";
import Frame107 from "../Frame107";
import Header from "../Header";
import Group58 from "../Group58";
import Group642 from "../Group642";
import CTA from "../CTA";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";
import "./ContactUsSolutionSelected2.css";

function ContactUsSolutionSelected2(props) {
  const {
    placeAnInquiry,
    whatSolutionsAreYouLookingFor,
    backgroundProps,
    frame107Props,
    group58Props,
    group6421Props,
    group6422Props,
    group6423Props,
    group6424Props,
    cTAProps,
    contactInfoProps,
    footerProps,
  } = props;

  return (
    <div className="contact-us-solution-selected-2 screen">
      <div className="banner-6">
        <div className="overlap-group-13">
          <Background src={backgroundProps.src} />
          <Breadcrumb />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="inquiry-2">
        <div className="place-an-inquiry-1 notoserif-bold-pine-green-40px">{placeAnInquiry}</div>
        <div className="form-1">
          <div className="frame-90-1">
            <Group58 solution={group58Props.solution} />
            <div className="group-71-1">
              <div className="group-59-4">
                <p className="what-solutions-are-you-looking-for notoserif-normal-mountain-mist-24px">
                  {whatSolutionsAreYouLookingFor}
                </p>
                <img className="caret-down-4" src="/img/caretdown-2.svg" alt="CaretDown" />
              </div>
            </div>
            <Group642>{group6421Props.children}</Group642>
            <Group642>{group6422Props.children}</Group642>
            <Group642>{group6423Props.children}</Group642>
            <Group642 className={group6424Props.className}>{group6424Props.children}</Group642>
          </div>
          <CTA className={cTAProps.className}>{cTAProps.children}</CTA>
        </div>
      </div>
      <ContactInfo group={contactInfoProps.group} />
      <Footer
        logo={footerProps.logo}
        iconInstagram={footerProps.iconInstagram}
        youtube={footerProps.youtube}
        twitterProps={footerProps.twitterProps}
      />
    </div>
  );
}

export default ContactUsSolutionSelected2;
