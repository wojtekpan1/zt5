import React from "react";
import "./Group96.css";

function Group96(props) {
  const { client1 } = props;

  return (
    <div className="group-96">
      <div className="client-1 notoserif-bold-black-24px">{client1}</div>
      <p className="lorem-ipsum-dolor-si-70 notoserif-normal-black-16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
        consectetur.
      </p>
    </div>
  );
}

export default Group96;
