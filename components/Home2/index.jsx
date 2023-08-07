import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Frame34 from "../Frame34";
import Highlights2 from "../Highlights2";
import ValueBasedHealthcare3 from "../ValueBasedHealthcare3";
import Mission2 from "../Mission2";
import Partners3 from "../Partners3";
import Clients from "../Clients";
import News4 from "../News4";
import Footer5 from "../Footer5";
import "./Home2.css";

function Home2(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
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
    spanText14,
    spanText15,
    frame34Props,
    highlights2Props,
    partners3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="flex-row-66">
          <div className="logo-119 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-57">
            <Frame32 />
            <div className="frame-4-41">
              <div className="partners-clients-2 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-142" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-123 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <h1 className="title-73 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText4}</span>
        </h1>
        <p className="rebuild-the-healthca-17 inter-medium-black-24px">
          <span className="inter-medium-black-24px">{spanText5}</span>
        </p>
        <Frame34 className={frame34Props.className} />
        <Highlights2
          frame82Props={highlights2Props.frame82Props}
          frame92Props={highlights2Props.frame92Props}
          frame112Props={highlights2Props.frame112Props}
        />
        <ValueBasedHealthcare3 />
        <Mission2 />
        <div className="solutions-92">
          <div className="our-solutions-11 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText6}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-263 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText7}</span>
          </p>
          <div className="frame-container-7">
            <div className="frame-16-5">
              <div className="early-pathogen-recognition-2 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText8}</span>
              </div>
              <div className="frame-16-item inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText9}</span>
              </div>
              <div className="frame-16-item inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText10}</span>
              </div>
              <div className="frame-16-item inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText11}</span>
              </div>
              <p className="frame-16-item inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText12}</span>
              </p>
            </div>
            <div className="frame-57">
              <div className="overlap-group-123">
                <div className="solution-57 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText13}</span>
                </div>
              </div>
              <div className="overlap-group1-42">
                <div className="solution-57 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText14}</span>
                </div>
              </div>
              <div className="overlap-group2-36">
                <div className="solution-57 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText15}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Partners3 className={partners3Props.className} />
        <Clients />
        <News4 />
        <Footer5 />
      </div>
    </div>
  );
}

export default Home2;
