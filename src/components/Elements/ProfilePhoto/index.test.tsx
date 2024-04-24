import { render } from "@testing-library/react";
import ProfilePhoto from ".";
import { faker } from "@faker-js/faker";

jest.mock("@/assets/images/facebook.jpeg");

describe("ProfilePhoto", () => {
  it("renders the ProfilePhoto element", () => {
    const image_url = faker.image.url();
    const { container } = render(<ProfilePhoto url={image_url} />);

    expect(container).toMatchSnapshot();
  });

  it("renders the ProfilePhoto without url prop", () => {
    const { container } = render(<ProfilePhoto />);

    expect(container).toMatchSnapshot();
  });
});
