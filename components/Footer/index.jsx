import React from "react";
import Twitter from "../Twitter";
import "./Footer.css";

function Footer(props) {
  const { logo, iconInstagram, youtube, className, twitterProps } = props;

  return (
    <footer className={`footer ${className || ""}`}>
      <div className="content">
        <div className="cards">
          <div className="card">
            <img className="logo-1" src={logo} alt="Logo" />
            <div className="social">
              <div className="follow-us-on notoserif-bold-shark-18px">Follow us on</div>
              <div className="frame-105">
                <div className="frame-105-item">
                  <img className="icon-facebook" src="/img/facebook.svg" alt="icon-facebook" />
                </div>
                <div className="instagram">
                  <img className="icon-instagram" src={iconInstagram} alt="icon-instagram" />
                </div>
                <Twitter />
                <Twitter className={twitterProps.className} />
                <div className="frame-105-item">
                  <img className="you-tube" src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>
          </div>
          <div className="links-container">
            <div className="who-we-are notoserif-bold-shark-18px">Who we are</div>
            <div className="links notoserif-normal-shark-16px">
              <div className="our-story">Our story</div>
              <div className="our-team">Our team</div>
            </div>
          </div>
          <div className="links-container">
            <div className="what-we-do notoserif-bold-shark-18px">What we do</div>
            <div className="links notoserif-normal-shark-16px">
              <div className="solution-1">Catalyst S4</div>
              <div className="solution-2">Catalyst Research</div>
              <div className="solution-3">Catalyst Value Solutions</div>
              <div className="solution-4">Catalyst Telemed</div>
              <div className="solution-5">Catalyst Engage</div>
              <div className="solution-6">Catalyst Encounter</div>
              <div className="catalyst-triage">Catalyst Triage</div>
            </div>
          </div>
          <div className="links-container">
            <div className="who-we-work-with notoserif-bold-shark-18px">Who we work with</div>
            <div className="links-17 notoserif-normal-shark-16px">
              <div className="hospital-clients">Hospital clients</div>
              <div className="government-clients">Government clients</div>
              <div className="solution-partners">Solution partners</div>
              <div className="x-partners">Technology partners</div>
              <div className="x-partners">Research partners</div>
              <div className="x-partners">Ecosystem partners</div>
            </div>
          </div>
          <div className="links-container">
            <div className="how-we-can-help notoserif-bold-shark-18px">How we can help</div>
            <div className="links notoserif-normal-shark-16px">
              <div className="terms-conditions">Terms &amp; Conditions</div>
              <div className="privacy-policy">Privacy policy</div>
              <div className="get-in-touch">Get in touch</div>
              <div className="fa-qs">FAQs</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
