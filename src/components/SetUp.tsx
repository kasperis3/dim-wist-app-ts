import { ChangeEvent } from "react";
import { Dispatcher } from "../utils/types";

interface IProps {
  setNumPlayers: Dispatcher<number>;
}

const SetUp = (props: IProps) => {
  const handleNumPlayers = (e: ChangeEvent<HTMLInputElement>) => {
    const regex1 = /^[0-9]+$/;
    let attempt = e.target.value;
    if (regex1.test(attempt) && +attempt >= 2 && +attempt < 10) {
      props.setNumPlayers(+attempt);
    } else {
      e.target.value = "";
    }
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
          Enter number players (2-9):
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
