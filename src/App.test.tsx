import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Movie Search", () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders search bar", () => {
  render(<App />);
});
