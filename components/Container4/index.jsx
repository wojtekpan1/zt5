import React from "react";
import Group48 from "../Group48";
import Frame106 from "../Frame106";
import "./Container4.css";

function Container4() {
  return (
    <div className="container-10">
      <div className="content-27">
        <div className="latest-publications notoserif-black-pine-green-48px">Latest publications</div>
        <p className="lorem-ipsum-dolor-si-26 notoserif-medium-shark-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </p>
        <img className="caret-circle-left-4" src="/img/caretcircleleft.svg" alt="CaretCircleLeft" />
        <img className="caret-circle-right-9" src="/img/caretcircleright-2.svg" alt="CaretCircleRight" />
        <div className="cards-24">
          <div className="car-card">
            <img className="rectangle-12751" src="/img/rectangle-12751.svg" alt="Rectangle 12751" />
            <Group48 />
            <Frame106 />
          </div>
          <div className="car-card">
            <img className="rectangle-32" src="/img/rectangle-32.png" alt="Rectangle 32" />
            <Group48 />
            <Frame106 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container4;
