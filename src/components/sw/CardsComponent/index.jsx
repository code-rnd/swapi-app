import React from "react";
import CardComponent from "../CardComponent";

import "./style.scss";

export default function CardsComponent(props) {
  const { data } = props;

  return (
    <div className={"cards"}>
      {data.map((card, key) => (
        <CardComponent card={card} key={key} />
      ))}
    </div>
  );
}
