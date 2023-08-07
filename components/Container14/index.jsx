import React from "react";
import Cards3 from "../Cards3";
import CTA4 from "../CTA4";
import "./Container14.css";

function Container14(props) {
  const { cards3Props, cTA4Props } = props;

  return (
    <div className="container-43">
      <div className="content-61">
        <img className="caret-circle-left-23" src="/img/caretcircleleft-1@2x.png" alt="CaretCircleLeft" />
        <div className="flex-col-78">
          <div className="our-partners-10 notoserif-black-pine-green-48px">
            <span className="notoserif-black-pine-green-48px">Our partners</span>
          </div>
          <p className="lorem-ipsum-dolor-si-204 notoserif-medium-shark-24px">
            <span className="notoserif-medium-shark-24px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
            </span>
          </p>
          <Cards3
            image13={cards3Props.image13}
            className={cards3Props.className}
            card4Props={cards3Props.card4Props}
            card5Props={cards3Props.card5Props}
            card6Props={cards3Props.card6Props}
            card7Props={cards3Props.card7Props}
            card8Props={cards3Props.card8Props}
          />
          <CTA4 className={cTA4Props.className}>{cTA4Props.children}</CTA4>
        </div>
      </div>
      <img className="caret-circle-right-37" src="/img/caretcircleright-1@2x.png" alt="CaretCircleRight" />
    </div>
  );
}

export default Container14;
