import React from "react";
import { getElArr } from "../../../utils";
import ButtonComponent from "../ButtonComponent";

import "./style.scss";

export default function PaginatorBarComponent(props) {
  const { next, previous } = props;
  const { isFetching } = props;
  const { getObjects } = props;

  const handleClick = baseUrl => {
    const split = "/api/";
    const url = getElArr(baseUrl, split);

    getObjects(url);
  };

  const getButtonNext = () => {
    return (
      <div className={"paginatorBar__next paginatorBar__btn"}>
        <ButtonComponent
          value={"next"}
          url={next}
          handleClick={handleClick}
          isDisabled={!next || isFetching}
        />
      </div>
    );
  };

  const getButtonPrevious = () => {
    return (
      <div className={"paginatorBar__previous paginatorBar__btn"}>
        <ButtonComponent
          value={"previous"}
          url={previous}
          handleClick={handleClick}
          isDisabled={!previous || isFetching}
        />
      </div>
    );
  };

  return (
    <div className={"paginatorBar margin-top20px"}>
      {getButtonPrevious()}
      {getButtonNext()}
    </div>
  );
}
