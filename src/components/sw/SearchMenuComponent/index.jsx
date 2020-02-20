import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

import "./style.scss";

export default function SearchMenuComponent(props) {
  const { title = "swApi" } = props;

  const { getObjects, setCurrentCategory } = props;

  const [isSearchCategory, setIsSearchCategory] = useState("");

  const handleSelect = category => {
    setIsSearchCategory(category);
    setCurrentCategory(category);
  };

  return (
    <div className={"searchMenu"}>
      <select
        value={isSearchCategory}
        onChange={e => handleSelect(e.currentTarget.value)}
      >
        <option value="" disabled>
          category...
        </option>
        <option value={"people"}>people</option>
        <option value={"planets"}>planets</option>
        <option value={"starships"}>starships</option>
      </select>
      <div className={"title"}>{title}</div>
      <ButtonComponent
        value={"load"}
        url={isSearchCategory}
        handleClick={getObjects}
        isDisabled={!isSearchCategory || isSearchCategory === " "}
      />
    </div>
  );
}
