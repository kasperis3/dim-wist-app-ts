import { useState } from "react";
import SetUp from "./components/SetUp";

function Game() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SetUp />
    </>
  );
}

export default Game;
