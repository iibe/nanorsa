const binpow = require("./bin/binpow");
const GCD = require("./bin/GCD");

const RSA = require("./rsa");
const rsa = new RSA();

// https://github.com/denysdovhan/rsa-labwork/blob/master/index.js
// https://www.educative.io/edpresso/what-is-the-rsa-algorithm
// http://infoprotect.net/varia/algoritm_shifrovaniya_rsa_primer
// https://ru.wikipedia.org/wiki/RSA
// https://ru.wikipedia.org/wiki/Функция_Эйлера

console.log(GCD(2, 4), GCD(125, 25));
console.log(binpow(2, 4), binpow(125, 3));
