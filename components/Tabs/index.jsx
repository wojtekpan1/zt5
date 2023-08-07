import React from "react";
import Tab from "../Tab";
import Tab2 from "../Tab2";
import "./Tabs.css";

function Tabs(props) {
  const { tab1Props, tab2Props } = props;

  return (
    <div className="tabs">
      <Tab>{tab1Props.children}</Tab>
      <div className="tab">
        <div className="hospitals-clinics notoserif-bold-shark-18px">Hospitals &amp; clinics</div>
      </div>
      <Tab>{tab2Props.children}</Tab>
      <Tab2 />
    </div>
  );
}

export default Tabs;
