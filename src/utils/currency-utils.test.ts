import { preferredCurrency } from "./currency-utils";

describe("@/utils/currency-utils/preferredCurrency", () => {
  it("random-account", () => {
    const result = preferredCurrency("random");
    expect(result).toEqual("SGD");
  });
});

describe("@/utils/currency-utils/preferredCurrency", () => {
  it("valid-account", () => {
    const result = preferredCurrency("HIEN_TIMO");
    expect(result).toEqual("VND");
  });
});
