import React, { useEffect, useState } from "react";
import { Row } from "../Game";
import { basisTypes } from "../utils/basis";
import SetBet from "./SetBet";
import SetGet from "./SetGet";

interface iProps {
  row: Row;
  index: number;
  handleBet: (index: number, bet: number) => void;
  handleGet: (index: number, get: number) => void;
  handleReset: (index: number) => void;
  handleResetGet: (index: number) => void;
  numPlayers: number;
}

function BegetCell(props: iProps) {
  const [isLastToPlay, setIsLastToPlay] = useState(false);
  const [cannotBet, setCannotBet] = useState(-1);

  const basis = basisTypes[props.numPlayers];

  const cannotBetX = (): void => {
    let totalHands: number = +props.row.hand.slice(0, -1);
    setCannotBet(totalHands - props.row.totalSoFar);
  };

  useEffect(() => {
    let lastToPlay: boolean = props.index === props.row.last - 1;
    setIsLastToPlay(lastToPlay);
  }, []);

  useEffect(() => {
    if (isLastToPlay) {
      cannotBetX();
    }
  });

  return (
    <div className={`${basis} rounded border border-solid border-indigo-600`}>
      {/* <div className=""> */}
      <SetBet
        index={props.index}
        handleBet={props.handleBet}
        handleReset={props.handleReset}
        row={props.row}
        isLastToPlay={isLastToPlay}
        cannotBet={cannotBet}
      />
      {/* <div className=""> */}
      <SetGet
        index={props.index}
        handleGet={props.handleGet}
        handleResetGet={props.handleResetGet}
        row={props.row}
      />
      {/* </div> */}
      {props.row.scores[props.index]}
    </div>
  );
}

export default BegetCell;
