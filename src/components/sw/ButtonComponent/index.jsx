import React from "react";

import "./style.scss";

export default function ButtonComponent(props) {
  const { value, url, handleClick, isDisabled = false } = props;

  return (
    <div className={"buttonContainer"}>
      <div
        type={"button"}
        onClick={() => {
          handleClick(url);
        }}
        disabled={isDisabled}
        className={"sw-btn"}
      >
        {value}
      </div>
    </div>
  );
}
