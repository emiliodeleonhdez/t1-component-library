import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Coffee } from "lucide-react";

describe("Button", () => {
  it("renders as expected", () => {
    render(<Button variant="primary">My test button</Button>);
    expect(screen.getByText("My test button")).toBeInTheDocument();
  });
  it("should animate button if is Loading...", () => {
    const { container } = render(
      <Button loading={true}>My test button</Button>
    );
    const loadingSpan = container.querySelector(".animate-pulse");
    expect(loadingSpan).toBeInTheDocument();
  });
  it("cursor changes on disable state", () => {
    const { container } = render(
      <Button disabled={true}>My test button</Button>
    );
    const disabledButton = container.querySelector(".cursor-not-allowed");
    expect(disabledButton).toBeInTheDocument();
  });

  it("should render icon when provided", () => {
    const { container } = render(
      <Button icon={<Coffee />} variant="primary">
        With icon
      </Button>
    );
    const iconEl = container.querySelector(".btn-icon");
    expect(iconEl).toBeInTheDocument();
  });
});
