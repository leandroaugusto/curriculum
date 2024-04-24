import { render } from "@testing-library/react";

import Languages from ".";

describe("Languages", () => {
  it("renders the Languages element", () => {
    const { container } = render(<Languages />);
    expect(container).toMatchSnapshot();
  });
});
