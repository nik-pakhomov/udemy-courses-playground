import React from "react";
import "./Char.css";

const char = props => {
  const { value, onClick } = props;
  return (
    <div className="char" onClick={onClick}>
      {value}
    </div>
  );
};

export default char;
