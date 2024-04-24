import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import messages from "../../../../messages/pt.json";
import Main from ".";

jest.mock("@/components/Structure/Section", () => "Section");

describe("Main", () => {
  it("renders the Main structure", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Main />
      </NextIntlClientProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
