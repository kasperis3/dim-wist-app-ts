import { useState, useEffect } from "react";
import { Row } from "../Game";
import { yieldOrdering } from "../utils/yieldOrder";
import { yieldSuit } from "../utils/yieldSuit";
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
    <div className={`flex flex-col`}>
      <div className={`flex flex-row`}>
        <Header
          playersNames={[
            "Fuzzy",
            "Duzzy",
            "Tigger",
            "Tiger",
            "Kasper",
            "Wesley",
            "Fatty",
            "Goose",
            "Moose",
          ]}
          numPlayers={props.numPlayers}
        />
      </div>
      {props.rows.map((row: Row, i: number) => {
        return (
          <div className={`flex flex-row`}>
            <RowDisplay
              row={row}
              numPlayers={props.numPlayers}
              handleScore={handleScore}
            />
          </div>

          /* this is a component containing bets, gets, scores */
        );
      })}{" "}
      <div className={`flex flex-row`}>
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
