import React from "react";
import "./Frame17.css";

function Frame17(props) {
  const { className } = props;

  return (
    <div className={`frame-17-1 ${className || ""}`}>
      <div className="frame-16-1">
        <div className="population-health-12 inter-normal-black-20px">
          <span className="span-61 inter-normal-black-20px">Population health</span>
        </div>
        <div className="hospitals-clinics-3 inter-bold-black-20px">
          <span className="span-61 inter-bold-black-20px">Hospitals &amp; clinics</span>
        </div>
        <div className="physician-support-4 inter-normal-black-20px">
          <span className="span-61 inter-normal-black-20px">Physician support</span>
        </div>
        <div className="patient-engagement-4 inter-normal-black-20px">
          <span className="span-61 inter-normal-black-20px">Patient engagement</span>
        </div>
      </div>
      <div className="overlap-group-32">
        <img className="line-3" src="/img/line-3-9@2x.png" alt="Line 3" />
      </div>
    </div>
  );
}

export default Frame17;
