const binpow = require("./binpow");

describe("binpow():", () => {
  it("should raise a power of big integer", () => {
    expect(binpow(2n, 4n)).toBe(16n);
    expect(binpow(0n, 6n)).toBe(0n);
    expect(binpow(2n, 0n)).toBe(1n);
    expect(binpow(-2n, 3n)).toBe(-8n);
  });
  it("should throw error", () => {
    const message = "Parameters should be a big integers.";
    expect(() => binpow(1, 123)).toThrow(Error);
    expect(() => binpow(1, 123)).toThrow(message);
  });
});
