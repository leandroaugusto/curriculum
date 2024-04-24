import { render } from "@testing-library/react";

import Section from ".";

describe("Section", () => {
  it("renders the Section component", () => {
    const { container } = render(
      <Section>
        <p>Test</p>
      </Section>
    );

    expect(container).toMatchSnapshot();
  });
});
