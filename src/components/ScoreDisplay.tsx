import React, { useState, useEffect } from "react";
import { Row } from "../Game";
import { basisTypes } from "../utils/basis";

interface iProps {
  rows: Row[];
  numPlayers: number;
  scores: number[];
}

function ScoreDisplay(props: iProps) {
  const basis = basisTypes[props.numPlayers];

  return (
    // <div className="grid grid-cols-5 inline">
    <>
      <div className={`${basis} text-center`}>Total Scores</div>

      {props.scores.map((score) => {
        return <div className={`${basis} text-center`}>{score}</div>;
      })}
    </>
  );
}

export default ScoreDisplay;
