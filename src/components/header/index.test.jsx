import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import NavBar from "../../components/navbar";
import Btn from "../btn";

describe("Header Component", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  
  it("contains a NavBar component", () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toBe(true);
  });
  
  it("contains a Btn component", () => {
    expect(wrapper.containsMatchingElement(<Btn />)).toBe(true);
  });
  
  it("contains a Typography component with 'hi, i'm daniel' text", () => {
    expect(wrapper.find(Typography).contains("hi, i'm daniel")).toBe(true);
  });
  
  it("contains a Typed component with 'beginner development', 'frontend developer' and 'student in frontend' strings", () => {
    expect(wrapper.find(Typed).prop("strings")).toEqual([
      "beginner development",
      "frontend developer",
      "student in frontend",
    ]);
  });
  
  it("does not show landing image on small screens", () => {
    expect(wrapper.find({ smDown: true }).exists()).toBe(true);
    expect(wrapper.find({ md: 7 }).exists()).toBe(false);
  });
  
  it("shows landing image on medium and larger screens", () => {
    expect(wrapper.find({ md: 7 }).exists()).toBe(true);
    expect(wrapper.find({ smDown: true }).exists()).toBe(false);
  });
});
