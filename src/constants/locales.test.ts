import { locales } from "./locales";

describe("locales", () => {
  it("should export locales constant", () => {
    expect(locales).toStrictEqual(['en', 'pt'])
  })
})
