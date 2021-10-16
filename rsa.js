const atkin = require("./bin/atkin");
const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");
const range = require("./bin/range");

class RSA {
  static #instance = null;

  /**
   * Creates only one instance of RSA class throughout the app
   * @param {object} options option list.
   * @param {number} options.bit bit complexity.
   */
  static singleton(options) {
    if (options.bit < 0 || options.bit > 16) {
      throw new Error("Bit complexity in range of [0, 16]");
    }

    if (!RSA.#instance) {
      RSA.#instance = new RSA(options);
    }

    return RSA.#instance;
  }

  #primes;

  /**
   * Constructor of RSA class
   * @param {object} options option list.
   * @param {number} options.bit - bit complexity.
   */
  constructor({ bit }) {
    this.#primes = atkin(2 ** bit - 1);
    this.initialize();
  }

  initialize = () => {
    this._p = this.#primes[range(2, this.#primes.length - 1)];
    this._q = this.#primes[range(2, this.#primes.length - 1)];
    this._n = this._p * this._q;
    this._phi = (this._p - 1) * (this._q - 1);

    // Generating Public Key:
    this._es = [];
    for (let e = 2; e < this._phi; e++) {
      // Choose 'e' such that 1 < e < φ(n) and e and φ(n) are coprime
      if (bingcd(e, this._phi) === 1) this._es.push(e);
    }
    this._e = this._es[range(0, this._es.length - 1)];

    // Generating Private Key:
    this._ds = [];
    for (let d = 2; d < this._phi; d++) {
      // Choose 'd' such that (d * e) % φ(n) = 1
      if ((d * this._e) % this._phi === 1) this._ds.push(d);
    }
    this._d = this._ds[range(0, this._ds.length - 1)];
  };

  /**
   * @param {number} number number to encrypt.
   * @return {number} encrypted number.
   */
  #encrypt(number) {
    return Number(binpow(BigInt(number), BigInt(this._e)) % BigInt(this._n));
  }

  /**
   * @param {number} number number to decrypt.
   * @return {number} decrypted number.
   */
  #decrypt(number) {
    return Number(binpow(BigInt(number), BigInt(this._d)) % BigInt(this._n));
  }

  /**
   * @param {string} string original text.
   * @return {string} encrypted text.
   */
  encode = (string) => {
    let output = "";
    for (const char of string) {
      output += String.fromCodePoint(this.#encrypt(char.codePointAt()));
    }
    return output;
  };

  /**
   * @param {string} string encrypted text.
   * @return {string} original text.
   */
  decode = (string) => {
    let output = "";
    for (const char of string) {
      output += String.fromCodePoint(this.#decrypt(char.codePointAt()));
    }
    return output;
  };

  get log() {
    return { p: this._p, q: this._q, n: this._n, phi: this._phi };
  }
  get key() {
    return {
      public: { e: this._e, n: this._n },
      secret: { d: this._d, n: this._n },
    };
  }
}

module.exports = RSA.singleton;
