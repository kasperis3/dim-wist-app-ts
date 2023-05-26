import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Row } from "../utils/types";

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
    console.log(props, e.target.value);
    if (regex1.test(e.target.value)) {
      if (props.isLastToPlay) {
        if (+e.target.value === props.cannotBet) {
          setError(true);
          e.target.value = "";
          setTimeout(() => {
            setError(false);
          }, 1000);
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
    <div className="basis-1/2 grow-0 shrink-0">
      {error ? (
        <div className="bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 block w-full">
          Can't bet {props.cannotBet}
        </div>
      ) : (
        <input
          className="w-full focus:ring-green-500 text-xs"
          type="text"
          placeholder={
            props.isLastToPlay
              ? props.cannotBet < 0
                ? "Bet whatever!"
                : `Can't bet ${props.cannotBet}`
              : "Enter Bet"
          }
          onKeyDown={handleKeyDown}
          onChange={handleBetInput}
        />
      )}
    </div>
  );
}

export default SetBet;
