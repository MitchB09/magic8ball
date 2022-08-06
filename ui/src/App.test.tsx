import React from "react";
import { act, render, screen } from "@testing-library/react";
import { responses } from "./magic8ball";
import App from "./App";

test("Renders response on render", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/response/i);
  const response = linkElement.innerHTML;
  expect(responses).toContain(response);
});

test("Clicking button gives new result", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/response/i);
  const response = linkElement.innerHTML;

  act(() => {
    screen.getByRole("button").click();
  });
  const updatedResponse = linkElement.innerHTML;

  expect(responses).toContain(response);
  expect(responses).toContain(updatedResponse);
  expect(updatedResponse).not.toEqual(response);
});
