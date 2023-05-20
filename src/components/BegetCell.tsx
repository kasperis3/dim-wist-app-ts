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

  const calcHandScore = () => {
    let handScore = get === bet ? 10 + get : get;
    setHandScore(handScore);
    props.row.bets[props.index] = bet;
    props.row.gets[props.index] = get;
    props.row.scores[props.index] = handScore;
    console.log(props.row);
  };

  useEffect(() => {
    if (get < 0) return;
    calcHandScore();
  }, [get]);

  return (
    <div>
      <div className="col-span-2 row-span-1 border-double border-4 border-indigo-600">
        {/* <div className=""> */}
        <SetBet bet={bet} setBet={setBet} />
        {/* </div> */}
        {/* <div className=""> */}
        <SetGet get={get} setGet={setGet} />
        {/* </div> */}
        {handScore < 0 ? <div></div> : <div className=""> {handScore}</div>}
      </div>
    </div>
  );
}

export default BegetCell;
