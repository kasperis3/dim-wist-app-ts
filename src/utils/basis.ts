export type basis = {
  [numPlayers: number]: string;
};

export const basisTypes: basis = {
  5: "basis-1/6 grow-0 shrink-0",
  6: "basis-1/7 grow-0 shrink-0",
  7: "basis-1/8 grow-0 shrink-0",
  8: "basis-1/9 grow-0 shrink-0",
  9: "basis-1/10 grow-0 shrink-0",
};

// use: basisTypes[props.numPlayers]
