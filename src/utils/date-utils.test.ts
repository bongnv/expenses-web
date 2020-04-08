import { formatDate, parseDate, beautyFormatDate } from "./date-utils";

describe("@/utils/date-utils/formatDate", () => {
  it("says hello", () => {
    const result = formatDate(new Date(1586352782512));
    expect(result).toEqual("2020-04-08");
  });
});

describe("@/utils/date-utils/parseDate", () => {
  it("happy-path", () => {
    const result = parseDate("2020-04-08");
    expect(result).toEqual(new Date(1586304000000));
  });

  it("undefined", () => {
    const result = parseDate("random string");
    expect(result).toBeUndefined();
  });
});

describe("@/utils/date-utils/beautyFormatDate", () => {
  it("says hello", () => {
    const result = beautyFormatDate(new Date(1586352782512));
    expect(result).toEqual("8-Apr-2020");
  });
});
