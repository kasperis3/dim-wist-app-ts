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
          <div className={`${basis} grow-0 shrink-0 text-center`}>
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
