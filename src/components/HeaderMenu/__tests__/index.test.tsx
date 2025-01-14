import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { HeaderMenu } from "..";

const renderWithProviders = (component: JSX.Element) => {
  const theme = createTheme();
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{component}</BrowserRouter>
    </ThemeProvider>
  );
};

const setMediaQuery = (matches: boolean) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe("HeaderMenu Component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("renders logo and ensures it links to the home page", () => {
    renderWithProviders(<HeaderMenu />);
    const logoLink = screen.getByText("FUTLIVE");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.closest("a")).toHaveAttribute("href", "/");
  });

  test("renders DesktopMenu on large screens", async () => {
    setMediaQuery(false);
    const { findByTestId } = renderWithProviders(<HeaderMenu />);
    expect(await findByTestId("desktop-menu")).toBeInTheDocument();
  });

  test("renders DrawerMenu on small screens", async () => {
    setMediaQuery(true);
    const { findByTestId } = renderWithProviders(<HeaderMenu />);
    const menuButton = await findByTestId("button-menu");
    fireEvent.click(menuButton);

    await waitFor(async () =>
      expect(await screen.findByTestId("drawer-menu")).toBeInTheDocument()
    );
  });
});
