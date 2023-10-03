import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import YoutubeFrame from "./YoutubeFrame";

const embedId = "0qo78R_yYFA";

describe("<YoutubeFrame />", () => {
  it("should render correctly", () => {
    render(<YoutubeFrame embedId={embedId} />);

    expect(screen.getByTitle("Embedded youtube")).toBeVisible();
  });

  it("should not have embedId", () => {
    render(<YoutubeFrame embedId={null} />);

    expect(screen.getByText("No video")).toBeVisible();
  });
});
