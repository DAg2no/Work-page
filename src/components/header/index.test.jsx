import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("renders the header container", () => {
    const { container } = render(<Header />);
    const headerContainer = container.querySelector(".header-container");
    expect(headerContainer).toBeInTheDocument();
  });

  it("renders the title with 'Daniel Uribe'", () => {
    const { getByText } = render(<Header />);
    const title = getByText("Daniel Uribe");
    expect(title).toBeInTheDocument();
  });
});