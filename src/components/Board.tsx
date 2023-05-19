import { yieldOrdering } from "../utils/yieldOrder";
import { yieldSuit } from "../utils/yieldSuit";

interface iProps {
  numPlayers: number;
}

interface Row {
  hand: string;
  last: number;
  totalSoFar: number;
  roundOver: boolean;
  bets: number[];
  gets: number[];
  scores: number[];
}

const Board = (props: iProps) => {
  const suitsOrdering: string[] = yieldSuit();
  const playerOrdering: number[] = yieldOrdering(props.numPlayers);

  const rows: Row[] = suitsOrdering.map((hand: string, i: number) => {
    return {
      hand,
      last: playerOrdering[i],
      totalSoFar: 0,
      roundOver: false,
      bets: [],
      gets: [],
      scores: [],
    };
  });

  console.log(rows);

  return (
    <div
      className={`container m-auto grid grid-cols-${
        props.numPlayers + 1
      } grid-rows-15 gap-1`}
    >
      {rows.map((row) => {
        return <div key={row.hand}>Round {row.hand}</div>;
      })}{" "}
    </div>
  );
};

export default Board;
