import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders brand name correctly", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Daniel Uribe")).toBeInTheDocument();
  });

  test("renders switch component correctly", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("switch-component")).toBeInTheDocument();
  });
});
