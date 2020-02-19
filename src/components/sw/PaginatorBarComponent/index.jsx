import React from "react";
import { getElArr } from "../../../utils";

import "./style.scss";

export default function PaginatorBarComponent(props) {
  const { next, previous } = props;
  const { isFetching } = props;
  const { getObjects } = props;

  const getButtonNext = () => {
    return (
      <div
        className={"paginatorBar__next paginatorBar__btn"}
        onClick={() => {
          getObjects(getElArr(next, "/api/"));
        }}
        disabled={!next || isFetching}
      >
        next
      </div>
    );
  };

  const getButtonPrevious = () => {
    return (
      <div
        className={"paginatorBar__previous paginatorBar__btn"}
        onClick={() => {
          getObjects(getElArr(previous, "/api/"));
        }}
        disabled={!previous || isFetching}
      >
        previous
      </div>
    );
  };

  const getLoader = () => {
    return <div className={"loader"}>loading...</div>;
  };

  return (
    <div className={"paginatorBar margin-top20px"}>
      {getButtonPrevious()}
      {isFetching ? getLoader() : ""}
      {getButtonNext()}
    </div>
  );
}
