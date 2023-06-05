import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RowDisplay from "./RowDisplay";

describe("Row Display test suite", () => {
  it("display correct number of players and inputs per row", async () => {
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
    const betsAndGets = screen.getAllByRole("textbox");

    // make sure number of Inputs = 2 * numPlayers
    expect(betsAndGets).toHaveLength(10);

    const user = userEvent.setup();
    const bets: HTMLElement[] = [];
    const gets: HTMLElement[] = [];

    betsAndGets.forEach((item, index) => {
      if (index % 2 === 0) {
        bets.push(item); // not pushing the last bet?
      } else {
        gets.push(item);
      }
    });

    // test gets are disabled until bets are inputted
    gets.every((item) => {
      expect(item).toBeDisabled();
    });

    // test bets are submitted and displayed
    // (async () => {
    for (let bet of bets) {
      console.log("bet");
      await user.type(bet, "2");
      console.log("bet placed");
    }

    // bets.every((item) => {
    //   expect(item).toHaveTextContent("2");
    // });

    screen.debug();
    // })();

    // gets.every((item) => {
    //   expect(item).toBeEnabled();
    // });

    // test bets are submitted and numberBetsPlaced are incremented

    // test scores are updated once gets are in

    // test bets are reset when deleted

    // test gets are reset when deleted
  });
});
