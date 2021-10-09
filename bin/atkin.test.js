const atkin = require("./atkin");

describe("atkin():", () => {
  it("should return an empty array", () => {
    expect(atkin()).toEqual([]);
  });

  it("should generate all primes less than 20", () => {
    expect(atkin(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it("should throw an error", () => {
    const error1 = () => atkin("String value");
    const error2 = () => atkin(-1);

    expect(error1).toThrow(Error);
    expect(error1).toThrow("Parameter should be an integer number.");
    expect(error2).toThrow(Error);
    expect(error2).toThrow("Parameter should be a positive number.");
  });
});
