import React from "react";
import { Monster } from "../../App";
import "./card-list.styles.css";
import Card from "../Card/Card";
interface Props {
  monsters: Monster[];
}

const CardList = (props: Props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster: Monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
