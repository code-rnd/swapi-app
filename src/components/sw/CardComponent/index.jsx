import React from "react";

import "./style.scss";

export default function CardComponent(props) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld
  } = props;

  return (
    <div className={"card margin-bottom20px"}>
      <div className={"card__name card__item"}>name: {name}</div>
      <div className={"card__height card__item"}>height: {height}</div>
      <div className={"card__mass card__item"}>mass: {mass}</div>
      <div className={"card__hairColor card__item"}>
        hair color: {hair_color}
      </div>
      <div className={"card__skinColor card__item"}>
        skin color: {skin_color}
      </div>
      <div className={"card__eyeColor card__item"}>eye color: {eye_color}</div>
      <div className={"card__birthYear card__item"}>
        birth year: {birth_year}
      </div>
      <div className={"card__gender card__item"}>gender: {gender}</div>
      <div className={"card__homeworld card__item"}>homeworld: {homeworld}</div>
    </div>
  );
}
