import { Dispatch, SetStateAction } from "react";

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface Row {
  hand: string;
  last: number;
  totalSoFar: number;
  roundOver: boolean;
  bets: number[];
  gets: number[];
  scores: number[];
  numberBetsPlaced: number;
}
