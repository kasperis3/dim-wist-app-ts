import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

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
