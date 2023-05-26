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
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Diminishing Wist Score Keeper
        </h1>
      </div>
      <div>
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
    </div>
  );
};

export default SetUp;
