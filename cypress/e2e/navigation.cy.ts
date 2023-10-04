describe("Navigation", () => {
  it("Header Menu", () => {
    cy.visit("/");

    // Check that the title is correct
    cy.get("title").should("contain", "SpaceX Launches");

    // Check that the header is correct
    cy.get("a").should("contain", "Home");
    const pastLaunchesLink = cy.get("a").should("contain", "Past Launches");
    cy.get("a").should("contain", "Upcoming Launches");

    // Click on the "Past Launches" link, and navigate to the past launches page
    pastLaunchesLink.click();

    // Check that the URL is correct
    cy.url().should("include", "/launches/past");

    // Check that the title is correct
    cy.get("title").should("contain", "Past Launches");

    // Check that the header is correct
    cy.get("a").should("contain", "Home");
    cy.get("a").should("contain", "Past Launches");
    cy.get("a").should("contain", "Upcoming Launches");

    // Return to the homepage
    cy.get("a").contains("Home").click();

    // Check that the URL is correct
    cy.url().should("include", "/");

    // Check that the title is correct
    cy.get("title").should("contain", "SpaceX Launches");

    // Check that the header is correct
    cy.get("a").should("contain", "Home");
    cy.get("a").should("contain", "Past Launches");
    const upcomingLaunchesLink = cy
      .get("a")
      .should("contain", "Upcoming Launches");

    // Click on the "Upcoming Launches" link, and navigate to the upcoming launches page
    upcomingLaunchesLink.click();

    // Check that the URL is correct
    cy.url().should("include", "/launches/upcoming");

    // Check that the title is correct
    cy.get("title").should("contain", "Upcoming Launches");
  });

  it("Open last and next launch", () => {
    cy.visit("/");

    cy.get("[data-test='last-launch']").click();

    cy.url().should("include", "/launch/");

    // Return to the homepage
    cy.get("a").contains("Home").click();

    cy.get("[data-test='next-launch']").click();

    cy.url().should("include", "/launch/");
  });

  it("Scroll and open a launch in the past and upcoming page", () => {
    cy.visit("/launches/upcoming");
  });
});
