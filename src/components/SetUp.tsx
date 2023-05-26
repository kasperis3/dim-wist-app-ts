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
    <div className="h-screen flex justify-center items-center">
      <label>
        Enter number players:
        <input
          className="border border-4 border-blue-400 w-20"
          onChange={handleNumPlayers}
          type="text"
          pattern="\d+"
        />
      </label>
    </div>
  );
};

export default SetUp;
