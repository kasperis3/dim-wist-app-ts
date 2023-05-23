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
    if (!e.target.value.match(/^[0-9]+$/)) {
      e.target.value = "";
      alert("Input only a number!");
      return;
    }
    setGetSet(true);
    props.handleGet(props.index, +e.target.value);
  };

  return (
    <div>
      {getSet ? (
        <>{props.row.gets[props.index]}</>
      ) : (
        <input disabled placeholder="Enter get" onChange={handleGetInput} />
      )}
    </div>
  );
}

export default SetGet;
