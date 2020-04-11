import { categoryName } from "./category-utils";

describe("@/utils/category-utils/categoryName", () => {
  it("happy-path", () => {
    const result = categoryName("BANK_INTEREST");
    expect(result).toEqual("Bank Interest");
  });
});
