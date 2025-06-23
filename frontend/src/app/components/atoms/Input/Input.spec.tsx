import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders as expected", () => {
    render(
      <Input inputType="email" placeHolder="your@example.com" label="Email" />
    );
    const input = screen.getByPlaceholderText("your@example.com");
    expect(input).toBeInTheDocument();
  });
  it("renders helpter text", () => {
    render(
      <Input
        inputType="text"
        placeHolder="Enter your text here"
        helperText="Special characters are not allowed"
      />
    );
    expect(screen.getByText("Special characters are not allowed"));
  });
  it("renders a disabled input", () => {
    const { container } = render(
      <Input
        inputType="text"
        placeHolder="Enter your text here"
        helperText="Special characters are not allowed"
        disabled={true}
      />
    );
    expect(container.querySelector(".cursor-not-allowed"));
  });
});
