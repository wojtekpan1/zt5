import React from "react";
import CTA from "../CTA";
import "./Container6.css";

function Container6(props) {
  const { cTAProps } = props;

  return (
    <div className="container-16">
      <div className="content-42">
        <div className="frame-184966">
          <p className="worldclass-partners notoserif-black-pine-green-48px">
            Worldclass partners in healthcare innovations
          </p>
          <p className="lorem-ipsum-dolor-si-44 notoserif-medium-shark-24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </p>
        </div>
        <div className="cards-27">
          <div className="card-44">
            <img className="image-20" src="/img/image-20@2x.png" alt="image 20" />
          </div>
          <div className="card-44">
            <img
              className="screenshot-2023-01-09-at-846-2"
              src="/img/screenshot-2023-01-09-at-8-46-2@2x.png"
              alt="Screenshot 2023-01-09 at 8.46 2"
            />
          </div>
          <div className="card-44">
            <img className="image-14-3" src="/img/image-14-1@2x.png" alt="image 14" />
          </div>
          <div className="card-44">
            <img className="image-19" src="/img/image-19@2x.png" alt="image 19" />
          </div>
          <div className="card-44">
            <img className="image-22" src="/img/image-22@2x.png" alt="image 22" />
          </div>
        </div>
        <CTA className={cTAProps.className}>{cTAProps.children}</CTA>
      </div>
    </div>
  );
}

export default Container6;
