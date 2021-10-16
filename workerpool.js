const workerpool = require("workerpool");

// NOTE: Better to set bit value to 16 since 2 ^ 16 - 1 is a number of Unicode char code. The fewer the number of bits, the faster the encryption will take place, and the greater the chance of error, since not all Unicode characters will be available.
const rsa = require("./rsa").singleton({ bit: 16 });

workerpool.worker({
  encode: rsa.encode,
  decode: rsa.decode,
});
