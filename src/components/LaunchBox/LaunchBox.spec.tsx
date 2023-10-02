import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import LaunchBox from "./LaunchBox";

const launch = {
  id: "1",
  name: "Test Launch",
  date_utc: "2021-08-01T00:00:00.000Z",
  details: "Test details",
  links: {
    patch: {
      small: "https://via.placeholder.com/100",
    },
  },
};

describe("<LaunchBox />", () => {
  it("should render correctly", () => {
    render(<LaunchBox {...launch} badge={launch.links.patch.small} />);

    expect(screen.getByRole("launch-box")).toBeVisible();
  });

  it("should render the launch name", () => {
    render(<LaunchBox {...launch} badge={launch.links.patch.small} />);

    expect(screen.getByText(launch.name)).toBeVisible();
  });

  it("should render the launch details", () => {
    render(<LaunchBox {...launch} badge={launch.links.patch.small} />);

    expect(screen.getByText(launch.details)).toBeVisible();
  });

  it("should render the launch badge", () => {
    render(<LaunchBox {...launch} badge={launch.links.patch.small} />);

    expect(screen.getByAltText("Mission Badge")).toBeVisible();
  });

  it("should render a link to the launch page", () => {
    render(<LaunchBox {...launch} badge={launch.links.patch.small} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/launch/${launch.id}`
    );
  });
});
