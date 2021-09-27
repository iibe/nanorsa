const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");
const range = require("./bin/range");
const round = require("./bin/round");
const atkin = require("./bin/atkin");

const RSA = require("./rsa");
const rsa = new RSA();

// https://github.com/denysdovhan/rsa-labwork/blob/master/index.js
// https://www.educative.io/edpresso/what-is-the-rsa-algorithm
// http://infoprotect.net/varia/algoritm_shifrovaniya_rsa_primer
// https://ru.wikipedia.org/wiki/RSA
// https://ru.wikipedia.org/wiki/Функция_Эйлера

console.log(
  ">>> bingcd():",
  bingcd(-27, 96),
  bingcd(125, -25),
  bingcd(-344, 48),
  bingcd(-344, 0),
);

console.log(
  ">>> binpow():",
  binpow(-2, 3),
  binpow(-16, 3.5),
  binpow(-125, -3.1),
  binpow(16, 15),
);

console.log(
  ">>> round():",
  round(1.005, 2),
  round(-2.35, 1),
  round(3.146, 2),
  round(5.056, 2),
);

const array = [...Array(1000)].map(() => range(0, 5));
console.log(">>> range():", new Set(array.sort((a, b) => a - b)));

console.log(">>> atkin():", atkin(11));
