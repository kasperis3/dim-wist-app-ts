import React from "react";
import { Row } from "./Board";

interface iProps {
  row: Row;
  numPlayers: number;
}

function RowDisplay(props: iProps) {
  return (
    <div className={`grid grid-cols-10 bg-gray-500 w-full`}>
      {/* insight: all arrays have same length */}
      <div className="col-span-2 inline">{props.row.hand}</div>
      {props.row.bets.map((_, index) => {
        return (
          <div className="col-span-8 inline">
            <div className="grid grid-cols-5 grid-rows-2 inline">
              <div className="col-span-2">{props.row.bets[index]} </div>
              <div className="col-span-1"></div>
              <div className="col-span-2"> {props.row.gets[index]} </div>
              <div className="col-span-1"></div>
              <div className="col-span-3"> {props.row.scores[index]}</div>
              <div className="col-span-1"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RowDisplay;
