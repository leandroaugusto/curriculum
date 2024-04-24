import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading", () => {
  it("renders the Loading element", () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
