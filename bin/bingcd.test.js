const bingcd = require("./bingcd");

describe("bingcd():", () => {
  it("should find greatest common divisor of 2 numbers", () => {
    expect(bingcd(-51, 17)).toBe(17);
    expect(bingcd(-11, -22)).toBe(11);
    expect(bingcd(32, 24)).toBe(8);
    expect(bingcd(17, 19)).toBe(1);
    expect(bingcd(32, 0)).toBe(32);
    expect(bingcd(0, 24)).toBe(24);
    expect(bingcd(0, 0)).toBe(0);
  });

  it("should throw error", () => {
    const message = "Parameters should be integers.";
    expect(() => bingcd(0, 1.2)).toThrow(Error);
    expect(() => bingcd(0, 1.2)).toThrow(message);
    expect(() => bingcd(2.4, 0)).toThrow(Error);
    expect(() => bingcd(2.4, 0)).toThrow(message);
    expect(() => bingcd(null, null)).toThrow(Error);
    expect(() => bingcd(null, null)).toThrow(message);
  });
});
