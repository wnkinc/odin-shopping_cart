import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom"; // To handle Link routing in the test
import ErrorPage from "./ErrorPage";

describe("ErrorPage component", () => {
  it("displays the error message", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    // Check if the error message is displayed
    const errorMessage = screen.getByText(
      /oh no, this route doesn&apos;t exist/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("displays a link to go back to the home page", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    // Check if the link is present
    const homeLink = screen.getByRole("link", {
      name: /you can go back to the home page by clicking here/i,
    });
    expect(homeLink).toBeInTheDocument();

    // Check if the link has the correct href to navigate back to the home page
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
