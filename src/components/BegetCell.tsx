import React, { useEffect, useState } from "react";
import { Row } from "../utils/types";
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
    <div
      className={
        isLastToPlay
          ? `${basis} rounded border border-solid border-4 border-red-600`
          : `${basis} rounded border border-solid`
      }
    >
      <SetBet
        index={props.index}
        handleBet={props.handleBet}
        handleReset={props.handleReset}
        row={props.row}
        isLastToPlay={isLastToPlay}
        cannotBet={cannotBet}
      />

      <SetGet
        index={props.index}
        handleGet={props.handleGet}
        handleResetGet={props.handleResetGet}
        numPlayers={props.numPlayers}
        row={props.row}
      />

      <div className="bg-yellow-100 text-center">
        {props.row.scores[props.index]}
      </div>
    </div>
  );
}

export default BegetCell;
