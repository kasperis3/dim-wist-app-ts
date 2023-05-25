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
  const [error, setError] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      console.log("backspace pressed");
      props.handleReset(props.index);
    }
  };

  const handleBetInput = (e: ChangeEvent<HTMLInputElement>) => {
    const regex1 = /^[0-9]+$/;
    console.log(e.target.value);
    if (regex1.test(e.target.value)) {
      if (props.isLastToPlay) {
        if (+e.target.value === props.cannotBet) {
          setError(true);
          e.target.value = "";
          return;
        } else {
          setError(false);
        }
      }
      props.handleBet(props.index, +e.target.value);
    } else {
      e.target.value = "";
    }
  };

  return (
    <div>
      {error ? `Cannot bet ${props.cannotBet}` : null}
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
