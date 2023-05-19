export const yieldOrdering = (numPlayers: number): number[] => {
  // array of size 13 (numHands)
  let order: number[] = [];
  order[0] = numPlayers;
  for (let i: number = 1; i < 13; i++) {
    let last: number = i % numPlayers;
    if (last === 0) {
      last = numPlayers;
    }
    order[i] = last;
  }
  return order;
};
