import React from "react";
import { Row } from "./Board";

interface iProps {
  row: Row;
}

function ScoreDisplay(props: iProps) {
  return (
    // <div className="grid grid-cols-5 inline">
    <>
      <div className="col-span-1 text-center">Total Scores</div>

      {props.row.scores.map((score) => {
        return <div className="col-span-1 text-center">{score}</div>;
      })}
    </>
  );
}

export default ScoreDisplay;
