import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

import "./style.scss";

export default function SearchMenuComponent(props) {
  const { getObjects } = props;

  const [isSearchCategory, setIsSearchCategory] = useState("");

  return (
    <div className={"searchMenu"}>
      <select
        value={isSearchCategory}
        onChange={e => setIsSearchCategory(e.currentTarget.value)}
      >
        <option value="" disabled>
          category...
        </option>
        <option value={"people"}>people</option>
        <option value={"planets"}>planets</option>
        <option value={"starships"}>starships</option>
      </select>
      <ButtonComponent
        value={"load"}
        url={isSearchCategory}
        handleClick={getObjects}
        isDisabled={!isSearchCategory || isSearchCategory === " "}
      />
    </div>
  );
}
