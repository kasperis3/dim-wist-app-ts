import React, { Dispatch, SetStateAction, ChangeEvent } from "react";

interface iProps {
  setGet: Dispatch<SetStateAction<number>>;
  get: number;
}

function SetGet(props: iProps) {
  const handleGet = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setGet(+e.target.value);
  };

  return (
    <div>
      {!!props.get && props.get >= 0 ? (
        <>{props.get}</>
      ) : (
        <input placeholder="Enter get" onChange={handleGet}></input>
      )}
    </div>
  );
}

export default SetGet;
