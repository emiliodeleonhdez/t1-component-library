import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { useState } from "react";

const MockModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
        size="md"
        footer={<div>Footer content</div>}
      >
        <p>Modal body</p>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  it("should render as expected", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Test Modal"
        size="md"
        footer={<p>Footer content</p>}
      >
        <p>Modal body content</p>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal body content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("opens modal when button is clicked", () => {
    render(<MockModalWrapper />);
    const button = screen.getByText("Open Modal");
    fireEvent.click(button);
    expect(screen.getByText("My Modal")).toBeInTheDocument();
  });

  it("should close modal when close button is clicked", () => {
    const { container } = render(<MockModalWrapper />);
    const openModalButton = screen.getByText("Open Modal");
    fireEvent.click(openModalButton);

    expect(screen.getByText("My Modal")).toBeInTheDocument();

    const closeButton = container.querySelector(".modal-close-btn");

    fireEvent.click(closeButton!);
    expect(screen.queryByText("My Modal")).not.toBeInTheDocument();
  });
});
