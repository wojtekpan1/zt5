import React from "react";
import Background from "../Background";
import Breadcrumb from "../Breadcrumb";
import Frame107 from "../Frame107";
import Header from "../Header";
import Group582 from "../Group582";
import Group642 from "../Group642";
import CTA from "../CTA";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";
import "./ContactUsInquiryTypeDropdown.css";

function ContactUsInquiryTypeDropdown(props) {
  const {
    placeAnInquiry,
    lineContainer,
    backgroundProps,
    frame107Props,
    group582Props,
    group6421Props,
    group6422Props,
    group6423Props,
    group6424Props,
    cTAProps,
    contactInfoProps,
    footerProps,
  } = props;

  return (
    <div className="contact-us-inquiry-type-dropdown screen">
      <div className="banner-16">
        <div className="overlap-group-29">
          <Background src={backgroundProps.src} />
          <Breadcrumb />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="inquiry-4">
        <div className="place-an-inquiry-3 notoserif-bold-pine-green-40px">{placeAnInquiry}</div>
        <div className="form-4">
          <div className="frame-90-4">
            <Group582 className={group582Props.className} />
            <Group642>{group6421Props.children}</Group642>
            <Group642>{group6422Props.children}</Group642>
            <Group642>{group6423Props.children}</Group642>
            <Group642 className={group6424Props.className}>{group6424Props.children}</Group642>
            <div className="frame-184957">
              <div className="line-container" style={{ backgroundImage: `url(${lineContainer})` }}>
                <img className="line" src="/img/line-8.svg" alt="Line 8" />
                <img className="line" src="/img/line-8.svg" alt="Line 9" />
                <img className="line" src="/img/line-8.svg" alt="Line 10" />
              </div>
            </div>
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

export default ContactUsInquiryTypeDropdown;
