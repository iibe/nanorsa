const range = require("./range");

describe("range():", () => {
  it("should return number in range [min, max]:", () => {
    const list = Array.from({ length: 1e2 }, () =>
      Math.floor(Math.random() * 1e2),
    );

    const set = [...new Set(list)];

    console.log("List of numbers:", set);
  });
});
