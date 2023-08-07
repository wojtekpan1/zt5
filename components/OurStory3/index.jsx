import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import ValueBasedHealthcare2 from "../ValueBasedHealthcare2";
import Frame44 from "../Frame44";
import Footer5 from "../Footer5";
import "./OurStory3.css";

function OurStory3(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    keyboard_Arrow_Down,
    spanText4,
    spanText5,
    arrow1,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    arrow2,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    valueBasedHealthcare2Props,
    frame44Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-story2 screen">
        <div className="flex-row-82">
          <div className="flex-col-130">
            <div className="logo-127 inter-bold-black-36px">
              <span className="inter-bold-black-36px">{spanText1}</span>
            </div>
            <h1 className="title-82 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText2}</span>
            </h1>
          </div>
          <div className="menu-65">
            <Frame32 />
            <div className="frame-4-49">
              <div className="partners-clients-10 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText3}</span>
              </div>
              <img className="keyboard_arrow_down-150" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="flex-col-131">
            <div className="contact-us-135 inter-medium-black-18px">
              <span className="inter-medium-black-18px">{spanText4}</span>
            </div>
            <div className="group-34-6">
              <div className="our-team-75 inter-normal-black-36px">
                <span className="inter-normal-black-36px">{spanText5}</span>
              </div>
              <img className="arrow-1-7" src={arrow1} alt="Arrow 1" />
            </div>
          </div>
        </div>
        <p className="lorem-ipsum-dolor-si-298 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText6}</span>
        </p>
        <ValueBasedHealthcare2 className={valueBasedHealthcare2Props.className} />
        <div className="mission-6">
          <div className="ellipse-container-37">
            <div className="ellipse-4-14"></div>
            <div className="ellipse-5-14"></div>
          </div>
          <div className="flex-col-132">
            <div className="our-vision-mission-2 inter-bold-black-36px">
              <span className="inter-bold-black-36px">{spanText7}</span>
            </div>
            <div className="group-11-15 inter-normal-black-16px">
              <p className="lorem-ipsum-dolor-si-299">
                <span className="inter-normal-black-16px">{spanText8}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-296">
                <span className="inter-normal-black-16px">{spanText9}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-296">
                <span className="inter-normal-black-16px">{spanText10}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-45-2">
          <div className="our-journey-1 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText11}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-300 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText12}</span>
          </p>
          <div className="group-40-2 inter-normal-black-16px">
            <div className="lorem-ipsum-dolor-si-container-4">
              <p className="lorem-ipsum-dolor-si-297">
                <span className="inter-normal-black-16px">{spanText13}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-301">
                <span className="inter-normal-black-16px">{spanText14}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-302">
                <span className="inter-normal-black-16px">{spanText15}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-303">
                <span className="inter-normal-black-16px">{spanText16}</span>
              </p>
            </div>
            <div className="overlap-group-137">
              <img className="arrow-2-2" src={arrow2} alt="Arrow 2" />
              <Frame44 className={frame44Props.className} />
            </div>
            <div className="lorem-ipsum-dolor-si-container-5">
              <p className="lorem-ipsum-dolor-si-297">
                <span className="inter-normal-black-16px">{spanText17}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-297">
                <span className="inter-normal-black-16px">{spanText18}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-297">
                <span className="inter-normal-black-16px">{spanText19}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-46-2">
          <div className="our-present inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText20}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-304 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText21}</span>
          </p>
          <div className="overlap-group-138">
            <div className="map-6 inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText22}</span>
            </div>
          </div>
        </div>
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default OurStory3;
