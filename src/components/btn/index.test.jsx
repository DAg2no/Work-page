import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Btn from "./Btn";

describe("Btn", () => {
  test("renders all social media icons correctly", () => {
    const { getByAltText } = render(<Btn />);
    expect(getByAltText("Gmail")).toBeInTheDocument();
    expect(getByAltText("stackoverflow")).toBeInTheDocument();
    expect(getByAltText("github")).toBeInTheDocument();
    expect(getByAltText("linkedin")).toBeInTheDocument();
  });

  test("clicking on social media icons triggers the correct behavior", () => {
    const { getByAltText } = render(<Btn />);
    const gmailIcon = getByAltText("Gmail");
    const stackoverflowIcon = getByAltText("stackoverflow");
    const githubIcon = getByAltText("github");
    const linkedinIcon = getByAltText("linkedin");

    // You can simulate a click event on each icon and test the expected behavior
    fireEvent.click(gmailIcon);
    // Add your assertions for the expected behavior after clicking the Gmail icon

    fireEvent.click(stackoverflowIcon);
    // Add your assertions for the expected behavior after clicking the Stack Overflow icon

    fireEvent.click(githubIcon);
    // Add your assertions for the expected behavior after clicking the GitHub icon

    fireEvent.click(linkedinIcon);
    // Add your assertions for the expected behavior after clicking the LinkedIn icon
  });
});
