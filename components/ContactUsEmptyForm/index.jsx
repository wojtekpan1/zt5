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
import "./ContactUsEmptyForm.css";

function ContactUsEmptyForm(props) {
  const {
    placeAnInquiry,
    backgroundProps,
    frame107Props,
    group6421Props,
    group6422Props,
    group6423Props,
    group6424Props,
    cTAProps,
    contactInfoProps,
    footerProps,
  } = props;

  return (
    <div className="contact-us-empty-form screen">
      <div className="banner-9">
        <div className="overlap-group-20">
          <Background src={backgroundProps.src} />
          <Breadcrumb />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="inquiry-3">
        <div className="place-an-inquiry-2 notoserif-bold-pine-green-40px">{placeAnInquiry}</div>
        <div className="form-2">
          <div className="frame-90-2">
            <Group582 />
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

export default ContactUsEmptyForm;
