import React from "react";
import "./ContactInfo.css";

function ContactInfo(props) {
  const { group } = props;

  return (
    <div className="contact-info">
      <div className="contact-information notoserif-bold-pine-green-40px">Contact information</div>
      <div className="frame-91">
        <div className="overlap-group-1">
          <img className="group" src={group} alt="Group" />
          <div className="frame-97">
            <div className="email-us">
              <div className="xxxxxxmailcom notoserif-medium-white-20px">xxxxxx@mail.com</div>
              <div className="email-us-1 notoserif-bold-white-28px">Email us</div>
            </div>
            <div className="email-us-2">
              <p className="address notoserif-medium-white-20px">00 Street ABC State ABC City</p>
              <div className="visit-us notoserif-bold-white-28px">Visit us</div>
            </div>
            <div className="email-us-3">
              <div className="text-1 notoserif-medium-white-20px">000-000-000</div>
              <div className="call-us notoserif-bold-white-28px">Call us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
