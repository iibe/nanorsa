(async function Bootstrap() {
  try {
    // NOTE: Better to set bit value to 16 since 2 ^ 16 - 1 is a number of Unicode char code. The fewer the number of bits, the faster the encryption will take place, and the greater the chance of error, since not all Unicode characters will be available.
    const message = "Hello world";
    const encoded = await require("./service/encode")(message);
    const decoded = await require("./service/decode")(encoded);
    console.log(message);
    console.log(encoded);
    console.log(decoded);
  } catch (error) {
    console.error(error);
  }
})();
