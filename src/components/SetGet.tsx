import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Row } from "../utils/types";

interface iProps {
  handleGet: (index: number, get: number) => void;
  handleResetGet: (index: number) => void;
  numPlayers: number;
  index: number;
  row: Row;
}

function SetGet(props: iProps) {
  const [getSet, setGetSet] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // does not handle the case of replaced text...
    if (e.key === "Backspace") {
      console.log("backspace pressed");
      props.handleResetGet(props.index);
    }
  };

  const handleGetInput = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      props.handleGet(props.index, +e.target.value);
    } else {
      e.target.value = "";
    }
  };

  return (
    <div className="basis-1/2 grow-0 shrink-0">
      {/* {getSet ? (
        <>{props.row.gets[props.index]}</>
      ) : ( */}
      <input
        className="w-full"
        disabled={props.row.numberBetsPlaced !== props.numPlayers}
        placeholder="Enter get"
        onChange={handleGetInput}
        onKeyDown={handleKeyDown}
      />
      {/* )} */}
    </div>
  );
}

export default SetGet;
