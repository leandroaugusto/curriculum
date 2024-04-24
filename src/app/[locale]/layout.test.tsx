import { render, screen } from "@testing-library/react";

import RootLayout from "./layout";

jest.mock("next/navigation", () => ({
  notFound: () => <div data-testid="mock-not-found" />,
}));

jest.mock("@/constants/locales", () => ({
  locales: ["en", "pt"],
}));

describe("RootLayout", () => {
  it("renders the RootLayout", () => {
    const { container } = render(
      <RootLayout params={{ locale: "en" }}>
        <p>Test</p>
      </RootLayout>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render notFound page when locale wasn't found", () => {
    render(
      <RootLayout params={{ locale: "es" }}>
        <p>Test</p>
      </RootLayout>
    );

    const notFoundPage = screen.getByTestId("mock-not-found");

    expect(notFoundPage).toBeInTheDocument();
  });

  it("should render HTML's lang equal pt-BR", () => {
    render(
      <RootLayout params={{ locale: "pt" }}>
        <p>Test</p>
      </RootLayout>
    );
    const root = screen.getByTestId("root-layout");

    expect(root).toHaveAttribute("lang", "pt-BR");
  });
});
