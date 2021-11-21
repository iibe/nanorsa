const bingcd = require("../utils/bingcd");

describe("bingcd():", () => {
  it("should find greatest common divisor of 2 numbers", () => {
    expect(bingcd(-51n, 17n)).toBe(17n);
    expect(bingcd(-11n, -22n)).toBe(11n);
    expect(bingcd(32n, 24n)).toBe(8n);
    expect(bingcd(17n, 19n)).toBe(1n);
    expect(bingcd(32n, 0n)).toBe(32n);
    expect(bingcd(0n, 24n)).toBe(24n);
    expect(bingcd(0n, 0n)).toBe(0n);
  });

  it("should throw error", () => {
    const message = "Parameters should have BigInt type.";
    expect(() => bingcd(null, null)).toThrow(Error);
    expect(() => bingcd(null, null)).toThrow(message);
  });
});
