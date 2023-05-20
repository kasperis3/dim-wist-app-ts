import React from "react";
import { Row } from "./Board";
import SetBet from "./SetBet";
import SetGet from "./SetGet";

interface iProps {
  row: Row;
  index: number;
}

function BegetCell(props: iProps) {
  return (
    <div>
      <div className="col-span-2 row-span-1 border-double border-4 border-indigo-600">
        <div className="">
          <SetBet />
        </div>
        <div className="">
          <SetGet />
        </div>
        <div className=""> {props.row.scores[props.index]}</div>
      </div>
    </div>
  );
}

export default BegetCell;
