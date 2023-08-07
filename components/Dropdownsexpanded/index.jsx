import React from "react";
import { Link } from "react-router-dom";
import Level1 from "../Level1";
import Group8 from "../Group8";
import CantFind from "../CantFind";
import "./Dropdownsexpanded.css";

function Dropdownsexpanded(props) {
  const { catalystS4, loremIpsumDolorSi, level1Props, group8Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-u40expandedu41 screen">
        <div className="flex-row-10">
          <Level1
            className={level1Props.className}
            category1Props={level1Props.category1Props}
            category2Props={level1Props.category2Props}
            category3Props={level1Props.category3Props}
            category4Props={level1Props.category4Props}
          />
          <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
          <div className="group-10-1">
            <Link to="/catalyst-s4">
              <div className="group-7-1">
                <div className="catalyst-s4-3 notoserif-semi-bold-shark-18px">{catalystS4}</div>
                <p className="lorem-ipsum-dolor-si-58 notoserif-normal-shark-14px">{loremIpsumDolorSi}</p>
              </div>
            </Link>
            <Group8 catalystResearch={group8Props.catalystResearch} />
          </div>
        </div>
        <CantFind />
      </div>
    </div>
  );
}

export default Dropdownsexpanded;
