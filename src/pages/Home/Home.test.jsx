import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from ".";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

describe("Home", () => {
  it("renders the heading", () => {
    renderHome();
    const heading = screen.getByRole("heading", { name: /online shopping/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    renderHome();
    const paragraph = screen.getByText(/lorem ipsum/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    renderHome();
    const image = screen.getByRole("img", { name: /hero/i });
    expect(image).toBeInTheDocument();
  });

  it("renders the shop now navigation link", () => {
    renderHome();
    const link = screen.getByRole("link", { name: /shop now/i });
    expect(link).toHaveAttribute("href", "/products");
  });
});
