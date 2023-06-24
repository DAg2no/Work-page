import React from "react";
import { render } from "@testing-library/react";
import HeaderSection from "./HeaderSection";

describe("HeaderSection", () => {
  test("renders heading correctly", () => {
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Hi, I'm Daniel")).toBeInTheDocument();
  });

  test("renders typing animation correctly", () => {
    const { getByText } = render(<HeaderSection />);
    expect(getByText("beginner development")).toBeInTheDocument();
    expect(getByText("frontend developer")).toBeInTheDocument();
    expect(getByText("student in frontend")).toBeInTheDocument();
  });

  test("renders button component correctly", () => {
    const { getByText } = render(<HeaderSection />);
    expect(getByText("Button Text")).toBeInTheDocument(); 
  });

  test("renders image correctly", () => {
    const { getByAltText } = render(<HeaderSection />);
    expect(getByAltText("Landing")).toBeInTheDocument();
  });
});
