import React from "react";
import "./ContactInfo3.css";

function ContactInfo3(props) {
  const { className } = props;

  return (
    <div className={`contact-info-7 ${className || ""}`}>
      <div className="flex-col-118">
        <div className="contact-information-11 inter-bold-black-36px">
          <span className="span-398 inter-bold-black-36px">Contact information</span>
        </div>
        <div className="group-30 inter-normal-black-16px">
          <p className="lorem-ipsum-dolor-si-273">
            <span className="span-398 inter-normal-black-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a.
            </span>
          </p>
          <p className="lorem-ipsum-dolor-si-268">
            <span className="span-398 inter-normal-black-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a.
            </span>
          </p>
          <p className="lorem-ipsum-dolor-si-268">
            <span className="span-398 inter-normal-black-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a.
            </span>
          </p>
        </div>
      </div>
      <div className="overlap-group-125">
        <div className="map-1 inter-normal-black-16px">
          <span className="span-398 inter-normal-black-16px">Map</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo3;
