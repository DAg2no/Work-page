import { fireEvent, render } from "@testing-library/react";
import Switch from "./Switch";

test("renders switch component", () => {
  const { getByRole } = render(<Switch />);

  const switchElement = getByRole("button");

  expect(switchElement).toBeInTheDocument();
});

test("toggles body class on click", () => {
  const { getByRole } = render(<Switch />);

  const switchElement = getByRole("button");

  fireEvent.click(switchElement);

  expect(document.body.classList.contains("light")).toBe(true);

  fireEvent.click(switchElement);

  expect(document.body.classList.contains("light")).toBe(false);
});

test("toggles active class on click", () => {
  const { getByRole } = render(<Switch />);

  const switchElement = getByRole("button");

  fireEvent.click(switchElement);

  expect(switchElement.classList.contains("active")).toBe(true);

  fireEvent.click(switchElement);

  expect(switchElement.classList.contains("active")).toBe(false);
});
