import { useReactToPrint } from "react-to-print";
import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("renders the app container", () => {
    const { container } = render(
      <App
        printLabel="printLabel"
        shareLabel="shareLabel"
        shareTitle="shareTitle"
        shareEmailBody="shareEmailBody"
      >
        <p>App</p>
      </App>
    );

    const app = screen.getByTestId("app-container");

    expect(app).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should call print method by clicking on button to print", () => {
    render(
      <App
        printLabel="printLabel"
        shareLabel="shareLabel"
        shareTitle="shareTitle"
        shareEmailBody="shareEmailBody"
      >
        <p>App</p>
      </App>
    );
    const { result } = renderHook(() => useReactToPrint({}));
    const printButton = screen.getByTestId("print-button");

    fireEvent.click(printButton);

    expect(result.current).toEqual(expect.any(Function));
  });
});
