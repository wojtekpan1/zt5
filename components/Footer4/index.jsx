import React from "react";
import Twitter2 from "../Twitter2";
import "./Footer4.css";

function Footer4(props) {
  const { logo, instagram, youtube, className, twitter21Props, twitter22Props } = props;

  return (
    <footer className={`footer-43 ${className || ""}`}>
      <div className="card-85">
        <img className="logo-84" src={logo} alt="Logo" />
        <div className="social-17">
          <div className="follow-us-on-38 notoserif-bold-shark-18px">
            <span className="span-290 notoserif-bold-shark-18px">Follow us on</span>
          </div>
          <div className="frame-105-17">
            <div className="facebook">
              <img className="facebook-1" src="/img/facebook-13@2x.png" alt="Facebook" />
            </div>
            <div className="instagram-17">
              <img className="instagram-18" src={instagram} alt="Instagram" />
            </div>
            <Twitter2 src={twitter21Props.src} />
            <Twitter2 src={twitter22Props.src} className={twitter22Props.className} />
            <div className="youtube">
              <img className="you-tube-17" src={youtube} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
      <div className="links-container-17">
        <div className="x-we notoserif-bold-shark-18px">
          <span className="span-290 notoserif-bold-shark-18px">Who we are</span>
        </div>
        <div className="links-34 notoserif-normal-shark-16px">
          <div className="our-story-62">
            <span className="span-290 notoserif-normal-shark-16px">Our story</span>
          </div>
          <div className="our-team-61">
            <span className="span-290 notoserif-normal-shark-16px">Our team</span>
          </div>
        </div>
      </div>
      <div className="links-container-18">
        <div className="x-we notoserif-bold-shark-18px">
          <span className="span-290 notoserif-bold-shark-18px">What we do</span>
        </div>
        <div className="links-35 notoserif-normal-shark-16px">
          <div className="solution-1-60">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst S4</span>
          </div>
          <div className="solution-2-19">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Research</span>
          </div>
          <div className="solution-3-59">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Value Solutions</span>
          </div>
          <div className="solution-4-57">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Telemed</span>
          </div>
          <div className="solution-5-17">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Engage</span>
          </div>
          <div className="solution-6-17">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Encounter</span>
          </div>
          <div className="catalyst-triage-19">
            <span className="span-290 notoserif-normal-shark-16px">Catalyst Triage</span>
          </div>
        </div>
      </div>
      <div className="links-container-19">
        <div className="x-we notoserif-bold-shark-18px">
          <span className="span-290 notoserif-bold-shark-18px">Who we work with</span>
        </div>
        <div className="links-36 notoserif-normal-shark-16px">
          <div className="hospital-clients-19">
            <span className="span-290 notoserif-normal-shark-16px">Hospital clients</span>
          </div>
          <div className="government-clients-19">
            <span className="span-290 notoserif-normal-shark-16px">Government clients</span>
          </div>
          <div className="solution-partners-18">
            <span className="span-290 notoserif-normal-shark-16px">Solution partners</span>
          </div>
          <div className="x-partners-19">
            <span className="span-290 notoserif-normal-shark-16px">Technology partners</span>
          </div>
          <div className="x-partners-19">
            <span className="span-290 notoserif-normal-shark-16px">Research partners</span>
          </div>
          <div className="x-partners-19">
            <span className="span-290 notoserif-normal-shark-16px">Ecosystem partners</span>
          </div>
        </div>
      </div>
      <div className="links-container-20">
        <div className="x-we notoserif-bold-shark-18px">
          <span className="span-290 notoserif-bold-shark-18px">How we can help</span>
        </div>
        <div className="links-37 notoserif-normal-shark-16px">
          <div className="terms-conditions-57">
            <span className="span-290 notoserif-normal-shark-16px">Terms &amp; Conditions</span>
          </div>
          <div className="privacy-policy-57">
            <span className="span-290 notoserif-normal-shark-16px">Privacy policy</span>
          </div>
          <div className="get-in-touch-57">
            <span className="span-290 notoserif-normal-shark-16px">Get in touch</span>
          </div>
          <div className="fa-qs-57">
            <span className="span-290 notoserif-normal-shark-16px">FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer4;
