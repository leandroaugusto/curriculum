import { render } from "@testing-library/react";
import Article from ".";

describe("Article", () => {
  it("renders the Article element", () => {
    const { container } = render(
      <Article company="company" role="role" year="2010" jobType="jobType">
        <p>Description</p>
      </Article>
    );

    expect(container).toMatchSnapshot();
  });
});
