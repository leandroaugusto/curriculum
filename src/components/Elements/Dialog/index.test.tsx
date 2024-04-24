import { render, screen } from "@testing-library/react";
import Dialog from ".";

describe("Dialog", () => {
  it("renders the Dialog element", () => {
    const { container } = render(
      <Dialog open shareTitle="shareTitle" shareEmailBody="shareEmailBody" />
    );

    const dialog = screen.getByTestId("dialog-container");

    expect(dialog).toHaveClass("block");
    expect(container).toMatchSnapshot();
  });

  it("should hidden dialog if open is false", () => {
    const { container } = render(
      <Dialog
        open={false}
        shareTitle="shareTitle"
        shareEmailBody="shareEmailBody"
      />
    );

    const dialog = screen.getByTestId("dialog-container");

    expect(dialog).toHaveClass("hidden");
    expect(container).toMatchSnapshot();
  });
});
