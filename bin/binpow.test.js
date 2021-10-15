const binpow = require("./binpow");

describe("binpow():", () => {
  it("should raise a power of big integer", () => {
    expect(binpow(2n, 4n)).toBe(16n);
    expect(binpow(2n, 6n)).toBe(64n);
    expect(binpow(2n, 8n)).toBe(256n);
    expect(binpow(-2n, 3n)).toBe(-8n);
  });

  it("should throw error", () => {
    const errorMessage = "Parameters should be a big integers.";

    expect(() => binpow(1, 123)).toThrow(Error);
    expect(() => binpow(1, 123)).toThrow(errorMessage);
    expect(() => binpow(0, 2n)).toThrow(Error);
    expect(() => binpow(0, 2n)).toThrow(errorMessage);
  });
});
