import React from "react";
import Cards2 from "../Cards2";
import CTA4 from "../CTA4";
import "./Container10.css";

function Container10(props) {
  const { cards2Props, cTA4Props } = props;

  return (
    <div className="container-31">
      <div className="content-51">
        <img className="caret-circle-left-13" src="/img/caretcircleleft-1@2x.png" alt="CaretCircleLeft" />
        <div className="flex-col-56">
          <div className="our-partners-8 notoserif-black-pine-green-48px">
            <span className="notoserif-black-pine-green-48px">Our partners</span>
          </div>
          <p className="lorem-ipsum-dolor-si-180 notoserif-medium-shark-24px">
            <span className="notoserif-medium-shark-24px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
              consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
            </span>
          </p>
          <Cards2
            screenshot20230109At8461={cards2Props.screenshot20230109At8461}
            className={cards2Props.className}
            card4Props={cards2Props.card4Props}
            card5Props={cards2Props.card5Props}
            card6Props={cards2Props.card6Props}
            card7Props={cards2Props.card7Props}
            card8Props={cards2Props.card8Props}
          />
          <CTA4 className={cTA4Props.className}>{cTA4Props.children}</CTA4>
        </div>
      </div>
      <img className="caret-circle-right-27" src="/img/caretcircleright-1@2x.png" alt="CaretCircleRight" />
    </div>
  );
}

export default Container10;
