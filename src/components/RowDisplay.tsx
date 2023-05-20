import React from "react";
import BegetCell from "./BegetCell";
import { Row } from "./Board";

interface iProps {
  row: Row;
  numPlayers: number;
}

function RowDisplay(props: iProps) {
  return (
    <div className={`grid auto grid-cols-5`}>
      {/* insight: all arrays have same length */}
      <div className="col-span-1 inline bg-green-100 rounded text-center">
        {props.row.hand}
      </div>
      {props.row.bets.map((_, index) => {
        return <BegetCell index={index} row={props.row} />;
      })}
    </div>
  );
}

export default RowDisplay;
