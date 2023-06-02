import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders name of a user", () => {
    const { getByText } = render(<NavBar />);
    const name = getByText(/Daniel Uribe/i);
    expect(name).toBeInTheDocument();
  });

  test("changes theme mode after clicking the button", () => {
    const handleThemeChangeMock = jest.fn();
    const { queryByTestId } = render(
      <NavBar themeMode="light" handleThemeChange={handleThemeChangeMock} />
    );
    const button = queryByTestId("theme-button");
    fireEvent.click(button);
    expect(handleThemeChangeMock).toBeCalledTimes(1);
  });
});
