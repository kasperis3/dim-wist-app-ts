import React, { useState } from "react";
import BegetCell from "./BegetCell";
import { Row } from "../Game";

interface iProps {
  row: Row;
  numPlayers: number;
  handleScore: (scores: number[]) => void;
}

function RowDisplay(props: iProps) {
  const [bets, setBets] = useState(props.row.bets);
  const [gets, setGets] = useState(props.row.gets);

  const handleBet = (index: number, bet: number) => {
    // validate bet
    let newBets = [...bets];
    newBets[index] = bet;
    props.row.bets[index] = bet;
    props.row.totalSoFar += bet;
    setBets(newBets);
  };

  const handleGet = (index: number, get: number) => {
    // validate get
    let newGets = [...gets];
    newGets[index] = get;
    props.row.gets[index] = get;
    props.row.scores[index] = get === props.row.bets[index] ? 10 + get : get;
    props.handleScore(props.row.scores);
    setGets(newGets);
  };

  return (
    <>
      {/* insight: all arrays have same length */}
      <div className="bg-green-100 rounded text-center">{props.row.hand}</div>
      {[...Array(props.numPlayers)].map((_, index) => {
        return (
          <BegetCell
            index={index}
            row={props.row}
            handleBet={handleBet}
            handleGet={handleGet}
          />
        );
      })}
    </>
  );
}

export default RowDisplay;
