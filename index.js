const RSA = require("./rsa");
const rsa = new RSA({ bytes: 4 });

console.log(rsa.info());

const encrypt = rsa.encrypt("Hello world");
const decrypt = rsa.decrypt(encrypt);

console.log(encrypt.length, decrypt.length);
console.log(encrypt, decrypt);
