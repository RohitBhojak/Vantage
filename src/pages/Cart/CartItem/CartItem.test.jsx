import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import CartItem from ".";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

const mockProduct = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  rating: {
    rate: 4.7,
    count: 500,
  },
};

const renderCartItem = (cart = [], dispatch = vi.fn()) => {
  const mockContext = { cart, dispatch };
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<Outlet context={mockContext} />}>
          <Route path="/" element={<CartItem product={mockProduct} />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
};

describe("CartItem", () => {
  it("renders product image", () => {
    renderCartItem();
    expect(screen.getByAltText(mockProduct.title)).toHaveAttribute("src", mockProduct.image);
  });

  it("renders product title", () => {
    renderCartItem();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("formats the price correctly using the Vedic system", () => {
    renderCartItem();
    expect(screen.getByText(/₹.*5,599/)).toBeInTheDocument();
  });

  it("renders counter controls (decrement, NumberInput, increment, delete) when product is in cart", () => {
    const activeCart = { 3: 5 };
    renderCartItem(activeCart);

    expect(screen.getByRole("button", { name: /decrement quantity/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /increment quantity/i })).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("5");

    expect(screen.getByRole("button", { name: /remove from cart/i })).toBeInTheDocument();

    expect(screen.queryByRole("button", { name: /add to cart/i })).not.toBeInTheDocument();
  });

  it("dispatches incremented_count when + button is clicked", async () => {
    const mockDispatch = vi.fn();
    const user = userEvent.setup();

    renderCartItem({ 3: 5 }, mockDispatch);

    const plusButton = screen.getByRole("button", { name: /increment quantity/i });
    await user.click(plusButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "incremented_count",
      productId: mockProduct.id,
    });
  });
});
