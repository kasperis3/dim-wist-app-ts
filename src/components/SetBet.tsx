import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Row } from "../Game";

interface iProps {
  handleBet: (index: number, bet: number) => void;
  handleReset: (index: number) => void;
  index: number;
  row: Row;
  isLastToPlay: boolean;
  cannotBet: number;
}

function SetBet(props: iProps) {
  const [betSet, setBetSet] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      console.log("backspace pressed");
      props.handleReset(props.index);
    }
  };

  const handleBetInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // handle backSpace/delete
    console.log(e.target.value);

    if (!e.target.value.match(/(^[0-9]+$)/)) {
      e.target.value = "";
      alert("Input only a number!");
      return;
    }
    // validate target value
    // setBetSet(true);
    props.handleBet(props.index, +e.target.value);
  };

  return (
    <div>
      {/* {betSet ? (
        <>{props.row.bets[props.index]}</>
      ) : ( */}
      <input
        type="text"
        placeholder={
          props.isLastToPlay
            ? props.cannotBet < 0
              ? "Bet whatever!"
              : `Cannot bet ${props.cannotBet}`
            : "Enter Bet"
        }
        onKeyDown={handleKeyDown}
        onChange={handleBetInput}
      ></input>
      {/* )} */}
    </div>
  );
}

export default SetBet;
