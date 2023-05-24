import { basisTypes } from "../utils/basis";

interface iProps {
  playersNames: string[];
  numPlayers: number;
}

function Header(props: iProps) {
  const basis = basisTypes[props.numPlayers];

  return (
    <>
      <div className={`${basis} text-center`}>Hand</div>
      {props.playersNames.slice(0, props.numPlayers).map((name) => {
        return <div className={`${basis} text-center`}>{name}</div>;
      })}
    </>
  );
}

export default Header;
