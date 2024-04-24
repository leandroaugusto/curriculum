import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import messages from "../../../../messages/pt.json";
import Header from ".";

jest.mock("@/components/Elements/ProfilePhoto", () => "ProfilePhoto");
jest.mock("@/components/Elements/AvatarName", () => ({
  AvatarName: ({ role }: { role: string }) => <div role={role} />,
}));
jest.mock("@/components/Elements/Languages", () => "Languages");

describe("Header", () => {
  it("renders the Header element", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Header />
      </NextIntlClientProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
