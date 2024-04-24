import { render } from "@testing-library/react";
import DialogCloseIcon from ".";

describe("DialogCloseIcon", () => {
  it("renders the DialogCloseIcon element", () => {
    const { container } = render(<DialogCloseIcon />);

    expect(container).toMatchSnapshot();
  });
});
