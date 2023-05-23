import React, { useEffect, useState } from "react";
import { Row } from "./Board";
import SetBet from "./SetBet";
import SetGet from "./SetGet";

interface iProps {
  row: Row;
  index: number;
  handleBet: (index: number, bet: number) => void;
  handleGet: (index: number, get: number) => void;
}

function BegetCell(props: iProps) {
  const [isLastToPlay, setIsLastToPlay] = useState(false);
  const [cannotBet, setCannotBet] = useState(-1);

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
    <div>
      <div
        className={`col-span-1 row-span-1 border-2 border-${
          isLastToPlay === true ? "green" : "indigo"
        }-600 m-1`}
      >
        {/* <div className=""> */}
        <SetBet
          index={props.index}
          handleBet={props.handleBet}
          row={props.row}
          isLastToPlay={isLastToPlay}
          cannotBet={cannotBet}
        />
        {/* <div className=""> */}
        <SetGet
          index={props.index}
          handleGet={props.handleGet}
          row={props.row}
        />
        {/* </div> */}
        {props.row.scores[props.index]}
      </div>
    </div>
  );
}

export default BegetCell;
