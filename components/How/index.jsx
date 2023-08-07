import React from "react";
import Frame93 from "../Frame93";
import "./How.css";

function How(props) {
  const { spanText3, spanText4, frame93Props } = props;

  return (
    <div className="how">
      <div className="flex-col-46">
        <div className="how-it-works-2 inter-bold-black-40px">
          <span className="inter-bold-black-40px">How it works</span>
        </div>
        <p className="early-pathogen-detec-1 inter-normal-black-20px">
          <span className="inter-normal-black-20px">
            Early pathogen detection systems to identify pathogen outbreaks from real-time symptoms analysis.
          </span>
        </p>
        <div className="overlap-group3-10">
          <div className="group-94-1">
            <div className="ellipse-28"></div>
            <p className="collect-patient-symp-1 inter-semi-bold-black-36px">
              <span className="inter-semi-bold-black-36px">{spanText3}</span>
            </p>
          </div>
          <div className="text-8-1 roboto-medium-black-24px">
            <span className="roboto-medium-black-24px">{spanText4}</span>
          </div>
        </div>
      </div>
      <Frame93 className={frame93Props.className} />
    </div>
  );
}

export default How;
