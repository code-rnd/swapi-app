import React, { useState } from "react";

export default function SwComponent(props) {
  const { getObject, getObjects } = props;
  // const { hero } = props;
  const { isFetching } = props;

  const [isSearchId, setIsSearchId] = useState(1);
  const [isSearchCategory, setIsSearchCategory] = useState("");

  const getFormSpin = () => {
    return <div className={"spin"}>загружаю...</div>;
  };

  const getFormDisplay = () => {
    return (
      <div className={"sw__display"}>
        {/* <div>герой: {hero ? hero : "не найден"}</div> */}
      </div>
    );
  };

  return (
    <div className={"sw"}>
      {isFetching ? getFormSpin() : getFormDisplay()}
      <div className={"sw__configMenu"}>
        <div className={"configInput"}>
          <input
            type={"text"}
            placeholder={"category"}
            value={isSearchCategory}
            onChange={e => {
              setIsSearchCategory(e.currentTarget.value);
            }}
          />
          <input
            type={"text"}
            value={isSearchId}
            onChange={e => {
              setIsSearchId(+e.currentTarget.value);
            }}
          />
        </div>
        <div className={"configBtns"}>
          <input
            type={"button"}
            value={"getObject"}
            onClick={() => {
              getObject(isSearchCategory, isSearchId);
            }}
          />
          <input
            type={"button"}
            value={"getObjects"}
            onClick={() => {
              getObjects(isSearchCategory);
            }}
          />
        </div>
      </div>
    </div>
  );
}
