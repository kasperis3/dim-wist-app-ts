import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
// import { basisTypes } from "../utils/basis";

describe("Header", () => {
  it("renders Header", () => {
    render(<Header numPlayers={3} />);
    screen.debug();
  });
});
