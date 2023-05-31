import { useState, useEffect } from "react";
import { Row } from "../utils/types";
import Header from "./Header";
import RowDisplay from "./RowDisplay";
import ScoreDisplay from "./ScoreDisplay";

interface iProps {
  numPlayers: number;
  rows: Row[];
}

const Board = (props: iProps) => {
  const [scoresTotals, setScoresTotals] = useState([
    ...Array(props.numPlayers).fill(0),
  ]);

  const handleScore = (rowScores: number[], index: number) => {
    scoresTotals[index] += rowScores[index];
    let newScores = [...scoresTotals];
    setScoresTotals(newScores);
  };

  return (
    <div className={`flex flex-col m-.5`}>
      <div className={`flex flex-row m-.5`}>
        <Header numPlayers={props.numPlayers} />
      </div>
      {props.rows.map((row: Row, i: number) => {
        return (
          <div className={`flex flex-row m-.5`}>
            <RowDisplay
              row={row}
              numPlayers={props.numPlayers}
              handleScore={handleScore}
            />
          </div>
        );
      })}{" "}
      <div className={`flex flex-row border border-2 border-orange-100 m-.5`}>
        <ScoreDisplay
          scores={scoresTotals}
          rows={props.rows}
          numPlayers={props.numPlayers}
        />
      </div>
    </div>
  );
};

export default Board;
