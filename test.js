const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");
const range = require("./bin/range");
const round = require("./bin/round");
const atkin = require("./bin/atkin");

console.log(
  ">>> binpow():",
  binpow(-2, 3),
  binpow(-16, 3.5),
  binpow(-125, -3.1),
  binpow(16, 15),
);

console.log(
  ">>> bingcd():",
  bingcd(-27, 96),
  bingcd(125, -25),
  bingcd(-344, 48),
  bingcd(-344, 0),
);

const array = [...Array(1000)].map(() => range(0, 5));
console.log(">>> range():", new Set(array.sort((a, b) => a - b)));

console.log(
  ">>> round():",
  round(1.005, 2),
  round(-2.35, 1),
  round(3.146, 2),
  round(5.056, 2),
);

console.log(">>> atkin():", atkin(23));
