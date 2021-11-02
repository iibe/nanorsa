const binpow = require("./binpow");
const { $65535 } = require("../constants/binpow");

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

  it("should calculate the max values", () => {
    // NOTE: UTF-16 size is 2^16 - 1
    const size = BigInt(2 ** 16 - 1); // 65535
    const result = binpow(size, size);
    expect(result).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
    expect(result).toBe($65535);
  });
});
