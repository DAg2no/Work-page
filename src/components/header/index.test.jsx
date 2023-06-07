import { render } from "@testing-library/react";
import HeaderSection from "./HeaderSection";

describe("HeaderSection Component", () => {
  test("renders navbar", () => {
    const { getByTestId } = render(<HeaderSection />);
    const navbar = getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders header content", () => {
    const { getByText } = render(<HeaderSection />);
    const title = getByText(/hi, i'm daniel/i);
    expect(title).toBeInTheDocument();
    const typingElement = getByText(/beginner development/i);
    expect(typingElement).toBeInTheDocument();
  });

  test("renders social media buttons", () => {
    const { getByText } = render(<HeaderSection />);
    const githubButton = getByText(/github/i);
    expect(githubButton).toBeInTheDocument();
    const linkedInButton = getByText(/linkedin/i);
    expect(linkedInButton).toBeInTheDocument();
  });
});
