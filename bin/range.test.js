const range = require("./range");

describe("range():", () => {
  it("should return number in range [min, max]:", () => {
    const randoms = Array.from({ length: 1e3 }, () =>
      Math.floor(Math.random() * 10),
    );
    const uniques = new Set(randoms);
    const [min, max] = [Math.min(...uniques), Math.max(...uniques)];

    while (uniques.size) {
      const r = range(min, max);
      expect(r).toBeGreaterThanOrEqual(min);
      expect(r).toBeLessThanOrEqual(max);
      if (uniques.has(r)) uniques.delete(r);
    }
  });
});
