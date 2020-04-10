import { preferredCurrency, getDisplayName } from "./account-utils";

describe("@/utils/currency-utils/preferredCurrency", () => {
  it("random-account", () => {
    const result = preferredCurrency("random");
    expect(result).toEqual("SGD");
  });

  it("valid-account", () => {
    const result = preferredCurrency("HIEN_TIMO");
    expect(result).toEqual("VND");
  });
});

describe("@/utils/currency-utils/getDisplayName", () => {
  it("random-account", () => {
    const result = getDisplayName("random");
    expect(result).toEqual("");
  });

  it("valid-account", () => {
    const result = getDisplayName("HIEN_TIMO");
    expect(result).toEqual("Hien Timo");
  });
});
