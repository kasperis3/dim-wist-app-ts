import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface iProps {
  setBet: Dispatch<SetStateAction<number>>;
  bet: number;
}

function SetBet(props: iProps) {
  const handleBet = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setBet(+e.target.value);
  };

  return (
    <div>
      {!!props.bet && props.bet >= 0 ? (
        <>{props.bet}</>
      ) : (
        <input placeholder="Enter Bet" onChange={handleBet}></input>
      )}
    </div>
  );
}

export default SetBet;
