import React from "react";
import Background from "../Background";
import Breadcrumb from "../Breadcrumb";
import Frame107 from "../Frame107";
import Header from "../Header";
import Group58 from "../Group58";
import Group64 from "../Group64";
import CTA2 from "../CTA2";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";
import "./ContactUsSolutionSelected.css";

function ContactUsSolutionSelected(props) {
  const {
    placeAnInquiry,
    catalystS4,
    loremIpsumDolorSi,
    backgroundProps,
    frame107Props,
    group58Props,
    group641Props,
    group642Props,
    group643Props,
    cTA2Props,
    contactInfoProps,
    footerProps,
  } = props;

  return (
    <div className="contact-us-solution-selected-1 screen">
      <div className="banner-3">
        <div className="overlap-group-9">
          <Background src={backgroundProps.src} />
          <Breadcrumb />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="inquiry-1">
        <div className="place-an-inquiry notoserif-bold-pine-green-40px">{placeAnInquiry}</div>
        <div className="form">
          <div className="frame-90">
            <Group58 solution={group58Props.solution} />
            <div className="group-71">
              <div className="group-59">
                <div className="catalyst-s4 notoserif-normal-shark-24px">{catalystS4}</div>
                <img className="caret-down" src="/img/caretdown.svg" alt="CaretDown" />
              </div>
            </div>
            <Group64>{group641Props.children}</Group64>
            <Group64>{group642Props.children}</Group64>
            <Group64>{group643Props.children}</Group64>
            <div className="group-69">
              <div className="overlap-group3-3">
                <p className="lorem-ipsum-dolor-si-43 notoserif-normal-shark-24px">{loremIpsumDolorSi}</p>
              </div>
            </div>
          </div>
          <CTA2 className={cTA2Props.className}>{cTA2Props.children}</CTA2>
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

export default ContactUsSolutionSelected;
