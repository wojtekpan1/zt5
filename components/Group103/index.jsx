import React from "react";
import "./Group103.css";

function Group103(props) {
  const { className } = props;

  return (
    <div className={`group-103 ${className || ""}`}>
      <div className="contact-information-5 inter-bold-black-30px">
        <span className="span-215 inter-bold-black-30px">Contact information</span>
      </div>
      <div className="frame-91-5">
        <div className="email-us-20">
          <div className="email-us-21 inter-bold-black-20px">
            <span className="span-215 inter-bold-black-20px">Email us</span>
          </div>
          <div className="xxxxxxmailcom-5 inter-normal-black-16px">
            <span className="span-215 inter-normal-black-16px">xxxxxx@mail.com</span>
          </div>
        </div>
        <div className="visit-us-5">
          <div className="visit-us-6 inter-bold-black-20px">
            <span className="span-215 inter-bold-black-20px">Visit us</span>
          </div>
          <p className="lorem-ipsum-dolor-sit-amet inter-normal-black-16px">
            <span className="span-215 inter-normal-black-16px">Lorem ipsum dolor sit amet,</span>
          </p>
        </div>
        <div className="call-us-5">
          <div className="call-us-6 inter-bold-black-20px">
            <span className="span-215 inter-bold-black-20px">Call us</span>
          </div>
          <div className="text-10-1 inter-normal-black-16px">
            <span className="span-215 inter-normal-black-16px">000-0000-00000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group103;
