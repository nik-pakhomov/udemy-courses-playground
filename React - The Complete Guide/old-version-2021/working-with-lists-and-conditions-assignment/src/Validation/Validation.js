import React from "react";

const validation = props => {
  const { textLength } = props;

  let validationText = "Text too short";
  if (textLength > 5) {
    validationText = "Text long enough";
  }
  return <p>{validationText}</p>;
};

export default validation;
