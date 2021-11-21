const range = require("../utils/range");

describe("range():", () => {
  it("should return integer in range [min, max]:", () => {
    const uniques = new Set([-3, -2, -1, 0, 1, 2, 3]);
    const [min, max] = [Math.min(...uniques), Math.max(...uniques)];

    while (uniques.size) {
      const random = range(min, max);
      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      if (uniques.has(random)) uniques.delete(random);
    }
  });

  it("should return only one number", () => {
    expect(range(0, 0)).toBe(0);
    expect(range(1, 1)).toBe(1);
  });

  it("should throw error", () => {
    const message = "Parameters should be integers.";
    expect(() => range(0, 3.2)).toThrow(Error);
    expect(() => range(0, 3.2)).toThrow(message);
    expect(() => range(2.4, 0)).toThrow(Error);
    expect(() => range(2.4, 0)).toThrow(message);
    expect(() => range(null, null)).toThrow(Error);
    expect(() => range(null, null)).toThrow(message);
  });
});
