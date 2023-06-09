import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import SetUp from "./components/SetUp";
import { Row } from "./utils/types";
import { yieldOrdering } from "./utils/yieldOrder";
import { yieldSuit } from "./utils/yieldSuit";

function Game() {
  const [numPlayers, setNumPlayers] = useState(0);

  const suitsOrdering: string[] = yieldSuit();
  const playerOrdering: number[] = yieldOrdering(numPlayers);

  const rows: Row[] = suitsOrdering.map((hand: string, i: number) => {
    return {
      hand, // string input, change from key to included as property
      last: playerOrdering[i],
      totalSoFar: 0,
      roundOver: false,
      bets: [...Array(numPlayers).fill(0)],
      gets: [...Array(numPlayers).fill(0)],
      scores: [...Array(numPlayers).fill(0)],
      numberBetsPlaced: 0,
    };
  });

  return (
    <>
      {numPlayers === 0 ? (
        <SetUp setNumPlayers={setNumPlayers} />
      ) : (
        <>
          <Board numPlayers={numPlayers} rows={rows} />
        </>
      )}
    </>
  );
}

export default Game;
