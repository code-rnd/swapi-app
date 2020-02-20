import React from "react";
import { CardContainer } from "../../../containers/sw/CardContainer";

import "./style.scss";

export default function CardsComponent(props) {
  const { data } = props;

  return (
    <div className={"cards"}>
      {data.map((card, key) => (
        <CardContainer card={card} key={key} />
      ))}
    </div>
  );
}
