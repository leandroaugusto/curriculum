import { render, screen } from "@testing-library/react";

import Knowledge from ".";

describe("Knowledge", () => {
  it("renders the Knowledge element", () => {
    const { container } = render(<Knowledge name="name" value={10} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the Knowledge element with fill color", () => {
    render(<Knowledge name="name" value={5} />);

    const lastItemFilled = screen.getByTestId("knowledge-item-4");
    const firstItemEmpty = screen.getByTestId("knowledge-item-5");

    expect(lastItemFilled).toHaveClass("filled bg-slate-600");
    expect(firstItemEmpty).toHaveClass("empty bg-slate-300");
  });
});
