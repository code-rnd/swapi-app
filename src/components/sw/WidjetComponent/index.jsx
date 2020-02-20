import React, { useEffect, useState } from "react";

import CardsComponent from "../CardsComponent";
import PaginatorBarComponent from "../PaginatorBarComponent";
import SearchMenuComponent from "../SearchMenuComponent";

import "./style.scss";

export default function WidjetComponent(props) {
  const {
    objects: { next, previous, results }
  } = props;

  const { isFetching } = props;
  const { getObjects } = props;

  const [isResults, isSetResults] = useState(null);

  useEffect(() => {
    if (!results || !results.length) {
      return;
    }

    isSetResults(results);
  }, [results]);

  const getFormDisplay = () => {
    return (
      <div className="display">
        <CardsComponent data={isResults} />
        <PaginatorBarComponent
          next={next}
          previous={previous}
          getObjects={getObjects}
        />
      </div>
    );
  };

  return (
    <div className={"widjet"}>
      <SearchMenuComponent getObjects={getObjects} />
      {isResults && getFormDisplay()}
      {isFetching && "loading..."}
    </div>
  );
}
