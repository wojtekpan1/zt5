import React from "react";
import Group7 from "../Group7";
import "./Group10.css";

function Group10(props) {
  const { group71Props, group72Props } = props;

  return (
    <div className="group-10-5">
      <Group7 />
      <Group7 className={group71Props.className} />
      <Group7 className={group72Props.className} />
    </div>
  );
}

export default Group10;
