import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RowDisplay from "./RowDisplay";

describe("Row Display test suite", () => {
  it("display correct number of players per row", () => {
    const handleScore = vi.fn();
    const row = {
      bets: [0, 0, 0, 0, 0],
      gets: [0, 0, 0, 0, 0],
      hand: "6♥",
      last: 2,
      numberBetsPlaced: 0,
      roundOver: false,
      scores: [0, 0, 0, 0, 0],
      totalSoFar: 0,
    };
    const numPlayers = 5;
    const props = {
      handleScore,
      numPlayers,
      row,
    };
    render(<RowDisplay {...props} />);
    screen.debug();
  });
});
