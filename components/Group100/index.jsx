import React from "react";
import "./Group100.css";

function Group100(props) {
  const { className } = props;

  return (
    <div className={`group-100 ${className || ""}`}>
      <div className="overlap-group3-5">
        <p className="want-a-tailored-solution-for-you-5 inter-bold-black-60px">
          <span className="span-76 inter-bold-black-60px">Want a tailored solution for you?</span>
        </p>
        <p className="lorem-ipsum-dolor-si-107 inter-normal-black-24px">
          <span className="span-76 inter-normal-black-24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </span>
        </p>
        <div className="contact-us-46 inter-medium-black-18px">
          <span className="span-76 inter-medium-black-18px">Contact us</span>
        </div>
      </div>
    </div>
  );
}

export default Group100;
