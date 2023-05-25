import { ChangeEvent, useState } from "react";
import { basisTypes } from "../utils/basis";

interface iProps {
  playersNames: string[];
  numPlayers: number;
}

function Header(props: iProps) {
  const basis = basisTypes[props.numPlayers];
  const [playerNames, setPlayerNames] = useState(props.playersNames);

  return (
    <>
      <div className={`${basis} text-center`}>Hand</div>
      {playerNames.slice(0, props.numPlayers).map((name, index) => {
        return (
          <input
            className={`${basis} text-center`}
            placeholder={name}
            // onChange={handleNameChange}
          />
        );
      })}
    </>
  );
}

export default Header;
