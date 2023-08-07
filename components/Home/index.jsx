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
import "./Home.css";

function Home(props) {
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
    overlapGroup4,
    line3,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    frame34Props,
    highlights2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-2 screen">
        <div className="flex-row-65">
          <div className="logo-99 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-56">
            <Frame32 />
            <div className="frame-4-40">
              <div className="partners-clients-1 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-141" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-122 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <h1 className="title-72 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText4}</span>
        </h1>
        <p className="rebuild-the-healthca-16 inter-medium-black-24px">
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
        <div className="solutions-91">
          <div className="our-solutions-10 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText6}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-250 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText7}</span>
          </p>
          <div className="frame-17-4">
            <div className="frame-16-4">
              <div className="early-pathogen-recognition-1 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText8}</span>
              </div>
              <div className="patient-engagement-15 inter-bold-black-20px">
                <span className="inter-bold-black-20px">{spanText9}</span>
              </div>
              <div className="value-based-healthcare-management-1 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText10}</span>
              </div>
              <p className="tele-diagnostics-ai-decision-support-1 inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText11}</span>
              </p>
            </div>
            <div className="overlap-group4-20" style={{ backgroundImage: `url(${overlapGroup4})` }}>
              <img className="line-3-6" src={line3} alt="Line 3" />
            </div>
          </div>
          <div className="overlap-group5-8">
            <div className="group-18-2">
              <div className="overlap-group2-31">
                <p className="lorem-ipsum-dolor-si-251 inter-normal-black-16px">
                  <span className="inter-normal-black-16px">{spanText12}</span>
                </p>
                <div className="overlap-group-99">
                  <div className="solution-56 inter-normal-black-20px">
                    <span className="inter-normal-black-20px">{spanText13}</span>
                  </div>
                </div>
                <div className="group-14-1">
                  <div className="overlap-group1-37">
                    <div className="solution-56 inter-normal-black-20px">
                      <span className="inter-normal-black-20px">{spanText14}</span>
                    </div>
                  </div>
                  <p className="lorem-ipsum-dolor-si-252 inter-normal-black-16px">
                    <span className="inter-normal-black-16px">{spanText15}</span>
                  </p>
                </div>
              </div>
              <div className="overlap-group3-28">
                <div className="solution-56 inter-normal-black-20px">
                  <span className="inter-normal-black-20px">{spanText16}</span>
                </div>
              </div>
            </div>
            <div className="request-a-demo-12 inter-medium-black-14px">
              <span className="inter-medium-black-14px">{spanText17}</span>
            </div>
          </div>
        </div>
        <Partners3 />
        <Clients />
        <News4 />
        <Footer5 />
      </div>
    </div>
  );
}

export default Home;
