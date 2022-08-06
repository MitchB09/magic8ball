import React from "react";
import { render, screen } from "@testing-library/react";
import { responses } from "./magic8ball";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/response/i);
  expect(linkElement).toBeInTheDocument();
});
