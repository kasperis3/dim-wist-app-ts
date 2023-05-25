import { ChangeEvent } from "react";
import { Dispatcher } from "../utils/types";

interface IProps {
  setNumPlayers: Dispatcher<number>;
}

const SetUp = (props: IProps) => {
  const handleNumPlayers = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setNumPlayers(+e.target.value);
  };

  return (
    <>
      Enter number players:{" "}
      <input onChange={handleNumPlayers} type="text" pattern="\d+" />
    </>
  );
};

export default SetUp;
