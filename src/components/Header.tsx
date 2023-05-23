interface iProps {
  playersNames: string[];
  numPlayers: number;
}

function Header(props: iProps) {
  return (
    <>
      <div className="text-center">Hand</div>
      {props.playersNames.slice(0, props.numPlayers).map((name) => {
        return <div className="flex-1 text-center">{name}</div>;
      })}
    </>
  );
}

export default Header;
