import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("renders Header for 4 players", () => {
    render(<Header numPlayers={4} />);
    expect(screen.getByText("Hand")).toBeInTheDocument();
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("renders Header for 6 players", () => {
    render(<Header numPlayers={6} />);
    expect(screen.getByText("Hand")).toBeInTheDocument();
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(6);
  });

  it("name change for player 1", async () => {
    render(<Header numPlayers={6} />);
    const user = userEvent.setup();
    await user.type(screen.getAllByRole("textbox")[0], "Player One");
    expect(screen.getAllByRole("textbox")[0]).toHaveTextContent("");
  });
});
