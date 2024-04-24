import { render, screen, fireEvent } from "@testing-library/react";

import ScrollButton from ".";

global.scrollTo = jest.fn();

describe("Button", () => {
  it("renders the button component", () => {
    const { container } = render(<ScrollButton label="Scroll Button" />);
    expect(container).toMatchSnapshot();
  });

  it("should scroll to  bottom after click the button", () => {
    render(<ScrollButton label="Scroll Button" />);

    const printButton = document.createElement("button");
    printButton.setAttribute("id", "print");
    const buttonTop = printButton.offsetTop;
    document.body.appendChild(printButton);

    const button = screen.getByTestId("scroll-to-bottom-button");

    fireEvent.click(button);

    expect(global.scrollTo).toHaveBeenCalledTimes(1);
    expect(global.scrollTo).toHaveBeenCalledWith({
      top: buttonTop,
      behavior: "smooth",
    });
  });
});
