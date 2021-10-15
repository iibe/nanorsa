const RSA = require("./rsa");
const rsa = new RSA({ bytes: 32 });

const m = "Hello world"; // initial message
const e = rsa.encrypt(m); // encrypted value
const d = rsa.decrypt(e); // decrypted value
const i = rsa.info; // intermediate values
const k = rsa.keys; // public and private key

console.log("M:", m);
console.log("E:", e);
console.log("D:", d);
console.log("I:", i);
console.log("K:", k);

// NOTE: https://www.cs.utexas.edu/~mitra/honors/soln.html
