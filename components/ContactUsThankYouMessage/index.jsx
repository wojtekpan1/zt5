import React from "react";
import Background from "../Background";
import Breadcrumb from "../Breadcrumb";
import Frame107 from "../Frame107";
import Header from "../Header";
import CTA from "../CTA";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";
import "./ContactUsThankYouMessage.css";

function ContactUsThankYouMessage(props) {
  const { thankYouYourInqu, backgroundProps, frame107Props, cTAProps, contactInfoProps, footerProps } = props;

  return (
    <div className="contact-us-thank-you-message screen">
      <div className="banner">
        <div className="overlap-group">
          <Background src={backgroundProps.src} />
          <Breadcrumb />
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="inquiry">
        <p className="thank-you-your-inqu">{thankYouYourInqu}</p>
        <div className="group-111">
          <CTA>{cTAProps.children}</CTA>
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

export default ContactUsThankYouMessage;
