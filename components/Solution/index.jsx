import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import GhostBreadcrumbItem4 from "../GhostBreadcrumbItem4";
import Group43 from "../Group43";
import Group46 from "../Group46";
import Group432 from "../Group432";
import Group100 from "../Group100";
import Testimonial from "../Testimonial";
import Footer2 from "../Footer2";
import "./Solution.css";

function Solution(props) {
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
    spanText14,
    line6,
    line7,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    ghostBreadcrumbItem4Props,
    group461Props,
    group462Props,
    group4321Props,
    group4322Props,
    group100Props,
    testimonialProps,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="solution-51 screen">
        <div className="flex-row-35">
          <div className="logo-51 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-57 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="frame-104-3">
          <GhostBreadcrumbItem />
          <div className="icon-14 valign-text-middle fontawesome5free-black-mischka-8px">
            <span>
              <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
            </span>
          </div>
          <GhostBreadcrumbItem4>{ghostBreadcrumbItem4Props.children}</GhostBreadcrumbItem4>
        </div>
        <div className="overlap-group4-8">
          <h1 className="title-37 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText4}</span>
          </h1>
          <p className="lorem-ipsum-dolor-si-131 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText5}</span>
          </p>
        </div>
        <div className="overlap-group-container-3">
          <div className="frame-container">
            <div className="frame-83">
              <div className="rectangle-25"></div>
              <div className="group-82">
                <div className="population-health-21 inter-bold-black-56px">
                  <span className="inter-bold-black-56px">{spanText6}</span>
                </div>
                <div className="group-47">
                  <div className="group-45">
                    <div className="catalyst-s4-10 inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText7}</span>
                    </div>
                    <Group43 />
                  </div>
                  <div className="group-46">
                    <div className="catalyst-research-6 inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText8}</span>
                    </div>
                    <Group43 />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-85">
              <div className="rectangle-25-1"></div>
              <div className="physician-support-8 inter-bold-black-56px">
                <span className="inter-bold-black-56px">{spanText9}</span>
              </div>
              <div className="group-84">
                <div className="group-45-1">
                  <div className="catalyst-encounter-2 inter-normal-black-25px">
                    <span className="inter-normal-black-25px">{spanText10}</span>
                  </div>
                  <Group43 />
                </div>
                <div className="group-46-1">
                  <div className="aircoder-2 inter-normal-black-25px">
                    <span className="inter-normal-black-25px">{spanText11}</span>
                  </div>
                  <Group43 />
                </div>
                <div className="group-46-2">
                  <div className="curematch-2 inter-normal-black-25px">
                    <span className="inter-normal-black-25px">{spanText12}</span>
                  </div>
                  <Group43 />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-container-1">
            <div className="frame-84">
              <div className="rectangle-25"></div>
              <div className="group-83">
                <div className="hospitals-and-clinics-1 inter-bold-black-56px">
                  <span className="inter-bold-black-56px">{spanText13}</span>
                </div>
                <div className="group-48-6">
                  <div className="group-45-2">
                    <div className="catalyst-value-solutions-4 inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText14}</span>
                    </div>
                    <div className="group-43">
                      <img className="line-6" src={line6} alt="Line 6" />
                      <img className="line-7" src={line7} alt="Line 7" />
                    </div>
                  </div>
                  <Group46 spanText={group461Props.spanText} />
                  <Group46 spanText={group462Props.spanText} className={group462Props.className} />
                </div>
              </div>
            </div>
            <div className="frame-86">
              <div className="rectangle-25"></div>
              <div className="group-83-1">
                <div className="patient-engagement-9 inter-bold-black-56px">
                  <span className="inter-bold-black-56px">{spanText15}</span>
                </div>
                <div className="group-48-7">
                  <div className="group-45-3">
                    <div className="catalyst-engage-2 inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText16}</span>
                    </div>
                    <Group432 line6={group4321Props.line6} line7={group4321Props.line7} />
                  </div>
                  <div className="group-46-3">
                    <div className="catalyst-triage-18 inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText17}</span>
                    </div>
                    <Group43 />
                  </div>
                  <div className="group-47-1">
                    <div className="pt-genie inter-normal-black-25px">
                      <span className="inter-normal-black-25px">{spanText18}</span>
                    </div>
                    <Group432
                      line6={group4322Props.line6}
                      line7={group4322Props.line7}
                      className={group4322Props.className}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Group100 className={group100Props.className} />
        <Testimonial className={testimonialProps.className} />
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default Solution;
