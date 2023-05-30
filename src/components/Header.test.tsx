import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { basisTypes } from "../utils/basis";

const playersNames = [
  "Fuzzy",
  "Duzzy",
  "Tigger",
  "Tiger",
  "Kasper",
  "Wesley",
  "Fatty",
  "Goose",
  "Moose",
];

describe("Header", () => {
  it("renders Header", () => {
    render(<Header playersNames={playersNames} numPlayers={3} />);
    screen.debug();
  });
});
