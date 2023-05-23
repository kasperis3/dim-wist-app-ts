import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Row } from "../Game";

interface iProps {
  handleBet: (index: number, bet: number) => void;
  index: number;
  row: Row;
  isLastToPlay: boolean;
  cannotBet: number;
}

function SetBet(props: iProps) {
  const [betSet, setBetSet] = useState(false);
  const handleBetInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // validate target value
    setBetSet(true);
    props.handleBet(props.index, +e.target.value);
  };

  //   useEffect(() => {
  //     console.log("betSet", betSet);
  //     if (betSet) {
  //       console.log("inside use effect", props);
  //     }
  //   }, [betSet]);

  return (
    <div>
      {betSet ? (
        <>{props.row.bets[props.index]}</>
      ) : (
        <input
          placeholder={
            props.isLastToPlay
              ? props.cannotBet < 0
                ? "Bet whatever!"
                : `Cannot bet ${props.cannotBet}`
              : "Enter Bet"
          }
          onChange={handleBetInput}
        ></input>
      )}
    </div>
  );
}

export default SetBet;
