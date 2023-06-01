import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SetUp from "./SetUp";

describe("SetUp the game", () => {
  it("input is available for user", () => {
    const setNumPlayers = vi.fn();
    const props = { setNumPlayers };
    const { getByLabelText } = render(<SetUp {...props} />);
    const numPlayersInput = getByLabelText("Enter number players (2-9):");
    expect(numPlayersInput).toBeInTheDocument();
    screen.debug();
  });

  it("header is present", () => {
    const setNumPlayers = vi.fn();
    const props = { setNumPlayers };
    const { getByRole } = render(<SetUp {...props} />);
    const heading = getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
