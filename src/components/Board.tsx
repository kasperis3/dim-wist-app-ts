import { yieldOrdering } from "../utils/yieldOrder";
import { yieldSuit } from "../utils/yieldSuit";
import Header from "./Header";
import RowDisplay from "./RowDisplay";
import ScoreDisplay from "./ScoreDisplay";

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
      bets: [...Array(props.numPlayers).fill(0)],
      gets: [...Array(props.numPlayers).fill(0)],
      scores: [...Array(props.numPlayers).fill(0)],
    };
  });

  return (
    <div className={`grid grid-rows-15`}>
      <div className={`grid grid-cols-${props.numPlayers + 1}`}>
        <Header
          playersNames={[
            "Fuzzy",
            "Duzzy",
            "Tigger",
            "Tiger",
            "Kasper",
            "Wesley",
            "Fatty",
          ]}
          numPlayers={props.numPlayers}
        />
      </div>
      {rows.map((row: Row, i: number) => {
        return (
          <>
            <div className={`grid grid-cols-${props.numPlayers + 1}`}>
              <RowDisplay row={row} numPlayers={props.numPlayers} />
            </div>
          </>
          /* this is a component containing bets, gets, scores */
        );
      })}{" "}
      <div className={`grid grid-cols-${props.numPlayers + 1}`}>
        <ScoreDisplay row={rows[12]} />
      </div>
    </div>
  );
};

export default Board;
