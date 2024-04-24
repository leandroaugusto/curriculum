import { render } from "@testing-library/react";
import DialogContent from ".";

describe("DialogContent", () => {
  it("renders the DialogCloseIcon element", () => {
    const { container } = render(
      <DialogContent>
        <p>Children</p>
      </DialogContent>
    );

    expect(container).toMatchSnapshot();
  });
});
