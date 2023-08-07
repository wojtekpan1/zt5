import React from "react";
import Frame21 from "../Frame21";
import "./News2.css";

function News2() {
  return (
    <div className="news-4">
      <div className="latest-insights inter-bold-black-40px">
        <span className="inter-bold-black-40px">Latest insights</span>
      </div>
      <p className="lorem-ipsum-dolor-si-113 inter-normal-black-20px">
        <span className="inter-normal-black-20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </span>
      </p>
      <Frame21 />
    </div>
  );
}

export default News2;
