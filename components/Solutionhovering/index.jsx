import React from "react";
import "./Solutionhovering.css";

function Solutionhovering(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="solution-hovering screen">
        <div className="group-68">
          <h1 className="title-74 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </h1>
          <p className="lorem-ipsum-dolor-si-264 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText2}</span>
          </p>
        </div>
        <div className="frame-container-8">
          <div className="frame-16-6">
            <div className="early-pathogen-recognition-3 inter-bold-black-24px">
              <span className="inter-bold-black-24px">{spanText3}</span>
            </div>
            <div className="frame-16-item-1 inter-normal-black-18px">
              <span className="inter-normal-black-18px">{spanText4}</span>
            </div>
            <div className="frame-16-item-1 inter-normal-black-18px">
              <span className="inter-normal-black-18px">{spanText5}</span>
            </div>
            <div className="frame-16-item-1 inter-normal-black-18px">
              <span className="inter-normal-black-18px">{spanText6}</span>
            </div>
            <p className="frame-16-item-1 inter-normal-black-18px">
              <span className="inter-normal-black-18px">{spanText7}</span>
            </p>
          </div>
          <div className="frame-58">
            <div className="group-71-3">
              <div className="overlap-group-124">
                <div className="solution-1-74 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText8}</span>
                </div>
              </div>
              <div className="flex-col-117">
                <div className="group-67 inter-normal-black-16px">
                  <p className="lorem-ipsum-dolor-si-265">
                    <span className="inter-normal-black-16px">{spanText9}</span>
                  </p>
                  <p className="lorem-ipsum-dolor-si-266">
                    <span className="inter-normal-black-16px">{spanText10}</span>
                  </p>
                </div>
                <div className="request-a-demo-13 inter-medium-black-14px">
                  <span className="inter-medium-black-14px">{spanText11}</span>
                </div>
              </div>
            </div>
            <div className="overlap-group1-43">
              <div className="solution-2-33 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText12}</span>
              </div>
            </div>
            <div className="overlap-group2-37">
              <div className="solution-2-34 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText13}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutionhovering;
