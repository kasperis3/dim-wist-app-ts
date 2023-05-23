import React, { useState, useEffect } from "react";
import { Row } from "../Game";

interface iProps {
  rows: Row[];
  numPlayers: number;
  scores: number[];
}

function ScoreDisplay(props: iProps) {
  return (
    // <div className="grid grid-cols-5 inline">
    <>
      <div className="col-span-1 text-center">Total Scores</div>

      {props.scores.map((score) => {
        return <div className="col-span-1 text-center">{score}</div>;
      })}
    </>
  );
}

export default ScoreDisplay;
