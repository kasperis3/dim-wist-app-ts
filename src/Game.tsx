import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import SetUp from "./components/SetUp";

function Game() {
  const [numPlayers, setNumPlayers] = useState(5);

  return (
    <>
      {/* {numPlayers === 0 ? (
        <SetUp setNumPlayers={setNumPlayers} />
      ) : ( */}
      <>
        <Board numPlayers={numPlayers} />
      </>
      {/* )} */}
    </>
  );
}

export default Game;
