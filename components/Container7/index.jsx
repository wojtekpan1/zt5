import React from "react";
import Cards3 from "../Cards3";
import CTA2 from "../CTA2";
import "./Container7.css";

function Container7(props) {
  const { cards3Props, cTA2Props } = props;

  return (
    <div className="container-19">
      <div className="content-47">
        <div className="our-partners-1 notoserif-black-pine-green-48px">Our partners</div>
        <p className="lorem-ipsum-dolor-si-64 notoserif-medium-shark-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </p>
        <Cards3
          image13={cards3Props.image13}
          card4Props={cards3Props.card4Props}
          card5Props={cards3Props.card5Props}
          card6Props={cards3Props.card6Props}
          card7Props={cards3Props.card7Props}
          card8Props={cards3Props.card8Props}
        />
        <img className="caret-circle-left-11" src="/img/caretcircleleft.svg" alt="CaretCircleLeft" />
        <CTA2>{cTA2Props.children}</CTA2>
      </div>
      <img className="caret-circle-right-22" src="/img/caretcircleright-2.svg" alt="CaretCircleRight" />
    </div>
  );
}

export default Container7;
