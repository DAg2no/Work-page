import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
  test("renders switch icons correctly", () => {
    const { getByTestId } = render(<Switch />);
    const brightness7Icon = getByTestId("brightness7-icon");
    const brightness4Icon = getByTestId("brightness4-icon");
    
    expect(brightness7Icon).toBeInTheDocument();
    expect(brightness4Icon).toBeInTheDocument();
  });

  test("clicking on the switch toggles the body class and switch class", () => {
    const { getByTestId } = render(<Switch />);
    const switchButton = getByTestId("switch");
    const body = document.body;
    
    expect(body.classList.contains("light")).toBe(false);
    expect(switchButton.classList.contains("active")).toBe(false);
    
    fireEvent.click(switchButton);
    expect(body.classList.contains("light")).toBe(true);
    expect(switchButton.classList.contains("active")).toBe(true);
    
    fireEvent.click(switchButton);
    expect(body.classList.contains("light")).toBe(false);
    expect(switchButton.classList.contains("active")).toBe(false);
  });
});
