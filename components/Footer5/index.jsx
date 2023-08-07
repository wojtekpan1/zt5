import React from "react";
import Frame28 from "../Frame28";
import "./Footer5.css";

function Footer5(props) {
  const { className } = props;

  return (
    <footer className={`footer-57 ${className || ""}`}>
      <div className="flex-col-98">
        <div className="logo-100 inter-bold-black-36px">
          <span className="span-376 inter-bold-black-36px">LOGO</span>
        </div>
        <div className="group-26">
          <p className="enter-your-email-add-3 inter-semi-bold-black-16px">
            <span className="span-376 inter-semi-bold-black-16px">
              Enter your email address to be reached out by one of our specialists.
            </span>
          </p>
          <div className="overlap-group-104">
            <div className="your-email-address-3 inter-extra-light-black-16px">
              <span className="span-376 inter-extra-light-black-16px">Your email address</span>
            </div>
            <div className="place-47 inter-medium-black-18px">
              <span className="span-376 inter-medium-black-18px">Send</span>
            </div>
          </div>
        </div>
        <div className="group-27-21">
          <div className="follow-us-on-52 inter-semi-bold-black-16px">
            <span className="span-376 inter-semi-bold-black-16px">Follow us on</span>
          </div>
          <div className="frame-26-21">
            <div className="ellipse-31"></div>
            <div className="ellipse-31"></div>
            <div className="ellipse-31"></div>
          </div>
        </div>
      </div>
      <Frame28 />
    </footer>
  );
}

export default Footer5;
