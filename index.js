// WARNING: with { bit: 16 } there is a huge delay
const rsa = require("./modules/rsa")({ bit: 8 });

const msg = "Hello world";
const enc = rsa.encode(msg);
const dec = rsa.decode(enc);
console.log(">>>", msg, enc, dec);
console.log(rsa.log);
console.log(rsa.key);
