import { render, screen } from "@testing-library/react";
import Card from "./Card";

const baseProps = {
  imageSrc: "https://example.com/image.jpg",
  size: "sm" as const,
  title: "This is my card",
  subTitle: "Card subtitle",
  body: <p>I'm the body</p>,
  footer: <p>I'm the footer</p>,
};

const generateMockCard = (props = {}) => {
  return render(<Card {...baseProps} {...props} />);
};

describe("Card", () => {
  it("should render with title", () => {
    generateMockCard();
    expect(screen.getByText("This is my card")).toBeInTheDocument();
  });
  it("renders card on sm size", () => {
    const { container } = generateMockCard();
    expect(container.querySelector(".max-w-sm")).toBeInTheDocument();
  });
  it("should support rendering without image", () => {
    generateMockCard({ imageSrc: undefined });
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
