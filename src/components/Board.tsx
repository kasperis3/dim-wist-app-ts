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

  const handleScore = (rowScores: number[]) => {
    // props.rows.forEach((row) => {
    //   row.scores.forEach((score: number, i: number) => {
    //     scoresTotals[i] += score;
    //   });
    // });
    let newScores = scoresTotals.map((scoresTotal: number, index: number) => {
      return scoresTotal + rowScores[index];
    });
    // let newScores = [...scoresTotals];
    setScoresTotals(newScores);
  };

  return (
    <div className={``}>
      <div className={`grid grid-cols-${props.numPlayers + 1} grid-rows-1`}>
        <Header
          playersNames={[
            "Fuzzy",
            "Duzzy",
            "Tigger",
            "Tiger",
            "Kasper",
            "Wesley",
            "Fatty",
          ]}
          numPlayers={props.numPlayers}
        />
      </div>
      {props.rows.map((row: Row, i: number) => {
        return (
          <>
            <div className={`grid grid-cols-${props.numPlayers + 1}`}>
              <RowDisplay
                row={row}
                numPlayers={props.numPlayers}
                handleScore={handleScore}
              />
            </div>
          </>
          /* this is a component containing bets, gets, scores */
        );
      })}{" "}
      <div className={`grid grid-cols-${props.numPlayers + 1}`}>
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
