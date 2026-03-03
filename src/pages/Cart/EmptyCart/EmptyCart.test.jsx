import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import EmptyCart from ".";

const renderEmptyCart = () =>
  render(
    <MemoryRouter>
      <EmptyCart />
    </MemoryRouter>,
  );

describe("EmptyCart", () => {
  it("renders the empty cart message", () => {
    renderEmptyCart();
    const message = screen.getByText(/your cart is empty/i);
    expect(message).toBeInTheDocument();
  });

  it("renders the shop now link", () => {
    renderEmptyCart();
    const link = screen.getByRole("link", { name: /shop now/i });
    expect(link).toHaveAttribute("href", "/products");
  });

  it("renders the empty cart image", () => {
    renderEmptyCart();
    const image = screen.getByRole("img", { name: /empty cart/i });
    expect(image).toBeInTheDocument();
  });
});
