const atkin = require("./atkin");

describe("atkin():", () => {
  it("should generate all primes less than 20", () => {
    expect(atkin(20)).toEqual([2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n]);
  });

  it("should throw an error", () => {
    const errorMessage = "Parameter should be a positive integer.";

    expect(() => atkin("str")).toThrow(Error);
    expect(() => atkin("str")).toThrow(errorMessage);
    expect(() => atkin(-1000)).toThrow(Error);
    expect(() => atkin(-1000)).toThrow(errorMessage);
    expect(() => atkin()).toThrow(Error);
    expect(() => atkin()).toThrow(errorMessage);
  });
});
