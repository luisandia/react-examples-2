import React from "react";
import "./card.styles.css";
import { Monster } from "../../App";

interface Props {
  monster: Monster;
}

const Card: React.FC<Props> = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{monster.name}</h1>
      <h2>{monster.email}</h2>
    </div>
  );
};

export default Card;
