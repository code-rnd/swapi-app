import React from "react";

import "./style.scss";

export default function ButtonComponent(props) {
  const { value, url, handleClick, isDisabled } = props;

  return (
    <div className={"buttonContainer"}>
      <input
        type={"button"}
        value={value}
        onClick={() => {
          handleClick(url);
        }}
        disabled={isDisabled}
        className={"sw-btn"}
      />
    </div>
  );
}
