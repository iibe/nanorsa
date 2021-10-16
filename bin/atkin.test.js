const atkin = require("./atkin");

describe("atkin():", () => {
  it("should generate primes list", () => {
    expect(atkin(0)).toEqual([]);
    expect(atkin(1)).toEqual([]);
    expect(atkin(2)).toEqual([]);
    expect(atkin(3)).toEqual([2]);
    expect(atkin(4)).toEqual([2, 3]);
    expect(atkin(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it("should throw an error", () => {
    const message = "Parameter should be a positive integer.";
    expect(() => atkin(null)).toThrow(Error);
    expect(() => atkin(null)).toThrow(message);
    expect(() => atkin(-123)).toThrow(Error);
    expect(() => atkin(-123)).toThrow(message);
  });
});
