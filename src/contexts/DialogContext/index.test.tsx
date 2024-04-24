import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { DialogProvider, DialogContext } from ".";

describe("DialogProvider", () => {
  it("renders the DialogProvider", () => {
    const { container, getByTestId } = render(
      <DialogProvider>
        <DialogContext.Consumer>
          {({ toggle }) => <button data-testid="mock-share" onClick={toggle} />}
        </DialogContext.Consumer>
      </DialogProvider>
    );

    fireEvent.click(getByTestId("mock-share"));

    expect(container).toMatchSnapshot();
  });
});
