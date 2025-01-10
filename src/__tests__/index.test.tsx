import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render App header", () => {
    render(<App />);

    expect(screen.getByText(/Olá Futlive/i)).toBeInTheDocument();
  });
});
