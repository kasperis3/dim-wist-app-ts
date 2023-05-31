import { ChangeEvent, useState } from "react";
import { basisTypes } from "../utils/basis";
import { playersNames } from "../utils/names";

interface iProps {
  // playersNames: string[];
  numPlayers: number;
}

function Header(props: iProps) {
  const basis = basisTypes[props.numPlayers];
  const playerNames = playersNames.slice(0, props.numPlayers);

  return (
    <>
      <div className={`${basis} text-center`}>Hand</div>
      {playerNames.map((name, index) => {
        return (
          <div key={index} className={`${basis} grow-0 shrink-0 text-center`}>
            <input
              className="w-full"
              placeholder={name}
              // onChange={handleNameChange}
            />
            {/* {name} */}
          </div>
        );
      })}
    </>
  );
}

export default Header;
