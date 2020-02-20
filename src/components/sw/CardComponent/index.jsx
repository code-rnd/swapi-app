import React, { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
import { getElArrUtil } from "../../../utils";

import "./style.scss";

export default function CardComponent(props) {
  const { getImage } = props;
  const { currentCategory } = props;
  const { card } = props;

  const [isPageNumber, isSetPageNumber] = useState(
    +getElArrUtil(card.url, "/", -2)
  );

  useEffect(() => {
    if (!card || !card.name) {
      return;
    }

    getImage(currentCategory, card.name, isPageNumber);
  }, [card]);

  const getCard = () => {
    return (
      <div className={"card margin-right20px"}>
        <div className={"card__name card__item"}>
          <div className={"numberPage"}>{isPageNumber}</div>
          name: {card.name}
        </div>
        <ImageComponent url={""} />
      </div>
    );
  };

  return card ? getCard() : "card is not defined";
}
