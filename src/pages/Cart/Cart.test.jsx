import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useOutletContext } from "react-router";
import Cart from ".";
import useFetchCart from "../../hooks/useFetchCart";
import generateBill from "../../helper/generateBill";

// Mock external dependencies
vi.mock("react-router", () => ({
  useOutletContext: vi.fn(),
}));

vi.mock("../../hooks/useFetchCart", () => ({
  default: vi.fn(),
}));

vi.mock("../../helper/generateBill", () => ({
  default: vi.fn(),
}));

// Mock child components
vi.mock("./CartItem", () => ({
  default: ({ product }) => <div data-testid="cart-item">{product.title}</div>,
}));
vi.mock("./CartItem/CartItemSkeleton", () => ({
  default: () => <div data-testid="cart-skeleton" />,
}));
vi.mock("./Bill", () => ({
  default: ({ bill }) => <div data-testid="bill-container">Total: {bill?.total}</div>,
}));
vi.mock("./Bill/BillSkeleton", () => ({
  default: () => <div data-testid="bill-skeleton" />,
}));
vi.mock("./EmptyCart", () => ({
  default: () => <div data-testid="empty-cart" />,
}));

describe("Cart Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders EmptyCart when the cart is empty", () => {
    vi.mocked(useOutletContext).mockReturnValue({ cart: {} });
    vi.mocked(useFetchCart).mockReturnValue({ data: [], isLoading: false, error: null });

    render(<Cart />);
    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });

  it("renders skeletons and BillSkeleton while loading", () => {
    const mockCart = { 1: 2, 2: 1 }; // IDs 1 and 2
    vi.mocked(useOutletContext).mockReturnValue({ cart: mockCart });
    vi.mocked(useFetchCart).mockReturnValue({ data: null, isLoading: true, error: null });

    render(<Cart />);

    expect(screen.getAllByTestId("cart-skeleton")).toHaveLength(2);
    expect(screen.getByTestId("bill-skeleton")).toBeInTheDocument();
  });

  it("renders cart items and a bill after successful fetch", () => {
    const mockCart = { 1: 1 };
    const mockItems = [{ id: 1, title: "Laptop" }];
    const mockBill = { total: 100 };

    vi.mocked(useOutletContext).mockReturnValue({ cart: mockCart });
    vi.mocked(useFetchCart).mockReturnValue({ data: mockItems, isLoading: false, error: null });
    vi.mocked(generateBill).mockReturnValue(mockBill);

    render(<Cart />);

    expect(screen.getByTestId("cart-item")).toHaveTextContent("Laptop");
    expect(screen.getByTestId("bill-container")).toHaveTextContent("Total: 100");
    // Verify generateBill was called with correct constants
    expect(generateBill).toHaveBeenCalledWith(mockCart, mockItems, 10, 1);
  });

  it("throws an error if fetch fails", () => {
    vi.mocked(useOutletContext).mockReturnValue({ cart: { 1: 1 } });
    vi.mocked(useFetchCart).mockReturnValue({
      data: null,
      isLoading: false,
      error: "Fetch failed",
    });

    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<Cart />)).toThrow("Fetch failed");

    spy.mockRestore();
  });
});
