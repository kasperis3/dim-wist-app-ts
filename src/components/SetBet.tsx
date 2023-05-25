import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
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
  //   const [bet, setBet] = useState(-1);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // does not handle the case of replaced text...
    if (e.key === "Backspace") {
      console.log("backspace pressed");
      props.handleReset(props.index);
    }
  };

  const handleBetInput = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      props.handleBet(props.index, +e.target.value);
    } else {
      e.target.value = "";
    }
  };

  return (
    <div>
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
      />
    </div>
  );
}

export default SetBet;
