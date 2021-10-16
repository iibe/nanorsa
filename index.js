const rsa = require("./rsa")({ bit: 8 });
const msg = "Hello world";
const enc = rsa.encode(msg);
const dec = rsa.decode(enc);
console.log(msg, enc, dec);
console.log(rsa.log);
console.log(rsa.key);

//TODO Improve atkin to handle numbers greater than 2^53 - 1 (let i = 4 * x * x + y * y)
