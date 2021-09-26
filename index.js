const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");

const RSA = require("./rsa");
const rsa = new RSA();

// https://github.com/denysdovhan/rsa-labwork/blob/master/index.js
// https://www.educative.io/edpresso/what-is-the-rsa-algorithm
// http://infoprotect.net/varia/algoritm_shifrovaniya_rsa_primer
// https://ru.wikipedia.org/wiki/RSA
// https://ru.wikipedia.org/wiki/Функция_Эйлера

console.log(
  bingcd(-27, 96),
  bingcd(125, -25),
  bingcd(-344, 48),
  bingcd(-344, 0),
);

console.log(
  binpow(-2, 3),
  binpow(-16, 3.5),
  binpow(-125, -3.1),
  binpow(16, 15),
);
