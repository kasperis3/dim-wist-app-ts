import React from "react";
import { Row } from "./Board";

interface iProps {
  row: Row;
  numPlayers: number;
}

function RowDisplay(props: iProps) {
  return (
    <div className={`container grid grid-rows-13`}>
      {/* insight: all arrays have same length */}

      {props.row.bets.map((_, index) => {
        return (
          <div className="grid grid-cols-5 grid-rows-2 gap-0 inline">
            <div className="col-span-2">{props.row.bets[index]} </div>
            {/* <div className="col-span-1"></div> */}
            <div className="col-span-2"> {props.row.gets[index]} </div>
            <div className="col-span-1"></div>
            <div className="col-span-3"> {props.row.scores[index]}</div>
            {/* <div className="col-span-1"></div> */}
          </div>
        );
      })}
    </div>
  );
}

export default RowDisplay;
