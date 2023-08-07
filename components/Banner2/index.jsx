import React from "react";
import Background from "../Background";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import "./Banner2.css";

function Banner2(props) {
  const { backgroundProps, frame1072Props, header3Props } = props;

  return (
    <div className="banner-28">
      <div className="overlap-group-94">
        <Background src={backgroundProps.src} className={backgroundProps.className} />
        <div className="breadcrumb-18 notoserif-bold-parchment-16px">
          <div className="place-45">
            <span className="notoserif-bold-parchment-16px">Home</span>
          </div>
          <img className="caret-circle-right-52" src="/img/caretcircleright-46@2x.png" alt="CaretCircleRight" />
          <div className="contact-us-119">
            <span className="notoserif-bold-parchment-16px">Contact us</span>
          </div>
        </div>
        <Frame1072 spanText1={frame1072Props.spanText1} className={frame1072Props.className} />
        <Header3 logo={header3Props.logo} className={header3Props.className} />
      </div>
    </div>
  );
}

export default Banner2;
