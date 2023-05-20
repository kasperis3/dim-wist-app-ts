import React from "react";

interface iProps {
  playersNames: string[];
}

function Header(props: iProps) {
  return (
    <div className="grid grid-cols-5 inline">
      <div className="col-span-1 text-center">Hand</div>
      {props.playersNames.slice(0, 4).map((name) => {
        return <div className="col-span-1 text-center">{name}</div>;
      })}
    </div>
  );
}

export default Header;
