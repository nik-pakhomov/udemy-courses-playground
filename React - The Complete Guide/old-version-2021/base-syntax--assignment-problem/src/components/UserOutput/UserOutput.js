import React from "react";

import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="user-output">
      <p>Hi {props.username}!</p>
      <p>How are you?</p>
    </div>
  );
};

export default UserOutput;
