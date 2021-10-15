// NOTE: Better to set bit value to 16 since 2 ^ 16 - 1 is a number of Unicode char code. The fewer the number of bits, the faster the encryption will take place, and the greater the chance of error, since not all Unicode characters will be available.
const rsa = require("./rsa")({ bit: 8 });

const m = "Hello world";
const e = rsa.encode(m);
const d = rsa.decode(e);

console.log(rsa.log);
console.log(rsa.key);

console.log(m);
console.log(e);
console.log(d);
