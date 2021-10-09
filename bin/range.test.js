const range = require("./range");

describe("range():", () => {
  it("should return number in range [min, max]:", () => {
    const randoms = Array.from({ length: 1e2 }, () =>
      Math.floor(Math.random() * 10),
    );

    const uniques = new Set(randoms);
    const [min, max] = [Math.min(...uniques), Math.max(...uniques)];

    while (uniques.size) {
      const rnd = range(min, max);

      expect(rnd).toBeGreaterThanOrEqual(min);
      expect(rnd).toBeLessThanOrEqual(max);

      if (uniques.has(rnd)) {
        uniques.delete(rnd);
      }
    }
  });
});
