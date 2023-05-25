type suitMap = {
  [suit: string]: string;
};

const suitMap: suitMap = {
  S: "♠",
  H: "♥",
  D: "♦",
  C: "♣",
};

export const yieldSuit = (): string[] => {
  var suits: string = "SDHCN";
  var start: number = 13;
  var ordering: string[] = [];
  for (var count: number = 0; count < start; count++) {
    var suit: string = suits[count % suits.length]; // index out of bounds
    suit = suit === "N" ? "N" : suitMap[suit];
    var round: string = start - count + suit;
    ordering.push(round);
  }
  return ordering;
};
