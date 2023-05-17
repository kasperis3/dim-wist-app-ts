import { useState } from "react";
import SetUp from "./components/SetUp";

function Game() {
  const [numPlayers, setNumPlayers] = useState(0);

  return (
    <>
      {numPlayers === 0 ? (
        <SetUp setNumPlayers={setNumPlayers} />
      ) : (
        <div>begin game for {numPlayers} players</div>
      )}
    </>
  );
}

export default Game;
