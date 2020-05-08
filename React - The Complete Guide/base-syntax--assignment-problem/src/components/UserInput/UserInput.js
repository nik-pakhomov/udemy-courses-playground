import React from "react";

const UserInput = props => {
  const style = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "14px"
  };

  return (
    <input
      type="text"
      style={style}
      onChange={props.onUsernameChange}
      value={props.username}
    />
  );
};

export default UserInput;
