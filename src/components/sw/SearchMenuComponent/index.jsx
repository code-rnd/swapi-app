import React, { useState } from "react";

import "./style.scss";

export default function SearchMenuComponent(props) {
  const { getObjects } = props;

  const [isSearchCategory, setIsSearchCategory] = useState("");

  return (
    <div className={"searchMenu"}>
      <div className={"searchMenu__input"}>
        <input
          type={"text"}
          placeholder={"people, planets, starships..."}
          value={isSearchCategory}
          onChange={e => {
            setIsSearchCategory(e.currentTarget.value);
          }}
        />
      </div>
      <div className={"searchMenu__input"}>
        <input
          type={"button"}
          value={"load"}
          onClick={() => {
            getObjects(isSearchCategory);
          }}
          disabled={!isSearchCategory}
        />
      </div>
    </div>
  );
}
