import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Game from "./Game";
import userEvent from "@testing-library/user-event";

describe("Game test suite", () => {
  it("Game renders Board component after numPlayers entered", async () => {
    const { getByText, getByRole } = render(<Game />);
    const user = userEvent.setup();
    await user.type(getByRole("textbox"), "5");
    await waitFor(() => expect(getByText("Hand")).toBeInTheDocument());
  });

  it("Game does not render Board if numPlayers incorrectly entered", async () => {
    const { getByText, getByRole } = render(<Game />);
    const user = userEvent.setup();
    await user.type(getByRole("textbox"), "0");
    await waitFor(() =>
      expect(getByText("Enter number players (2-9):")).toBeInTheDocument()
    );
  });
});
