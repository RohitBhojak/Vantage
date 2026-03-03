import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Bill from ".";

const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockBill = {
  items: [
    { label: "Subtotal", value: "₹4,999" },
    { label: "Shipping", value: "₹100" },
  ],
  total: "₹5,099",
};

const renderBill = (dispatch = vi.fn()) => {
  const user = userEvent.setup();
  const mockContext = { dispatch };

  return {
    user,
    dispatch,
    ...render(
      <MemoryRouter>
        <Routes>
          <Route element={<Outlet context={mockContext} />}>
            <Route path="/" element={<Bill bill={mockBill} />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    ),
  };
};

describe("Bill", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all bill items and the total amount", () => {
    renderBill();

    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("₹5,099")).toBeInTheDocument();
    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("₹100")).toBeInTheDocument();
    expect(screen.getByText("Total Amount")).toBeInTheDocument();
  });

  it("opens the modal when Checkout button is clicked", async () => {
    const { user } = renderBill();

    // Modal content should not be visible initially
    expect(screen.queryByText(/thanks for shopping/i)).not.toBeInTheDocument();

    const checkoutBtn = screen.getByRole("button", { name: /checkout/i });
    await user.click(checkoutBtn);

    // Modal content should now be visible
    expect(screen.getByText(/thanks for shopping/i)).toBeInTheDocument();
  });

  it("dispatches empty_cart and navigates to products on success", async () => {
    const { user, dispatch } = renderBill();

    await user.click(screen.getByRole("button", { name: /checkout/i }));

    const continueBtn = screen.getByRole("button", { name: /continue shopping/i });
    await user.click(continueBtn);

    expect(dispatch).toHaveBeenCalledWith({ type: "empty_cart" });
    expect(mockNavigate).toHaveBeenCalledWith("/products", { viewTransition: true });
  });
});
