import React, { useEffect, useState } from "react";

import CardsComponent from "../CardsComponent";
import PaginatorBarComponent from "../PaginatorBarComponent";

import "./style.scss";

export default function WidjetComponent(props) {
  const { data } = props;
  const { objects } = data;
  const { people } = objects;
  const { results, next, previous } = people;

  const { isFetching } = props;
  const { getObjects } = props;

  const [isResults, isSetResults] = useState(null);

  useEffect(() => {
    getObjects("people");
  }, []);

  useEffect(() => {
    isSetResults(results);
  }, [results]);

  const getFormDisplay = () => {
    return (
      <div className="display">
        swApi (category: People)
        <CardsComponent data={results} />
        <PaginatorBarComponent
          isFetching={isFetching}
          next={next}
          previous={previous}
          getObjects={getObjects}
        />
      </div>
    );
  };

  return (
    <div className={"widjet"}>
      {isResults ? getFormDisplay() : "loading..."}
    </div>
  );
}
