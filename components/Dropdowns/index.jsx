import React from "react";
import Level1 from "../Level1";
import Button from "../Button";
import "./Dropdowns.css";

function Dropdowns(props) {
  const { cantFindWhatYouNeed, level1Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-1 screen">
        <Level1
          category1Props={level1Props.category1Props}
          category2Props={level1Props.category2Props}
          category3Props={level1Props.category3Props}
          category4Props={level1Props.category4Props}
        />
        <div className="cant-find">
          <p className="cant-find-what-you-need notoserif-semi-bold-shark-20px">{cantFindWhatYouNeed}</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Dropdowns;
