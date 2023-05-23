import React, { useEffect, useState } from "react";
import { Row } from "./Board";
import SetBet from "./SetBet";
import SetGet from "./SetGet";

interface iProps {
  row: Row;
  index: number;
}

function BegetCell(props: iProps) {
  const [get, setGet] = useState(-1);
  const [bet, setBet] = useState(-1);
  const [handScore, setHandScore] = useState(-1);
  const [isLastToPlay, setIsLastToPlay] = useState(false);
  const [cannotBet, setCannotBet] = useState(-1);

  const calcHandScore = () => {
    let handScore = get === bet ? 10 + get : get;
    setHandScore(handScore);
    props.row.bets[props.index] = bet;
    props.row.gets[props.index] = get;
    props.row.scores[props.index] = handScore;
    console.log(props);
  };

  const cannotBetX = (): void => {
    let totalHands: number = +props.row.hand.slice(0, -1);
    let betsSoFar: number = props.row.bets.reduce(
      (prev, next) => prev + next,
      0
    );
    setCannotBet(totalHands - betsSoFar);
  };

  useEffect(() => {
    if (get < 0) return;
    calcHandScore();
  }, [get]);

  useEffect(() => {
    let lastToPlay: boolean = props.index === props.row.last - 1;
    setIsLastToPlay(lastToPlay);
  }, []);

  useEffect(() => {
    cannotBetX();
  });

  return (
    <div>
      <div
        className={`col-span-1 row-span-1 border-2 border-${
          isLastToPlay ? "green" : "indigo"
        }-600 m-1`}
      >
        {/* <div className=""> */}
        <SetBet bet={bet} setBet={setBet} />
        {isLastToPlay && handScore < 0 ? (
          <div>Thou cannot bet {cannotBet}</div>
        ) : null}
        {/* <div className=""> */}
        <SetGet get={get} setGet={setGet} />
        {/* </div> */}
        {handScore < 0 ? <div>{}</div> : <div className=""> {handScore}</div>}
      </div>
    </div>
  );
}

export default BegetCell;
