const Generator = require("../modules/generator");
const binpow = require("../utils/binpow");

class RSA extends Generator {
  static #instance;

  /**
   * Creates only one instance of RSA class throughout the app.
   * @param {object} options option list.
   * @param {number} options.bit bit complexity (either 4, or 8, or 16).
   */
  static singleton(options) {
    if (![4, 8, 16].includes(options.bit)) {
      throw new Error("Bit complexity must be either 4, or 8, or 16");
    }
    return (RSA.#instance = RSA.#instance ?? new RSA(options));
  }

  /**
   * Constructor of RSA class.
   * @param {object} options option list.
   * @param {number} options.bit - bit complexity.
   */
  constructor({ bit }) {
    super(bit);
  }

  /**
   * @param {number} number number to encrypt.
   * @return {number} encrypted number.
   */
  #encrypt(number) {
    const { e, n } = super.key.public;
    return Number(binpow(BigInt(number), BigInt(e)) % BigInt(n));
  }

  /**
   * @param {number} number number to decrypt.
   * @return {number} decrypted number.
   */
  #decrypt(number) {
    const { d, n } = super.key.secret;
    return Number(binpow(BigInt(number), BigInt(d)) % BigInt(n));
  }

  /**
   * @param {string} string original text.
   * @return {string} encrypted text.
   */
  encode(string) {
    let output = "";
    for (const char of string) {
      output += String.fromCharCode(this.#encrypt(char.charCodeAt()));
    }
    return output;
  }

  /**
   * @param {string} string encrypted text.
   * @return {string} original text.
   */
  decode(string) {
    let output = "";
    for (const char of string) {
      output += String.fromCharCode(this.#decrypt(char.charCodeAt()));
    }
    return output;
  }
}

module.exports = RSA.singleton;
