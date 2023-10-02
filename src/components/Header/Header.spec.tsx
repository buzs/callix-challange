import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("should render correctly", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeVisible();
  });

  it("should render menu links", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Past Launches")).toBeVisible();
    expect(screen.getByText("Upcoming Launches")).toBeVisible();
  });

  it("should render logo", () => {
    render(<Header />);

    expect(screen.getByRole("img")).toBeVisible();
  });
});
