import React from "react";
import Group483 from "../Group483";
import CarCard from "../CarCard";
import "./Container12.css";

function Container12() {
  return (
    <div className="container-37">
      <img className="caret-circle-left-19" src="/img/caretcircleleft-1@2x.png" alt="CaretCircleLeft" />
      <div className="flex-col-66">
        <div className="latest-publications-4 notoserif-black-pine-green-48px">
          <span className="notoserif-black-pine-green-48px">Latest publications</span>
        </div>
        <p className="lorem-ipsum-dolor-si-186 notoserif-medium-shark-24px">
          <span className="notoserif-medium-shark-24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </span>
        </p>
        <div className="cards-45">
          <div className="car-card-3">
            <img className="rectangle-12751-9" src="/img/rectangle-12751-1@2x.png" alt="Rectangle 12751" />
            <Group483 />
            <p className="lorem-ipsum-dolor-s-3 notoserif-normal-shark-16px">
              <span className="notoserif-normal-shark-16px">
                &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur&#34;
              </span>
            </p>
          </div>
          <CarCard />
        </div>
      </div>
      <img className="caret-circle-right-33" src="/img/caretcircleright-1@2x.png" alt="CaretCircleRight" />
    </div>
  );
}

export default Container12;
