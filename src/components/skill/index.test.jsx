import React from "react";
import { render } from "@testing-library/react";
import SkillSection from "./SkillSection";

describe("SkillSection", () => {
  test("renders language skills correctly", () => {
    const { getByAltText, getByText } = render(<SkillSection />);

    // Check for the existence of language skill images
    expect(getByAltText("JS")).toBeInTheDocument();
    expect(getByAltText("HTML")).toBeInTheDocument();
    expect(getByAltText("CSS")).toBeInTheDocument();

    // Check for the existence of language skill titles
    expect(getByText("Language know")).toBeInTheDocument();
  });

  test("renders frontend skills correctly", () => {
    const { getByAltText, getByText } = render(<SkillSection />);

    // Check for the existence of frontend skill images
    expect(getByAltText("React")).toBeInTheDocument();
    expect(getByAltText("Bootstrap")).toBeInTheDocument();
    expect(getByAltText("Material-UI")).toBeInTheDocument();

    // Check for the existence of frontend skill titles
    expect(getByText("Frontend")).toBeInTheDocument();
  });

  test("renders backend skills correctly", () => {
    const { getByAltText, getByText } = render(<SkillSection />);

    // Check for the existence of backend skill image
    expect(getByAltText("JS")).toBeInTheDocument();

    // Check for the existence of backend skill title
    expect(getByText("Backend, Database and Cloud")).toBeInTheDocument();
  });
});
