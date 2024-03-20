import React from "react";
import { afterEach, describe, it, expect } from "vitest";
import Home from "../src/views/home";
import { cleanup, render, screen } from "@testing-library/react";

describe("Home test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<Home />);
  });

  it("should render title", async () => {
    render(<Home />);
    await screen.findByText("Welcome Home!");
    expect(screen.getByText("Welcome Home!"));
  });
});
