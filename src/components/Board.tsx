import { yieldOrdering } from "../utils/yieldOrder";
import { yieldSuit } from "../utils/yieldSuit";
import RowDisplay from "./RowDisplay";

interface iProps {
  numPlayers: number;
}

export interface Row {
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
      hand, // string input, change from key to included as property
      last: playerOrdering[i],
      totalSoFar: 0,
      roundOver: false,
      bets: [5, 5, 5, 5],
      gets: [10, 10, 10, 10],
      scores: [15, 15, 15, 15],
    };
  });

  return (
    <div className={`container m-auto grid grid-rows-15 gap-1`}>
      {rows.map((row, i: number) => {
        return (
          <RowDisplay row={row} numPlayers={props.numPlayers} />
          /* this is a component containing bets, gets, scores */
        );
      })}{" "}
    </div>
  );
};

export default Board;
