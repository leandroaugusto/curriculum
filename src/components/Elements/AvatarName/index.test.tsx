import { render, screen, waitFor } from "@testing-library/react";
import { AvatarName } from ".";
import { AvatarNameProps } from "./types";

const MOCK_DATA = {
  bio: "bio",
  name: "Leandro Costa",
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
) as jest.Mock;

async function asyncComponent(
  Component: React.FC<AvatarNameProps>,
  props: AvatarNameProps
): Promise<any> {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

describe("AvatarName", () => {
  it("renders the AvatarName element", async () => {
    const AvatarResolved = await asyncComponent(AvatarName, {
      actionsLabel: "actionsLabel",
      role: "role",
    });

    const { container } = render(<AvatarResolved />);

    fetch("https://api.github.com/users/leandroaugusto");

    const avatar = screen.getByTestId("avatar-name");

    expect(avatar).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render default username and bio", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const AvatarResolved = await asyncComponent(AvatarName, {
      actionsLabel: "actionsLabel",
      role: "role",
    });

    render(<AvatarResolved />);
    const heading1 = screen.getByTestId("username");
    const heading2 = screen.getByTestId("bio");

    const res = await fetch("https://api.github.com/users/usernotfound");
    const user = await res.json();

    waitFor(() => {
      expect(user.name).toEqual(undefined);
      expect(user.bio).toEqual(undefined);
      expect(heading1).toHaveTextContent("Leandro Augusto da Costa");
      expect(heading2).toHaveTextContent("role");
    });
  });

  it("should render API username and bio", async () => {
    const AvatarResolved = await asyncComponent(AvatarName, {
      actionsLabel: "actionsLabel",
      role: "role",
    });

    render(<AvatarResolved />);

    const res = await fetch("https://api.github.com/users/leandroaugusto");
    const user = await res.json();

    waitFor(() => {
      expect(user.name).toEqual("Leandro Costa");
      expect(user.bio).toEqual("bio");
    });
  });
});
