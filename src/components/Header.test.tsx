import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders Header", () => {
    render(<Header numPlayers={4} />);
    screen.debug();
  });
});
