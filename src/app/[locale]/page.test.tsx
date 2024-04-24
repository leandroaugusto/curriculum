import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import messages from "../../../messages/pt.json";
import Home from "./page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
) as jest.Mock;

jest.mock("@/contexts/DialogContext", () => ({
  DialogProvider: () => (
    <div className="dialog-provider" data-testid="mock-dialog-provider" />
  ),
}));

describe("Home", () => {
  it("renders the Home page", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Home />
      </NextIntlClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
