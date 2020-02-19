import React from "react";
import { getElArr } from "../../../utils";

import "./style.scss";

export default function CardComponent(props) {
  const { card } = props;

  const getArrayCards = () => {
    const getNumberPageComponent = number => {
      return <div className={"numberPage"}>{getElArr(number, "/", -2)}</div>;
    };

    return (
      <div className={"card margin-bottom20px"}>
        {Object.keys(card).map(
          (item, keyItem) =>
            !Array.isArray(card[item]) && (
              <div className={"card__name card__item"} key={keyItem}>
                {`${item}: ${card[item]}`}
                {item === "url" && getNumberPageComponent(card[item])}
              </div>
            )
        )}
      </div>
    );
  };

  return card ? getArrayCards() : "card is not defined";
}
