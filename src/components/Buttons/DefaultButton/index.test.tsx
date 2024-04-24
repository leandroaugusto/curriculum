import { render, screen } from "@testing-library/react";
import Button from ".";

const mockOnClick = jest.fn();

describe("Button", () => {
  it("renders the button component", () => {
    const { container } = render(
      <Button handleClick={mockOnClick} id="button-id" label="Button" />
    );

    const button = screen.getByTestId("button-id-button");

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
