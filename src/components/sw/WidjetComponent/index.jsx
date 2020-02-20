import React, { useEffect, useState } from "react";

import CardsComponent from "../CardsComponent";
import PaginatorBarComponent from "../PaginatorBarComponent";
import SearchMenuComponent from "../SearchMenuComponent";
import LoadingComponent from "../LoadingComponent";

import "./style.scss";

export default function WidjetComponent(props) {
  const {
    objects: { next, previous, results }
  } = props;

  const { isFetching } = props;
  const { getObjects, setCurrentCategory } = props;
  const { images } = props;

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
        <CardsComponent data={isResults} images={images} />
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
      <SearchMenuComponent
        getObjects={getObjects}
        setCurrentCategory={setCurrentCategory}
      />
      {isResults && getFormDisplay()}
      {isFetching && <LoadingComponent />}
    </div>
  );
}
