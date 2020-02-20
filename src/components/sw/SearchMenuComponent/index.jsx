import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

import "./style.scss";

export default function SearchMenuComponent(props) {
  const { getObjects } = props;

  const [isSearchCategory, setIsSearchCategory] = useState("");

  return (
    <div className={"searchMenu"}>
      <input
        type={"text"}
        placeholder={"people, planets, starships..."}
        value={isSearchCategory}
        onChange={e => {
          setIsSearchCategory(e.currentTarget.value);
        }}
      />
      <ButtonComponent
        value={"load"}
        url={isSearchCategory}
        handleClick={getObjects}
        isDisabled={!isSearchCategory || isSearchCategory === " "}
      />
    </div>
  );
}
