import React, { useState, ChangeEvent } from "react";
import { Row } from "../Game";

interface iProps {
  handleGet: (index: number, get: number) => void;
  index: number;
  row: Row;
}

function SetGet(props: iProps) {
  const [getSet, setGetSet] = useState(false);
  const handleGetInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // validate get
    setGetSet(true);
    props.handleGet(props.index, +e.target.value);
  };

  return (
    <div>
      {getSet ? (
        <>{props.row.gets[props.index]}</>
      ) : (
        <input placeholder="Enter get" onChange={handleGetInput}></input>
      )}
    </div>
  );
}

export default SetGet;
