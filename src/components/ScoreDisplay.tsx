import React, { useState, useEffect } from "react";
import { Row } from "../utils/types";
import { basisTypes } from "../utils/basis";

interface iProps {
  rows: Row[];
  numPlayers: number;
  scores: number[];
}

function ScoreDisplay(props: iProps) {
  const basis = basisTypes[props.numPlayers];

  return (
    <>
      <div className={`${basis} text-center`}>Total Scores</div>

      {props.scores.map((score, index) => {
        return (
          <div key={index} className={`${basis} text-center`}>
            {score}
          </div>
        );
      })}
    </>
  );
}

export default ScoreDisplay;
